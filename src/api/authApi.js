import axios from 'axios';

const getWhoami = () => axios.get('https://demo.authoritycrm.com/release/api/v1/agent');

export default {
	getWhoami,
};
