export const BACKEND_URL = 'http://localhost:4000';

export const ERROR_ROUTE = '/error';

export const LOGIN = {
    url: '/auth/login',
    method: 'POST',
};

export const REGISTER = {
    url: '/auth/register',
    method: 'POST',
};

export const VALIDATE_JWT = {
    url: '/auth/validate',
    method: 'GET',
};

export const GET_PROFILE_BY_ID = (id) => ({
    url: `/profile/${id}`,
    method: 'GET',
});

export const GET_FOLLOWERS_OF_USERID = (id) => ({
    url: `/profile/${id}/followers`,
    method: 'GET',
});

export const GET_FOLLOWING_OF_USERID = (id) => ({
    url: `/profile/${id}/following`,
    method: 'GET',
});

export const FOLLOW_USER = {
    url: '/profile/follow',
    method: 'POST',
};

export const UNFOLLOW_USER = (id) => ({
    url: `/profile/unfollow/${id}`,
    method: 'DELETE',
});

export const CREATE_ENTITY = {
    url: '/entity',
    method: 'POST',
};

export const UPDATE_ENTITY = (id) => ({
    url: `/entity/${id}`,
    method: 'PUT',
});

export const GET_SINGLE_ENTITY_BY_ID = (id) => ({
    url: `/entity/${id}`,
    method: 'GET',
});

export const GET_ALL_ENTITIES_OF_SINGLE_USERID = (id, entity, size) => ({
    url: `/entity/${entity}/${id}?size=${size}`,
    method: 'GET',
});

export const GET_FEED = (entity, arrayOfLocations, startDate, endDate, size) => ({
    url: `/entity/${entity}/feed?locations=${arrayOfLocations}&startDate=${startDate}&endDate=${endDate}&size=${size}`,
    method: 'GET',
});

export const DELETE_ENTITY = (id) => ({
    url: `/entity/${id}`,
    method: 'DELETE',
});

export const GET_COMMENTS_OF_ENTITYID = (id, size) => ({
    url: `/entity/${id}/comments?size=${size}`,
    method: 'GET',
});

export const POST_ACTION = {
    url: '/action',
    method: 'POST',
};

export const DELETE_ACTION = (id) => ({
    url: `/action/${id}`,
    method: 'DELETE',
});

export const SEARCH_PROFILE_BY_INTEREST = (interestName) => ({
    url: `/profile?interestName=${interestName}`,
    method: 'GET',
});

export const POST_INTEREST = {
    url: '/interest',
    method: 'POST',
};
