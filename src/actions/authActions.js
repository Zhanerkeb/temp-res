import * as types from './types';

export function signup(data) {
    return {type: types.SIGN_UP, data}
}

export function signin(data) {
    return {type: types.SIGN_IN, data}
}