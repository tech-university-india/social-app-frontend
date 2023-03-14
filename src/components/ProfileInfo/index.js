import React from 'react';
import ProfileImage from '../../assests/img_avatar.png';
import './index.css';
import {} from '@fortawesome/free-solid-svg-icons';
import BlueButton from '../BlueButton';
import WhiteButton from '../WhiteButton';
import { MdOutlinePeopleAlt } from 'react-icons/md';
import { IoIosPeople } from 'react-icons/io';
import PropTypes from 'prop-types';


function ProfileInfo({profileData, ownProfile, following, followers}) {
    

    return (
        <div>
            <div className="profile-info">
                <img src={ProfileImage} alt="avatar" />
                <div className="profile-name-title">
                    <div className="name">{profileData.userName}</div>
                    <div className="title">
                        <div>{profileData.designation}</div>
                    </div>
                    <div className="button">
                        <BlueButton text={ownProfile ? 'Edit Profile' : 'Follow'} />
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

                        {profileData.Interests &&
                            profileData.Interests.map((interest) => {
                                return (
                                    <WhiteButton
                                        key={interest.id}
                                        text={interest.interestName}
                                    />
                                );
                            })}

                        <div className="more-interests">
                            <a href="">More</a>
                        </div>
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
