export const ADD_ITEM = 'ADD_ITEM';
export const MAKE_ACTIVE = 'MAKE_ACTIVE';

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
