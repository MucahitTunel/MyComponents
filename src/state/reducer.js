import {combineReducers} from '@reduxjs/toolkit';
import {authReducer} from '../features/auth/authSlice';
import {mainReducer} from '../features/main/mainSlice';

export default combineReducers({
  auth: authReducer,
  main: mainReducer,
});
