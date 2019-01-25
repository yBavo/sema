import {
  FETCH_RULE,
  FETCH_RULES
} from '../actions/types';

export default (state = {}, { type, rules }) => {
  switch (type) {
    case FETCH_RULE:
      return {...state, ...rules};
    case FETCH_RULES:
      return rules;

    default:
      return state;
  }
};