import Immutable from 'seamless-immutable';
import types from './types';

const initialState = Immutable({
	isFetching: false,
	user: {},
});

export default (state = initialState, action) => {
	switch (action.type) {
		case types.GET_WHOAMI_REQUEST:
			return state.set('isFetching', true);
		case types.GET_WHOAMI_RESPONSE:
			return state.merge({
				isFetching: false,
				user: action.payload,
			});
		case types.GET_WHOAMI_FAILURE:
			return state.set('isFetching', false);
		default:
			return state;
	}
};
