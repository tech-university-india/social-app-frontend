import React from 'react';
import { DELETE_ACTION, POST_ACTION } from '../../constants/endPoints';
import makeRequest from '../../utils/makeRequest';
import ImageSlider from '../ImageSlider';

import like from "../../Assets/Icons/like.svg";
import liked from "../../Assets/Icons/liked.svg";
import comments from "../../Assets/Icons/a-chat.svg";
import tag from "../../Assets/Icons/tag.svg";
import location from "../../Assets/Icons/location.svg";
import calendar from "../../Assets/Icons/calendar.svg";

import './entity.css';

const Entity = ({ entity, navigate }) => {
	console.log('POST RENDERED', entity);

	const [isLiked, setIsLiked] = React.useState(entity.Actions?.[0]);
	const [likeCount, setLikeCount] = React.useState(entity.likeCount);
	const [commentCount, setCommentCount] = React.useState(entity.commentCount);

	const likeHandler = () => {
		isLiked 
		? makeRequest(DELETE_ACTION(isLiked.id)).then(res => setIsLiked(null))
		: makeRequest(POST_ACTION({ type: 'LIKE', entityId: entity.id })).then(res => setIsLiked(res));
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
					<div className="user-name"  onClick={() => navigate(`/profile/${entity.User.FMNO}`)}>{entity.User.userName}</div>
					<div className="user-designation">{entity.User.designation}</div>
				</div>
			</div>
			<div className="entity-body">
				<div className="caption">{entity.caption}</div>
				{entity.imageURL.length && <div className="image-slider">
					<ImageSlider slides={entity.imageURL} />
				</div>}
			</div>
			<div className="entity-meta">
				{
					entity.type === 'POST' 
					? <div className="post-tags">
						{entity.Tags?.length > 0 && <img src={tag} alt="TAG IMAGE" />}
						{entity.Tags?.map((tag, index) => <div className="tag" key={index} onClick={() => navigate(`/profile/${tag.User.FMNO}`)}>{tag.User.userName}</div>)}
					</div>
					: <div className="event-meta">
						{entity.meta?.venue && <div className="event-venue"><img src={location} alt="LOCATION" />{entity.meta.venue}</div>}
						{entity.meta?.date && <div className="event-date"><img src={calendar} alt="CALENDAR" />{entity.meta.date}</div>}
					</div>
				}
				<div className="entity-engagements">
					<div className="like" onClick={likeHandler}>
						<div className="is-liked"><img src={ isLiked ? liked : like } alt="LIKE ICON" /></div>
						<div className="like-count">{likeCount}</div>
					</div>
					<div className="comment">
						<div className="comment-icon"><img src={comments} alt="COMMENT ICON" /></div>
						<div className="comment-count">{commentCount}</div>
					</div>
					{/* <div className="repost"><img src="" alt="" /></div> */}
				</div>
			</div>
			{/* {
				entity?.type === 'POST' 
				? <PostMeta tags={entity.Tags} isLiked={isLiked} likeCount={likeCount} commentCount={commentCount} likeHandler={likeHandler} /> 
				: null
			} */}
			<div className="comment-box"><input type="input" onKeyDown={(e) => e.key === 'Enter' ? postComment(e.target.value) : console.log(e.key) } /></div>
		</div>
	);
};

export default React.memo(Entity);