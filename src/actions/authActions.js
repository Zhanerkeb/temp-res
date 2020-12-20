import * as types from './types';

export function signup(data) {
    return {type: types.SIGN_UP, data}
}