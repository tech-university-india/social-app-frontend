import React from 'react';
import { POST_ACTION } from '../../constants/endPoints';
import makeRequest from '../../utils/makeRequest';
import ImageSlider from '../ImageSlider';

import './entity.css';
import PostMeta from '../PostMeta';


const Entity = ({ entity }) => {
	console.log('POST RENDERED', entity);

	const [isLiked, setIsLiked] = React.useState(Boolean(entity.Actions.length));
	const [likeCount, setLikeCount] = React.useState(entity.likeCount);
	const [commentCount, setCommentCount] = React.useState(entity.commentCount);

	const likeHandler = () => {
		isLiked 
		? null : 
		makeRequest(POST_ACTION({ type: 'LIKE', entityId: entity.id }));
		setIsLiked(!isLiked);
		setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
	};

	const postComment = (comment) => {
		setCommentCount(commentCount + 1);
		makeRequest(POST_ACTION({ type: 'COMMENT', entityId: entity.id, meta: { comment } }));
	};

	return (
		<div className="entity">
			<div className="entity-header">
				<div className="user-image"><img src={entity.User.profilePictureURL} alt="DP" /></div>
				<div className="user-name-designation">
					<div className="user-name">{entity.User.userName}</div>
					<div className="user-designation">{entity.User.designation}</div>
				</div>
			</div>
			<div className="entity-body">
				<div className="caption">{entity.caption}</div>
				{entity.imageURL.length && <div className="image-slider">
					<ImageSlider slides={entity.imageURL} />
				</div>}
			</div>
			{/* <div className="post-meta">
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
			</div> */}
			{
				entity?.type === 'POST' 
				? <PostMeta tags={entity.Tags} isLiked={isLiked} likeCount={likeCount} commentCount={commentCount} likeHandler={likeHandler} /> 
				: null
			}
			<div className="comment-box"><input type="input" onKeyDown={(e) => e.key === 'Enter' ? postComment(e.target.value) : console.log(e.key) } /></div>
		</div>
	);
};

export default React.memo(Entity);