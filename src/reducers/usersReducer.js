import {
  FETCH_USERS_LIST,
  FETCH_USERS
} from '../actions/types';

export default (state = {}, { type, users, listName }) => {
  switch (type) {
    case FETCH_USERS_LIST:
      return {...state, [listName]: users};
    case FETCH_USERS:
      return {...state, users};

    default:
      return state;
  }
};