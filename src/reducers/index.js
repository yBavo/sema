import {combineReducers} from 'redux';
import lists from './listsReducer';
import rules from './rulesReducer';
import users from './usersReducer';

export default combineReducers ({
  lists,
  rules,
  users
})