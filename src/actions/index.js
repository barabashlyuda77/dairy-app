export const ADD_ITEM = 'ADD_ITEM';
export const MAKE_ACTIVE = 'MAKE_ACTIVE';
export const DELETE_ITEM = 'DELETE_ITEM';

export const addItem = (title) => {
  return {
    type: ADD_ITEM,
    title
  }
}

export const makeActive = (id) => {
  return {
    type: MAKE_ACTIVE,
    id
  }
}

export const deleteItem = (id) => {
  return {
    type: DELETE_ITEM,
    id
  }
}
