import { actionTypes } from "./actionCreators";

export const requestList = (data) => {
  return { type: actionTypes.REQUEST_LIST, list: data };
};

export const loadingData = () => {
  return { type: actionTypes.LOADING_DATA };
};

export const filterItem = (value) => {
  return { type: actionTypes.FILTER_ITEMS, value: value };
};

export const filterActive = (value) => {
  return { type: actionTypes.FILTER_ACTIVE, value: value };
};

export const clearSearchValue = () => {
  return { type: actionTypes.CLEAR_SEARCH_VALUE };
};

export const sortIncrease = (sortType) => {
  return { type: actionTypes.SORT_TYPE, payload: sortType };
};

export const getData = () => {
  return { type: actionTypes.GET_LIST };
};
