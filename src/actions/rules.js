import _ from 'lodash';
import {
  FETCH_RULE,
  FETCH_RULES,
} from './types';
import rules from '../data/rules.json'

export const fetchRule = (listName) => {
  const data = rules.filter(rule =>
    _.keys(rule).toString() === listName);

  return {
    type: FETCH_RULE,
    rules: data[0],
    listName
  }
}

export const fetchRules = () => ({
  type: FETCH_RULES,
  rules
})