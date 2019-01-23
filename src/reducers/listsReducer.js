import {
  // FETCH_LIST,
  FETCH_LISTS
} from '../actions/types';

export default (state = {}, { type, lists }) => {
  switch (type) {
    case FETCH_LISTS:
      return lists;

    default:
      return state;
  }
};
