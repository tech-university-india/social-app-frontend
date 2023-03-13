import React from 'react';
import { ImageDropBox, PostTextBox } from '../../components';
import './CreatePostPage.css';
const CreatePostPage = () => {
    return (
        <div className='create-post-page'>
            <div className='post-container'>
                <div className='post-header'>
                    <h1>Post It!</h1>
                    <span>X</span>
                </div>
                <div className='post-body'>
                    <div className='post-body-left'>
                        <ImageDropBox />
                    </div>
                    <div className='post-body-right'>
                        <PostTextBox />
                    </div>
                </div>
                <div className='post-page-buttons'>
                    <button>Post</button>
                </div>
            </div>
        </div>
    );
};

export default CreatePostPage;