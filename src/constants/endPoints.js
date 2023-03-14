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
		Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc4NzM1ODkzLCJleHAiOjE2Nzg4MjIyOTN9.AfpQBIj_g5sbDWcHtAyzDXfyK0kfAI0kjI20V_BirVc'
		// Authorization: `Bearer ${localStorage.getItem('token')}`,
	}
});

export const POST_ACTION = (data) => ({
	url: '/action',
	method: 'POST',
	data,
	headers: {
		Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc4NzM1ODkzLCJleHAiOjE2Nzg4MjIyOTN9.AfpQBIj_g5sbDWcHtAyzDXfyK0kfAI0kjI20V_BirVc'
		// Authorization: `Bearer ${localStorage.getItem('token')}`,
	}
});

export const DELETE_ACTION = (id) => ({
	url: `/action/${id}`,
	method: 'DELETE',
	headers: {
		Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc4NzM1ODkzLCJleHAiOjE2Nzg4MjIyOTN9.AfpQBIj_g5sbDWcHtAyzDXfyK0kfAI0kjI20V_BirVc'
		// Authorization: `Bearer ${localStorage.getItem('token')}`,
	}
});