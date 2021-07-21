import { spawn, call, all, delay } from 'redux-saga/effects';
import shiftsSaga from './shifts/sagas';
import chatsSaga from './chat/sagas';
import metricsSaga from './metrics/sagas';
import authSaga from './auth/sagas';

const makeRestartable = saga => {
	return function* () {
		yield spawn(function* () {
			while (true) {
				try {
					yield call(saga);
					console.error(
						'ERROR: Unexpected root saga termination, the saga will be restarted',
						saga,
					);
				} catch (error) {
					console.error('ERROR: Saga error, the saga will be restarted', error);
					throw error;
				}
				yield delay(1000);
			}
		});
	};
};

const rootSagas = [shiftsSaga, chatsSaga, metricsSaga, authSaga].map(makeRestartable);

export default function* rootSaga() {
	yield all(rootSagas.map(saga => call(saga)));
}
