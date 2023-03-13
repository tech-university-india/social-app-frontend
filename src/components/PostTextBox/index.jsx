import React, { useState } from 'react';
import TaggingModal from '../TaggingModal';
import './PostTextBox.css';
const PostTextBox = () => {

    const [showModal, setShowModal] = useState(false);
    const [taggedPeople, setTaggedPeople] = useState(['Ritvik Mahajan', 'Ashish P']);
    return (
        <div className='post-text-box'>
            <div className='post-text-box-container'>
                <textarea placeholder='What are you thinking?' />
                <div className='post-tag-area'>

                    <img src='/assets/Icons/a-add.svg' onClick={() => setShowModal(true)}></img>
                    <span className='post-tagged-people'
                        onClick={() => setShowModal(true)}
                    >
                        {
                            taggedPeople.length == 0 ?
                                'Tag People' :
                                taggedPeople.length <= 2 ?
                                    taggedPeople.join(', ')
                                    : taggedPeople.slice(0, 2).join(', ') + ` and ${taggedPeople.length - 2} others.`
                        }
                    </span>

                </div>
            </div>

            {showModal && <TaggingModal
                setShowModal={setShowModal}
                taggedPeople={taggedPeople}
                setTaggedPeople={setTaggedPeople}
            />}
        </div>
    );
};

export default PostTextBox;