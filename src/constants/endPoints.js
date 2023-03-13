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
		Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc4Njg5OTAzLCJleHAiOjE2Nzg3NzYzMDN9.sceMA4s-CTFPlHKQbzOveoSfk3SdQpdYX250dVdHQz8'
		// Authorization: `Bearer ${localStorage.getItem('token')}`,
	}
});

export const POST_ACTION = (data) => ({
	url: '/action',
	method: 'POST',
	data,
	headers: {
		Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc4MDM3Njk4LCJleHAiOjE2NzgxMjQwOTh9.b68nI-ZjqSNlFIBY63JWB7Vs3C_2ZDEVYvc3wOizydA'
		// Authorization: `Bearer ${localStorage.getItem('token')}`,
	}
});

export const DELETE_ACTION = (id) => ({
	url: `/action/${id}`,
	method: 'DELETE',
	headers: {
		Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc4MDM3Njk4LCJleHAiOjE2NzgxMjQwOTh9.b68nI-ZjqSNlFIBY63JWB7Vs3C_2ZDEVYvc3wOizydA'
		// Authorization: `Bearer ${localStorage.getItem('token')}`,
	}
});