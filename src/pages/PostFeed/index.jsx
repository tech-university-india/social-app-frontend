import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import Post from '../../components/Post';
import { GET_POST_FEED } from '../../constants/endPoints';
import makeRequest from '../../utils/makeRequest';

const PostFeed = () => {

	const [posts, setPosts] = useState();
	const [next, setNext] = useState(null);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);

	console.log('rendered')

	const memoizedPosts = useMemo(() => posts, [posts]);

	const observer = new useRef();
	const lastPostRef = useCallback((node) => {
		if (loading) return;
		if (observer.current) observer.current.disconnect();
		observer.current = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting && next) {
				console.log('visible')
				setLoading(true);
				console.log(next);
				makeRequest({ url: next, method: GET_POST_FEED().method, headers: GET_POST_FEED().headers })
					.then((res) => {
						setPosts((prevPosts) => [...prevPosts, ...res.items]);
						setNext(res.meta.next);
						setLoading(false);
					})
					.catch((err) => {
						console.log(err);
						setLoading(false);
					});
			}
		});
		if (node) observer.current.observe(node);
	}, [loading, next])

	useEffect(() => {
		setLoading(true);
		makeRequest(GET_POST_FEED())
			.then((res) => {
				console.log(res);
				setPosts(res.items);
				setNext(res.meta.next);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
				setLoading(false);
			});
	}, []);

	const actionHandler = (index) => {
		console.log(index)
		setPosts((prevPosts) => {
			const newPosts = structuredClone(prevPosts);
			newPosts[index].liked = !newPosts[index].liked;
			newPosts
			return newPosts;
		})
	}

	return (
		// !loading &&
		<div className="feed">
			{memoizedPosts
				&& memoizedPosts.map((post, index) => <Post key={post.id} post={post} index={index} />
					// posts.length === index + 1
					// 	? <Post key={post.id} post={post} index={index} />
					// 	: <Post key={post.id} ref={lastPostRef} post={post} index={index} handleAction={actionHandler}/>
				)
			}
			<div className="ref-div" ref={lastPostRef}></div>
			{loading && <div>Loading...</div>}
		</div>
	);
};

export default PostFeed;