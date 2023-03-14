import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import { Navbar } from '../../components';
import Entity from '../../components/Entity';
import { GET_ANNOUNCEMENT_FEED } from '../../constants/endPoints';
import makeRequest from '../../utils/makeRequest';

import './Announcements.css';

const Announcements = () => {

	const [announcements, setAnnouncements] = useState();
	const [next, setNext] = useState(null);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);

	console.log('rendered');

	const memoizedAnnouncements = useMemo(() => announcements, [announcements]);

	const observer = new useRef();
	const lastAnnouncementRef = useCallback((node) => {
		if (loading) return;
		if (observer.current) observer.current.disconnect();
		observer.current = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting && next) {
				console.log('visible');
				setLoading(true);
				console.log(next);
				makeRequest({ url: next, method: GET_ANNOUNCEMENT_FEED().method, headers: GET_ANNOUNCEMENT_FEED().headers })
					.then((res) => {
						setAnnouncements((prevAnnoucements) => [...prevAnnoucements, ...res.items]);
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
	}, [loading, next]);

	useEffect(() => {
		setLoading(true);
		makeRequest(GET_ANNOUNCEMENT_FEED())
			.then((res) => {
				console.log(res);
				setAnnouncements(res.items);
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
		<div className="announcements-wrapper">
			<Navbar />
			<div className="announcements">
				{memoizedAnnouncements && memoizedAnnouncements.map((announcement, index) => <Entity key={announcement.id} entity={announcement} index={index} />)}
				<div className="ref-div" ref={lastAnnouncementRef}></div>
				{loading && <div>Loading...</div>}
			</div>
		</div>
	);
};

export default Announcements;