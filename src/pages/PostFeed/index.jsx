import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Entity from '../../components/Entity';
import { GET_POST_FEED } from '../../constants/endPoints';
import makeRequest from '../../utils/makeRequest';

import './PostFeed.css';

const PostFeed = () => {

	const [posts, setPosts] = useState();
	const [next, setNext] = useState(null);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	// console.log('rendered');

	const memoizedPosts = useMemo(() => posts, [posts]);

	const observer = new useRef();
	const lastPostRef = useCallback((node) => {
		if (loading) return;
		if (observer.current) observer.current.disconnect();
		observer.current = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting && next) {
				// console.log('visible');
				setLoading(true);
				// console.log(next);
				makeRequest({ url: next, method: GET_POST_FEED().method, headers: GET_POST_FEED().headers })
					.then((res) => {
						setPosts((prevPosts) => [...prevPosts, ...res.items]);
						setNext(res.meta.next);
						setLoading(false);
					})
					.catch((err) => {
						console.log(err);
						setLoading(false);
						setError(true);
					});
			}
		});
		if (node) observer.current.observe(node);
	}, [loading, next]);

	useEffect(() => {
		setLoading(true);
		makeRequest(GET_POST_FEED())
			.then((res) => {
				// console.log(res);
				setPosts(res.items);
				setNext(res.meta.next);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
				setLoading(false);
				setError(true);
			});
	}, []);

	if(error) return <div>Something went wrong</div>

	return (
		// !loading &&
		<div className="feed">
			<Navbar navigate={navigate} />
			<div className="post-feed">
				{memoizedPosts
					&& memoizedPosts.map((post, index) => <Entity key={post.id} entity={post} index={index} navigate={navigate} />
						// posts.length === index + 1
						// 	? <Post key={post.id} post={post} index={index} />
						// 	: <Post key={post.id} ref={lastPostRef} post={post} index={index} handleAction={actionHandler}/>
					)
				}
				<div className="ref-div" ref={lastPostRef}></div>
				{loading && <div>Loading...</div>}
			</div>
		</div>
	);
};

export default PostFeed;