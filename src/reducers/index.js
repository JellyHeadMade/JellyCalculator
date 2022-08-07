import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import displayReducer from './displayReducer';

const rootReducer = combineReducers({
    form,
    displayReducer
});

export default rootReducer;