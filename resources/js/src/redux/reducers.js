import postsReducer from './postsReducer';
import authReducer from './authReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    posts: postsReducer,
    auth: authReducer
});

export default rootReducer;