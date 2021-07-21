import axios from 'axios';

const getMetrics = () =>
	axios.get('https://demo.authoritycrm.com/release/api/v1/agent/metrics?employeeId=50');

export default {
	getMetrics,
};
