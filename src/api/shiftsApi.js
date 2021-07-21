import axiosInstance from './mainInstance';
import axios from 'axios';

export const getShifts = params => {
	// return axiosInstance.get(`/shifts`, { params });
	return axios.get(
		'https://demo.authoritycrm.com/release/api/v1/agent/shifts?end=2021-07-21T11:38:59&mode=Assigned',
	);
};

export default {
	getShifts,
};
