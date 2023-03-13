import axios from 'axios';
import { BACKEND_URL, ERROR_ROUTE } from '../../constants/ApiEndpoints';
import { formatErrorMessage } from '../common';

const makeRequest = async (
    apiEndPoint,
    dynamicConfig = {},
    navigate
) => {
    try {
        const requestDetails = {
            baseURL: BACKEND_URL,
            url: apiEndPoint.url,
            method: apiEndPoint.method,

            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`,
            },

            ...dynamicConfig,
        };
        const { data } = await axios(requestDetails);
        return data;
    } catch (e) {

        if (navigate) {
            const errorStatus = e.response.status;
            if (errorStatus) {
                navigate(`${ERROR_ROUTE}/${errorStatus}`);
            } else {
                navigate(ERROR_ROUTE);
            }
        }

        throw Error(formatErrorMessage(e.response.data.message));
    }
};

export default makeRequest;