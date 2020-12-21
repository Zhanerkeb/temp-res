import {all, put, take, takeLatest} from 'redux-saga/effects'
import axios from 'axios'
import * as types from '../actions/types'
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

function* signup(action) {
    const {data} = action;
    try {
        const authResponse = yield axios.post(`http://37.18.30.124:9000/api/users/register`, data).then(res => res.data)
        yield put({type: types.SIGN_UP_SUCCESS, payload: authResponse});
    } catch(error) {
        yield put({type: types.SIGN_UP_FAILED, error});
    }
}

function* signin(action) {
    const {data} = action;
    try {
        const auth = yield axios.post(`http://37.18.30.124:9000/api/users/login`, data).then(res => res.data);
        const {token} = auth;
        setAuthToken(token);
        localStorage.setItem('token', token);
        const decoded = jwt_decode(token);
        yield put({type: types.SET_CURRENT_USER, payload: decoded});
    } catch(error) {
        yield put({type: types.SIGN_IN_FAILED, error});
    }
}

export function* authSaga() {
    yield all([
        yield takeLatest(types.SIGN_UP, signup),
        yield takeLatest(types.SIGN_IN, signin)
    ])
}