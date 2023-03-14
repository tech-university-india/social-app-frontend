export const BACK_END_URL = 'http://localhost:4000';

export const AUTH_LOGIN = (data) => ({
	url: '/auth/login',
	method: 'POST',
	data,
});

export const AUTH_REGISTER = (data) => ({
	url: '/auth/register',
	method: 'POST',
	data,
});

export const GET_POST_FEED = (url = '/entity/post/feed') => ({
	url: url,
	method: 'GET',
	headers: {
		Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc4ODIyNzQ1LCJleHAiOjE2Nzg5MDkxNDV9.CWRMQzcFWEGsJM-OxIWIIdVQt99P3E76ldEy0RuYH7E'
		// Authorization: `Bearer ${localStorage.getItem('token')}`,
	}
});

export const GET_ANNOUNCEMENT_FEED = (url = '/entity/announcement/feed') => ({
	url: url,
	method: 'GET',
	headers: {
		Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc4ODIyNzQ1LCJleHAiOjE2Nzg5MDkxNDV9.CWRMQzcFWEGsJM-OxIWIIdVQt99P3E76ldEy0RuYH7E'
		// Authorization: `Bearer ${localStorage.getItem('token')}`,
	}
});

export const POST_ACTION = (data) => ({
	url: '/action',
	method: 'POST',
	data,
	headers: {
		Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc4ODIyNzQ1LCJleHAiOjE2Nzg5MDkxNDV9.CWRMQzcFWEGsJM-OxIWIIdVQt99P3E76ldEy0RuYH7E'
		// Authorization: `Bearer ${localStorage.getItem('token')}`,
	}
});

export const DELETE_ACTION = (id) => ({
	url: `/action/${id}`,
	method: 'DELETE',
	headers: {
		Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc4ODIyNzQ1LCJleHAiOjE2Nzg5MDkxNDV9.CWRMQzcFWEGsJM-OxIWIIdVQt99P3E76ldEy0RuYH7E'
		// Authorization: `Bearer ${localStorage.getItem('token')}`,
	}
});