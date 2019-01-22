import {combineReducers} from 'redux';
import lists from './listsReducer';
import users from './usersReducer';

export default combineReducers ({
  lists,
  users
})