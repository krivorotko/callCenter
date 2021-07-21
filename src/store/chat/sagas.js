import { all, call, put, takeLatest } from 'redux-saga/effects';
import types from './types';
import chatsApi from '../../api/chatsApi';

function* getMemberList() {
	try {
		const { data } = yield call(chatsApi.getMemberList);
		const members = data['Object']['Members'];
		yield put({ type: types.GET_MEMBER_LIST_SUCCESS, payload: members || [] });
	} catch (error) {
		yield put({ type: chatsApi.GET_MEMBER_LIST_FAILURE, error });
	}
}

function* getChatList() {
	try {
		const { data } = yield call(chatsApi.getChatList);
		const members = data['Object']['Messages'];
		yield put({ type: types.GET_CHAT_LIST_SUCCESS, payload: members || [] });
	} catch (error) {
		yield put({ type: chatsApi.GET_CHAT_LIST_FAILURE, error });
	}
}

export default function* shiftsWatcher() {
	yield all([
		yield takeLatest(types.GET_MEMBER_LIST_REQUEST, getMemberList),
		yield takeLatest(types.GET_CHAT_LIST_REQUEST, getChatList),
	]);
}
