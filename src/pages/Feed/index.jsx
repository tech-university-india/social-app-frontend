import { useEffect, useRef, useState, useCallback } from 'react';
import Post from '../../components/Post';
import { GET_POST_FEED } from '../../constants/endPoints';
import makeRequest from '../../utils/makeRequest';

const Feed = () => {

	const [posts, setPosts] = useState();
	const [next, setNext] = useState(null);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);

	console.log('rendered')

	const observer = new useRef();
	const lastPostRef = useCallback((node) => {
		if (loading) return;
		if (observer.current) observer.current.disconnect();
		observer.current = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting && next) {
				console.log('visible')
				setLoading(true);
				console.log(next);
				makeRequest(next, GET_POST_FEED.method, { headers: GET_POST_FEED.headers })
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
		makeRequest(GET_POST_FEED.url, GET_POST_FEED.method, { headers: GET_POST_FEED.headers })
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

	return (
		// !loading &&
		<div className="feed">
			{posts
				&& posts.map((post, index) =>
					posts.length === index + 1
						? <Post key={post.id} post={post} />
						: <Post key={post.id} ref={lastPostRef} post={post} />
				)
			}
			{loading && <div>Loading...</div>}
		</div>
	);
};

export default Feed;