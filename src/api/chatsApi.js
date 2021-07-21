import instanceAxios from './mainInstance';

const getMemberList = () => {
	return instanceAxios.get('https://demo.authoritycrm.com/release/api/v1/agent/members');
};

const getChatList = () => {
	return instanceAxios.get(
		'https://demo.authoritycrm.com/release/api/v1/agent/messages?recipient=test',
	);
};

export default {
	getMemberList,
	getChatList,
};
