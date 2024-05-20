import { actionTypes } from "./actionCreators";

const initialState = {
  loading: false,
  list: [],
  defaultList: [],
  searchValue: "",
  activeUser: false,
  sortType: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_LIST:
      return {
        ...state,
        list: Object.values(action.list),
        defaultList: Object.values(action.list),
        loading: false,
      };
    case actionTypes.LOADING_DATA:
      return { ...state, loading: true };
    case actionTypes.FILTER_ITEMS:
      return { ...state, searchValue: action.value };
    case actionTypes.FILTER_ACTIVE:
      return { ...state, activeUser: action.value };
    case actionTypes.CLEAR_SEARCH_VALUE:
      return { ...state, searchValue: "" };
    case actionTypes.SORT_TYPE:
      return { ...state, sortType: action.payload };
    default:
      return state;
  }
};

export default reducer;
