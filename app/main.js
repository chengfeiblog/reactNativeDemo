'use strict';
import React, {
        Component,
        ListView,
    } from 'react-native';
import {Provider} from 'react-redux/native';
import App from './containers/app';
import configureStore from './store/configureStore';
import {connect} from 'react-redux/native';
import createAction from './action';

const store = configureStore();
function mapStateToTopProps(state) {
    return state;
}

function mapDispatchToTopProps(dispatch) {
    return createAction(dispatch);
}

var A = connect(mapStateToTopProps, mapDispatchToTopProps)(App);

export default class Main extends Component {
    render() {
        return (
            <Provider store={store}>
                {() => <A />}
            </Provider>
        );
    }
};

