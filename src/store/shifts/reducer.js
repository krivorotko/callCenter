import Immutable from 'seamless-immutable';
import types from './types';

const initialState = Immutable({
	isFetching: false,
	items: [],
});

export default (state = initialState, action) => {
	switch (action.type) {
		case types.GET_SHIFTS_REQUEST:
			return state.set('isFetching', true);
		case types.GET_SHIFTS_SUCCESS:
			return state.merge({
				isFetching: false,
				items: action.payload,
			});
		case types.GET_SHIFTS_FAILURE:
			return state.set('isFetching', false);
		default:
			return state;
	}
};
