import _ from 'lodash';
import {
  FETCH_USERS_LIST,
  FETCH_USERS,
} from './types';
import users from '../data/users.json';

export const fetchUsersList = (listName) => {
  const data = users.filter(user => 
    user.departement.filter(d => d === listName ).toString()
    === listName
  );
  
  return {
    type: FETCH_USERS_LIST,
    users: data,
    listName
  }
}

export const fetchUsers = () => dispatch => {
  dispatch({
    type: FETCH_USERS,
    users
  });
}