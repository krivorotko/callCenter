import types from './types';

export default {
	getShifts: ({ mode, end }) => ({ type: types.GET_SHIFTS_REQUEST, mode, end }),
};
