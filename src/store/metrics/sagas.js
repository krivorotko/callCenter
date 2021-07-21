import { all, call, put, takeLatest } from 'redux-saga/effects';
import types from './types';
import metricsApi from '../../api/metricsApi';

function* getMetrics() {
	try {
		const { data } = yield call(metricsApi.getMetrics);
		yield put({ type: types.GET_METRICS_RESPONSE, payload: data['Statistics'] });
	} catch (error) {
		yield put({ type: types.GET_METRICS_FAILURE, error });
	}
}

export default function* metricsWatcher() {
	yield all([yield takeLatest(types.GET_METRICS_REQUEST, getMetrics)]);
}
