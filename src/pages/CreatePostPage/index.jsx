import React from 'react';
import { ImageDropBox, Navbar, PostTextBox } from '../../components';
import './CreatePostPage.css';
const CreatePostPage = () => {
	return (
		<div className='create-post-page'>
			<Navbar />
			<div className='post-container'>
				<div className='post-header'>
					<h1>Post It !</h1>
					<span><img src='/assets/Icons/c-remove.svg' /></span>
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