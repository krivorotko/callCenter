import Immutable from 'seamless-immutable';
import types from './types';

const initialState = Immutable({
	isFetching: false,
	list: [],
});

export default (state = initialState, action) => {
	switch (action.type) {
		case types.GET_METRICS_REQUEST:
			return state.set('isFetching', true);
		case types.GET_METRICS_RESPONSE:
			return state.merge({
				isFetching: false,
				list: action.payload,
			});
		case types.GET_METRICS_FAILURE:
			return state.set('isFetching', false);
		default:
			return state;
	}
};
