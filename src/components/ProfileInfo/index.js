import React, { useEffect, useState } from 'react';
import ProfileImage from '../../assests/img_avatar.png';
import './index.css';
import {} from '@fortawesome/free-solid-svg-icons';
import BlueButton from '../BlueButton';
import WhiteButton from '../WhiteButton';
import { MdOutlinePeopleAlt } from 'react-icons/md';
import { IoIosPeople } from 'react-icons/io';
import PropTypes from 'prop-types';
import { checkFollowers } from '../../utils/common';
import makeRequest from '../../utils/makeRequest';
import { useParams } from 'react-router';
import BlueBorderButton from '../BlueBorderButton';

function ProfileInfo({ profileData, ownProfile, following, followers }) {
    //get token from local storage
    const token = localStorage.getItem('jwtToken');
    //use atob to decode the token
    const decodedToken = atob(token.split('.')[1]);
    //parse the decoded token to get the user id
    const parsedToken = JSON.parse(decodedToken);

    const [showAllInterests, setShowAllInterests] = useState(false);

    const handleShowAllInterests = () => {
        setShowAllInterests(!showAllInterests);
    };

    const [isFollowing, setIsFollowing] = useState(
        checkFollowers(followers, parsedToken.id)
    );

    useEffect(() => {
        console.log(
            'check followers',
            checkFollowers(followers, parsedToken.id)
        );
        console.log('is following', isFollowing);
        setIsFollowing(checkFollowers(followers, parsedToken.id));
    }, [followers]);

    const { userId } = useParams();

    const handleUnfollow = () => {
        try {
            console.log('unfollow');
            const unfollow = async () => {
                await makeRequest({
                    method: 'DELETE',
                    url: `/profile/unfollow/${userId}`,
                });
            };
            unfollow();
            setIsFollowing(false);
        } catch (e) {
            console.log(e);
        }
    };

    const handleFollow = () => {
        console.log('follow');
        try {
            const follow = async () => {
                await makeRequest(
                    {
                        method: 'POST',
                        url: '/profile/follow/',
                    },
                    {
                        data: {
                            userId: userId,
                        },
                    }
                );
            };
            follow();

            setIsFollowing(true);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div>
            <div className="profile-info">
                <img src={ProfileImage} alt="avatar" />
                <div className="profile-name-title">
                    <div className="name">{profileData.userName}</div>
                    <div className="title">
                        <div>{profileData.designation}</div>
                    </div>
                    <div
                        onClick={isFollowing ? handleUnfollow : handleFollow}
                        className="button"
                    >
                        {isFollowing && <BlueBorderButton text="Unfollow" />}
                        {!isFollowing && (
                            <BlueButton
                                text={ownProfile ? 'Edit Profile' : 'Follow'}
                            />
                        )}
                    </div>
                    <div className="meta">
                        <div className="following">
                            <MdOutlinePeopleAlt className="icon" />
                            <div>{following.length}</div>
                        </div>
                        <div className="followers">
                            <IoIosPeople className="icon" />
                            <div>{followers.length}</div>
                        </div>
                    </div>

                    <div className="interests">
                        <div className="interest-title">Interests</div>
                        <div
                            className={`interest-list ${
                                showAllInterests
                                    ? 'interest-list-scrollable'
                                    : ''
                            }`}
                        >
                            {profileData.Interests &&
                                profileData.Interests.slice(
                                    0,
                                    showAllInterests ? undefined : 3
                                ).map((interest) => {
                                    return (
                                        <WhiteButton
                                            key={interest.id}
                                            text={interest.interestName}
                                        />
                                    );
                                })}
                        </div>
                        {!showAllInterests && (
                            <div className="more-interests">
                                <a href="#" onClick={handleShowAllInterests}>
                                    More
                                </a>
                            </div>
                        )}

                        {showAllInterests && (
                            <div className="more-interests">
                                <a href="#" onClick={handleShowAllInterests}>
                                    Less
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;

//define prop types
ProfileInfo.propTypes = {
    profileData: PropTypes.object,
    ownProfile: PropTypes.bool,
    following: PropTypes.array,
    followers: PropTypes.array,
};
