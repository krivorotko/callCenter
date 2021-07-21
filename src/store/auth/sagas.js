import { all, call, put, takeLatest } from 'redux-saga/effects';
import types from './types';
import authApi from '../../api/authApi';

function* getWhoami() {
	try {
		const { data } = yield call(authApi.getWhoami);
		yield put({ type: types.GET_WHOAMI_RESPONSE, payload: data });
	} catch (error) {
		yield put({ type: types.GET_WHOAMI_FAILURE, error });
	}
}

export default function* authWatcher() {
	yield all([yield takeLatest(types.GET_WHOAMI_REQUEST, getWhoami)]);
}
