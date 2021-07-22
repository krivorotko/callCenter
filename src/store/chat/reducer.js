import Immutable from 'seamless-immutable';
import types from './types';

const initialState = Immutable({
	isFetching: false,
	items: [],
	chats: [],
	userChat: {},
});

export default (state = initialState, action) => {
	switch (action.type) {
		case types.GET_MEMBER_LIST_REQUEST:
			return state.set('isFetching', true);
		case types.GET_MEMBER_LIST_SUCCESS:
			return state.merge({
				isFetching: false,
				items: action.payload,
			});
		case types.GET_MEMBER_LIST_FAILURE:
			return state.set('isFetching', false);

		case types.GET_CHAT_LIST_REQUEST:
			return state.set('isFetching', true);
		case types.GET_CHAT_LIST_SUCCESS:
			return state.merge({
				isFetching: false,
				messages: action.payload,
			});
		case types.GET_CHAT_LIST_FAILURE:
			return state.set('isFetching', false);
		case types.SET_USER_CHAT:
			return state.set('userChat', action.payload);
		default:
			return state;
	}
};
