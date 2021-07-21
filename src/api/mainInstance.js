import axios from 'axios';
import config from '../constants/conifg.json';
console.log('config.baseUrl: ', config.baseUrl);
const instance = axios.create({
	baseUrl: config.baseUrl,
	timeout: 20000,
});

export default instance;
