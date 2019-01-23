import {
  // FETCH_USER,
  FETCH_USERS
} from '../actions/types';

export default (state = {}, { type, users }) => {
  switch (type) {
    case FETCH_USERS:
      return users;

    default:
      return state;
  }
};