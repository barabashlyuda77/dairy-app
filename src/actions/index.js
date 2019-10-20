export const ADD_ITEM = 'ADD_ITEM';
export const MAKE_ACTIVE = 'MAKE_ACTIVE';
export const DELETE_ITEM = 'DELETE_ITEM';
export const ADD_COMMENT = 'ADD_COMMENT';

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

export const addComment = (comment, id) => {
  return {
    type: ADD_COMMENT,
    id,
    comment
  }
}
