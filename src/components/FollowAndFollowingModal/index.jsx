/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './FollowAndFollowingModal.css';
import propTypes from 'prop-types';
import profileImage from '../../tempAssets/images.png';
import makeRequest from '../../utils/makeRequest';
import {
    FOLLOW_USER,
    GET_FOLLOWERS_OF_USERID,
    GET_FOLLOWING_OF_USERID,
    UNFOLLOW_USER,
} from '../../constants/ApiEndpoints';

const FollowAndFollowingModal = ({
    isFollow,
    userId,
    setIsFollows,
    setShowFollowAndFollowingModal,
}) => {
    const [followers, setFollowers] = useState([]);
    const [following, setFollowing] = useState([]);

    useEffect(() => {
        if (isFollow) {
            document.getElementById('follower-tag').style.color = '#2251FF';
            document.getElementById('following-tag').style.color = 'black';
            console.log(typeof userId, userId);
            makeRequest(GET_FOLLOWERS_OF_USERID(userId))
                .then((res) => {
                    console.log(res);
                    setFollowers(res);
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            makeRequest(GET_FOLLOWING_OF_USERID(userId))
                .then((res) => {
                    console.log(res);
                    setFollowing(res);
                })
                .catch((err) => {
                    console.log(err);
                });
            document.getElementById('following-tag').style.color = '#2251FF';
            document.getElementById('follower-tag').style.color = 'black';
        }
    }, [isFollow]);

    const handleFollowingClick = () => {
        document.getElementById('following-tag').style.color = '#2251FF';
        document.getElementById('follower-tag').style.color = 'black';
        setIsFollows(false);
    };

    const handleFollowerClick = () => {
        document.getElementById('follower-tag').style.color = '#2251FF';
        document.getElementById('following-tag').style.color = 'black';
        setIsFollows(true);
    };

    const handleModalClick = (e) => {
        e.stopPropagation();
    };

    const handleFollowBtnClick = (userId) => {
        makeRequest(FOLLOW_USER, {
            data: { userId: userId },
        }).then((res) => {
            if(isFollow){
                const index = followers.findIndex((follower) => follower.User.FMNO === userId);
                followers[index].User.isFollowed = '1';
                setFollowers([...followers]);
            }
            else{
                const index = following.findIndex((follower) => follower.User.FMNO === userId);
                following[index].User.isFollowed = '1';
                setFollowing([...following]);
            }
        });
    };
    const handleUnfollowBtnClick = (userId) => {
        makeRequest(UNFOLLOW_USER(userId))
            .then((res) => {
                if(isFollow){
                    const index = followers.findIndex((follower) => follower.User.FMNO === userId);
                    followers[index].User.isFollowed = '0';
                    setFollowers([...followers]);
                }
                else{
                    const index = following.findIndex((follower) => follower.User.FMNO === userId);
                    following[index].User.isFollowed = '0';
                    setFollowing([...following]);
                }
            });
    };

    return (
        <div
            onClick={() => setShowFollowAndFollowingModal(false)}
            className="single-modal"
        >
            <div onClick={handleModalClick} className="single-modal-content">
                <div className="single-modal-header">
                    <div className="follower-tag">
                        {/* {isFollow ? <span onClick={handleFollowerClick} className="header-tag" id="follower-tag" style={{color: '#2251FF'}}>follower</span> 
                            : <span onClick={handleFollowerClick} className="header-tag" id="follower-tag">follower</span>} */}
                        <span
                            onClick={handleFollowerClick}
                            className="header-tag"
                            id="follower-tag"
                        >
              follower
                        </span>
                    </div>
                    <div className="following-tag">
                        {/* { isFollow ? <span onClick={handleFollowingClick} className="header-tag" id="following-tag" style={{color: 'black'}}>following</span>
                            : <span onClick={handleFollowingClick} className="header-tag" id="following-tag" style={{color: '#2251FF'}}>following</span>} */}
                        <span
                            onClick={handleFollowingClick}
                            className="header-tag"
                            id="following-tag"
                        >
              following
                        </span>
                    </div>
                </div>
                <div className="modal-content">
                    {isFollow &&
            followers.map((follower) => (
                <div key={follower.User.FMNO} className="modal-list">
                    <div className="img-name-desg-container">
                        <img id="profile-img" src={profileImage} alt="" />
                        <div className="name-desg-container">
                            <span className="name">{follower.User.userName}</span>
                            <span className="designation">
                                {follower.User.designation}
                            </span>
                        </div>
                    </div>
                    <div className="follow-btn-container">
                        {console.log(
                            follower.User.isFollowed === '0',
                            follower.User.isFollowed
                        )}
                        {follower.User.isFollowed === '0' ? (
                            <button
                                onClick={() => handleFollowBtnClick(follower.User.FMNO)}
                                className="action-btn"
                                id="follow-btn"
                            >
                      follow
                            </button>
                        ) : (
                            <button
                                onClick={() => handleUnfollowBtnClick(follower.User.FMNO)}
                                className="action-btn"
                            >
                      Unfollow
                            </button>
                        )}
                        {/* <button className="follow-btn">follow</button> */}
                    </div>
                </div>
            ))}
                    {!isFollow &&
            following.map((follower) => (
                <div key={follower.User.FMNO} className="modal-list">
                    <div className="img-name-desg-container">
                        <img id="profile-img" src={profileImage} alt="" />
                        <div className="name-desg-container">
                            <span className="name">{follower.User.userName}</span>
                            <span className="designation">
                                {follower.User.designation}
                            </span>
                        </div>
                    </div>
                    <div className="follow-btn-container">
                        {/* {console.log(typeof follower.User.isFollowed)} */}
                        {follower.User.isFollowed === '0' ? (
                            <button
                                onClick={() => handleFollowBtnClick(follower.User.FMNO)}
                                className="action-btn"
                                id="follow-btn"
                            >
                      follow
                            </button>
                        ) : (
                            <button
                                onClick={() => handleUnfollowBtnClick(follower.User.FMNO)}
                                className="action-btn"
                            >
                      Unfollow
                            </button>
                        )}
                        {/* <button className="follow-btn">Unfollow</button> */}
                    </div>
                </div>
            ))}

                    {/* <div className="modal-list">
                        <div className="img-name-desg-container">
                            <img id="profile-img" src={profileImage} alt="" />
                            <div className="name-desg-container">
                                <span className="name">name</span>
                                <span className="designation">designation</span>
                            </div>
                        </div>
                        <div className="follow-btn-container">
                            <button className="follow-btn">follow</button>
                        </div>
                    </div>
                    <div className="modal-list">
                        <div className="img-name-desg-container">
                            <img id="profile-img" src={profileImage} alt="" />
                            <div className="name-desg-container">
                                <span className="name">name</span>
                                <span className="designation">designation</span>
                            </div>
                        </div>
                        <div className="follow-btn-container">
                            <button className="follow-btn">follow</button>
                        </div>
                    </div>
                    <div className="modal-list">
                        <div className="img-name-desg-container">
                            <img id="profile-img" src={profileImage} alt="" />
                            <div className="name-desg-container">
                                <span className="name">name</span>
                                <span className="designation">designation</span>
                            </div>
                        </div>
                        <div className="follow-btn-container">
                            <button className="follow-btn">follow</button>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

FollowAndFollowingModal.propTypes = {
    setShowFollowAndFollowingModal: propTypes.func.isRequired,
    isFollow: propTypes.bool.isRequired,
    userId: propTypes.string.isRequired,
    setIsFollows: propTypes.func.isRequired,
};

export default FollowAndFollowingModal;
