import React from 'react';
import './FollowAndFollowingModal.css';
import propTypes from 'prop-types';


const FollowAndFollowingModal = ({setShowFollowAndFollowingModal}) => {
    // const handleCancelBtnClick = () => {
    //     console.log('cancel');
    //     setShowFollowAndFollowingModal(false);
    // };
    return ( 
        <div className='single-modal'>
            
        </div>
    );
};

FollowAndFollowingModal.propTypes = {
    setShowFollowAndFollowingModal: propTypes.func.isRequired
};
 
export default FollowAndFollowingModal;