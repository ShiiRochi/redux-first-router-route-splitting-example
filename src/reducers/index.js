import { combineReducers } from 'redux';
import page from "./page";
import { reducer as location } from '../constants/routes';

const rootReducer = combineReducers({
    page,
    location
})

export default rootReducer;
