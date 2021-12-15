import {combineReducers} from 'redux';
import characterReducer from './characters/characters.reducers.js';

const rootReducer = combineReducers({
	data: characterReducer,
});

export default rootReducer;
