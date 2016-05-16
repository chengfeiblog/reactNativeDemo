'use strict';
import { 
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
    } from '../actions/auth';
const initialState = {
   user: null,
   password: null,
   userRole: null,
   loggingIn: false,
   loggingOut: false,
   loginError: null,
};
export default function auth(state = initialState, action = {}) {
    switch (action.types) {
        case LOGIN_REQUEST:
            return Object.assign({}, state, {loggingIn: true});
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                loggingIn: false, user: action.user
            });
        case LOGIN_FAILURE:
            return Object.assign({}, state, {
                loggingIn: false,
                user: null,
                userRole: null,
                loginError: action.error
            });
         default: 
            return state;           
    }
}    