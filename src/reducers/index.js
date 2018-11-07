import { combineReducers } from 'redux';
import number_reducer from './number_reducer';

const rootReducer = combineReducers({
    number: number_reducer
});

export default rootReducer;