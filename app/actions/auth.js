import {httpGet,httpPost} from '../utils/request';
/**
 * 登录验证
 */
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
/**
 * 登出
 */
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';
function loginRequest(user) {
    return {
        type: LOGIN_REQUEST,
        user,
    };
}
function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    user,
  };
}
function loginFailure(user, error) {
    return {
        type: LOGIN_FAILURE,
        user,
        error,
    }
}
export function login(user, password) {
    let url = '/api/users/login';
    return dispatch => {
        dispatch(loginRequest(user));
        
        return httpPost(url,
            {user, password},
            obj => {
                if(obj.error !== '') {
                    dispatch(loginFailure(user, new Error(obj.error)));
                } else {
                    dispatch(loginSuccess(user));
                }
            },
            err => {
                dispatch(loginFailure(user, err));
            }
         );
    }
}