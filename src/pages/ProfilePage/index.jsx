import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FollowAndFollowingModal } from '../../components';
import './ProfilePage.css';
const ProfilePage = () => {

    const {userId} = useParams();

    const [showFollowAndFollowingModal, setShowFollowAndFollowingModal] = useState(false);
    const [isFollow, setIsFollow] = useState(false);
   
    const handleFollowingBtn = () => {
        setShowFollowAndFollowingModal(true);
        setIsFollow(false);
    };

    const handleFollowBtn = () => {
        setShowFollowAndFollowingModal(true);
        setIsFollow(true);
    };

    return ( 
        <div>
            <button onClick = {handleFollowingBtn} >Show Following</button>
            <button onClick= {handleFollowBtn}>Show Follower</button>
            { showFollowAndFollowingModal && <FollowAndFollowingModal isFollow={isFollow} userId={userId}
                setShowFollowAndFollowingModal={setShowFollowAndFollowingModal} 
                setIsFollows={setIsFollow}/> }

        </div>
    );
};
 
export default ProfilePage;