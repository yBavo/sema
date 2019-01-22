import {
  FETCH_LIST,
  FETCH_LISTS,
} from './types';
import lists from '../data/lists.json'

export const fetchList = (nom) => ({
  type: FETCH_LIST,
  lists
})

export const fetchLists = () => ({
  type: FETCH_LISTS,
  lists
})