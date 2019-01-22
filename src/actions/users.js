import {
  FETCH_USER,
  FETCH_USERS,
} from './types';
import users from '../data/userss.json'

export const fetchUser = (nom) => ({
  type: FETCH_USER,
  users
})

export const fetchUsers = () => ({
  type: FETCH_USERS,
  users
})