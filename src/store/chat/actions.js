import types from './types';

export default {
	getMemberList: () => ({ type: types.GET_MEMBER_LIST_REQUEST }),
	getChatList: () => ({ type: types.GET_CHAT_LIST_REQUEST }),
};
