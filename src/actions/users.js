import {
  FETCH_USER,
  FETCH_USERS,
} from './types';
import users from '../data/users.json'

export const fetchUser = (nom) => ({
  type: FETCH_USER,
  users
})

export const fetchUsers = () => dispatch => {
  dispatch({
    type: FETCH_USERS,
    users
  });
}