import React from 'react'
import { POST_ACTION } from '../../constants/endPoints'
import makeRequest from '../../utils/makeRequest'

import './post.css'


const Post = ({ post }) => {
	console.log('POST RENDERED')

	const [isLiked, setIsLiked] = React.useState(Boolean(post.Actions.length))
	const [likeCount, setLikeCount] = React.useState(post.likeCount)
	const [commentCount, setCommentCount] = React.useState(post.commentCount)

	const likeHandler = () => {
		isLiked ? null : makeRequest(POST_ACTION({ type: 'LIKE', entityId: post.id }))
		setIsLiked(!isLiked)
		setLikeCount(isLiked ? likeCount - 1 : likeCount + 1)
	}

	const postComment = (comment) => {
		setCommentCount(commentCount + 1)
		makeRequest(POST_ACTION({ type: 'COMMENT', entityId: post.id, meta: { comment } }))
	}

	return (
		<div className="post">
			<div className="post-header">
				<div className="user-image">{post.User.profilePictureURL}</div>
				<div className="user-name">{post.User.userName}</div>
				<div className="user-designation">{post.User.designation}</div>
			</div>
			<div className="post-body">
				<div className="caption">{post.caption}</div>
				<div className="image"><img src={post.imageURL} alt="Post Image" loading='lazy' /></div>
			</div>
			<div className="post-engagements">
				<div className="like" onClick={likeHandler}>
					<div className="is-liked">{ isLiked ? "Liked" : "Not Liked" }</div>
					<div className="like-count">{likeCount}</div>
				</div>
				<div className="comment">
					<div className="comment-icon"></div>
					<div className="comment-count">{commentCount}</div>
				</div>
				<div className="repost">
					<div className="repost-icon"></div>
				</div>
				<div className="comment-box"><input type="input" onKeyDown={(e) => e.key === 'Enter' ? postComment(e.target.value) : console.log(e.key) } /></div>
			</div>
		</div>
	)
}

export default React.memo(Post)