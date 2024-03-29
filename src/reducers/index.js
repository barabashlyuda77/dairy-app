import { ADD_ITEM, MAKE_ACTIVE, DELETE_ITEM, ADD_COMMENT } from '../actions/index.js';

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

const deleteItem = (state, action) => {
  const newState = state.filter((item) => item.id !== action.id);
  saveItemsToLocalStorage(newState);
  return newState;
}

const addItem = (state, action) => {
  const newState = [...state, createItem(action.title)]
  saveItemsToLocalStorage(newState);
  return newState;
}

const addComment = (state, action) => {
  const newState = state.map((item) => {
    const newItem = {...item}
    if (newItem.id === action.id) {
      const comments = [...newItem.comments];
      comments.push(action.comment)
      newItem.comments = comments;
    }
    return newItem;
  });
  saveItemsToLocalStorage(newState);
  return newState;
}

const makeActive = (state, action) => {
  const newState = state.map((item) => {
    const newItem = {...item};
    newItem.active = newItem.id === action.id;
    return newItem;
  });
  saveItemsToLocalStorage(newState);
  return newState;
}

const initialState = getItemsFromLocalStorage();

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return addItem(state, action);
    case MAKE_ACTIVE:
      return makeActive(state, action);
    case DELETE_ITEM:
      return deleteItem(state, action);
    case ADD_COMMENT:
      return addComment(state, action);
    default:
      return state
  }
}

export default globalReducer
