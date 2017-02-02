import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import App from './app';
import Libraries from './libraries';
import NewLibrary from './new-library';
import LibraryDetails from './library-details';
import ComputersAvailability from './computers';

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import appReducer from '../reducers';

const store = createStore(appReducer, applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

injectTapEventPlugin();
//require('es6-promise').polyfill();

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <IndexRoute title="Libraries" name="libraries" component={Libraries} />
                    <Route title="New Library" name="newLibrary" path="new" component={NewLibrary}></Route>
                    <Route title="Library Details" name="libraryDetails" path="libraries/:libraryId" component={LibraryDetails}></Route>
                    <Route title="Computers" name="computersAvailability" path="computers" component={ComputersAvailability}></Route>
                </Route>
            </Router>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('appRoot')
);