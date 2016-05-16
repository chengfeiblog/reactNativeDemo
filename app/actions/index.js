/**
 * 
 */

'use strict';

import React, {
    PropTypes,
} from 'react-native';
import {bindActionCreators} from 'redux';
import * as login from './auth';
/**
 * 组装action
 */
const actions = {
    ...login
};
/**
 * 绑定dispatch
 */
export default function createActions(dispatch) {
    return bindActionCreators(actions, dispatch);
};