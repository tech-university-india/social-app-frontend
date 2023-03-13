import React, { useState } from 'react';
import { FollowAndFollowingModal } from '../../components';
import './ProfilePage.css';
const ProfilePage = () => {

    const [showFollowAndFollowingModal, setShowFollowAndFollowingModal] = useState(false);
   
    const handleFollowingBtn = () => {
        setShowFollowAndFollowingModal(true);
    };

    const handleFollowBtn = () => {
        setShowFollowAndFollowingModal(true);
    };

    return ( 
        <div>
            <button onClick = {handleFollowingBtn} >Show Following</button>
            <button onClick= {handleFollowBtn}>Show Follower</button>
            { showFollowAndFollowingModal && <FollowAndFollowingModal setShowFollowAndFollowingModal={setShowFollowAndFollowingModal} /> }
        </div>
    );
};
 
export default ProfilePage;