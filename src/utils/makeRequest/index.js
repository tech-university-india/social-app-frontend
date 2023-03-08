import axios from 'axios';
import { BACK_END_URL } from '../../constants/endPoints';

const axiosObject = axios.create({
	baseURL: BACK_END_URL,
	headers: {
		'Content-Type': 'application/json',
	},
});

const makeRequest = async (request) => {
	try{
		const response = await axiosObject(request);
		return response.data;
	} catch(error) {
		console.log(error);
	}
};

export default makeRequest;