import React from 'react';
import { POST_ACTION } from '../../constants/endPoints';
import makeRequest from '../../utils/makeRequest';
import ImageSlider from '../ImageSlider';

import like from '../../Assets/Icons/like.svg';
import liked from '../../Assets/Icons/liked.svg';
import comments from '../../Assets/Icons/a-chat.svg';
import tag from '../../Assets/Icons/tag.svg';

import './post.css';


const Post = ({ post }) => {
	console.log('POST RENDERED');

	const [isLiked, setIsLiked] = React.useState(Boolean(post.Actions.length));
	const [likeCount, setLikeCount] = React.useState(post.likeCount);
	const [commentCount, setCommentCount] = React.useState(post.commentCount);

	const likeHandler = () => {
		isLiked 
		? null : 
		makeRequest(POST_ACTION({ type: 'LIKE', entityId: post.id }));
		setIsLiked(!isLiked);
		setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
	};

	const postComment = (comment) => {
		setCommentCount(commentCount + 1);
		makeRequest(POST_ACTION({ type: 'COMMENT', entityId: post.id, meta: { comment } }));
	};

	return (
		<div className="post">
			<div className="post-header">
				<div className="user-image"><img src={post.User.profilePictureURL} alt="DP" /></div>
				<div className="user-name-designation">
					<div className="user-name">{post.User.userName}</div>
					<div className="user-designation">{post.User.designation}</div>
				</div>
			</div>
			<div className="post-body">
				<div className="caption">{post.caption}</div>
				{/* <div className="image"><img src={post.imageURL} alt="Post Image" loading='lazy' /></div> */}
				{post.imageURL.length && <div className="image-slider">
					<ImageSlider slides={post.imageURL} />
				</div>}
			</div>
			<div className="post-meta">
				<div className="post-tags">
					{post.Tags.length > 0 && <img src={tag} alt="TAG IMAGE" />}
					{post.Tags.map((tag, index) => <div className="tag" key={index}>{tag.User.userName}</div>)}
				</div>
				<div className="post-engagements">
					<div className="like" onClick={likeHandler}>
						<div className="is-liked"><img src={ isLiked ? liked : like } alt="LIKE ICON" /></div>
						<div className="like-count">{likeCount}</div>
					</div>
					<div className="comment">
						<div className="comment-icon"><img src={comments} alt="COMMENT ICON" /></div>
						<div className="comment-count">{commentCount}</div>
					</div>
					<div className="repost">
						<div className="repost-icon"></div>
					</div>
				</div>
			</div>
			<div className="comment-box"><input type="input" onKeyDown={(e) => e.key === 'Enter' ? postComment(e.target.value) : console.log(e.key) } /></div>
		</div>
	);
};

export default React.memo(Post);