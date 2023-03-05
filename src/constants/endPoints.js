export const BACK_END_URL = 'http://localhost:4000';

export const AUTH_LOGIN = (data) => ({
	url: `${BACK_END_URL}/auth/login`,
	method: 'POST',
	data,
});

export const AUTH_REGISTER = (data) => ({
	url: `${BACK_END_URL}/auth/register`,
	method: 'POST',
	data,
});

export const GET_POST_FEED = {
	url: `${BACK_END_URL}/entity/post/feed`,
	method: 'GET',
	headers: {
		Authorization: `Bearer ${localStorage.getItem('token')}`,
	}
};