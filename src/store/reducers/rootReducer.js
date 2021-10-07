import { combineReducers } from 'redux';
import settingsReducer from './settings_reducer';
import questionsReducer from './questions_reducer';

export default combineReducers({
    settingsReducer,
    questionsReducer
});