import {combineReducers} from 'redux';
import userReducer from '../features/user/userSlice';
import mineReducer from '../features/mine/mineSlice';

const rootReducer = combineReducers({
  user: userReducer,
  mine: mineReducer,
});

export default rootReducer;
