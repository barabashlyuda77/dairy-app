import { ADD_ITEM } from '../actions/index.js';

const createItem = (value) => {
  return {
    id: Date.now(),
    title: value,
    active: false,
    comments: []
  };
}

const saveItemsToLocalStorage = (items) => {
  localStorage.setItem('items', JSON.stringify(items));
}

const getItemsFromLocalStorage = () => {
  const localStorageItems = localStorage.getItem('items');
  return localStorageItems === null ? [] : JSON.parse(localStorageItems);
}

const initialState = getItemsFromLocalStorage();

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const newState = [...state, createItem(action.title)]
      saveItemsToLocalStorage(newState);
      return newState;
    default:
      return state
  }
}

export default globalReducer
