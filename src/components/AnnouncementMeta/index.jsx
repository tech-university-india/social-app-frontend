import React from "react";

import like from "../../Assets/Icons/like.svg";
import liked from "../../Assets/Icons/liked.svg";
import comments from "../../Assets/Icons/a-chat.svg";
import tag from "../../Assets/Icons/tag.svg";

const AnnouncementMeta = ({ meta, isLiked, likeCount, commentCount, likeHandler }) => {
    return (
        <div className="announcement-meta">
            <div className="post-tags">
                {tags.length > 0 && <img src={tag} alt="TAG IMAGE" />}
                {tags.map((tag, index) => <div className="tag" key={index}>{tag.User.userName}</div>)}
            </div>
            <div className="announcement-engagements">
                <div className="like" onClick={likeHandler}>
                    <div className="is-liked"><img src={ isLiked ? liked : like } alt="LIKE ICON" /></div>
                    <div className="like-count">{likeCount}</div>
                </div>
                <div className="comment">
                    <div className="comment-icon"><img src={comments} alt="COMMENT ICON" /></div>
                    <div className="comment-count">{commentCount}</div>
                </div>
            </div>
        </div>
    )
};