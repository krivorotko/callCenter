import { all, call, put, takeLatest } from 'redux-saga/effects';
import types from './types';
import shiftsApi from '../../api/shiftsApi';

function* getShifts(data) {
	try {
		const { data } = yield call(shiftsApi.getShifts, data);
		yield put({ type: types.GET_SHIFTS_SUCCESS, payload: data });
	} catch (error) {
		yield put({ type: types.GET_SHIFTS_FAILURE, error });
	}
}

export default function* shiftsWatcher() {
	yield all([yield takeLatest(types.GET_SHIFTS_REQUEST, getShifts)]);
}
