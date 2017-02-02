import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import {validateReducer} from 'redux-form-validation';

import libsState from './libraries';
import libState from './library';
import compState from './computers';

const appReducer = combineReducers({
    libsState,
    libState,
    compState,
    form: formReducer,
    validate: validateReducer
});

const store = createStore(
	formReducer
);

export default appReducer;