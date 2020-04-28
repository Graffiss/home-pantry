import { v4 as uuidv4 } from 'uuid';

export const removeItem = (id) => ({
  type: 'REMOVE_ITEM',
  payload: {
    id,
  },
});

export const editItem = (id) => ({
  type: 'EDIT_ITEM',
  payload: {
    id,
  },
});

export const addItem = (itemContent) => ({
  type: 'ADD_ITEM',
  payload: {
    item: {
      id: uuidv4(),
      ...itemContent,
    },
  },
});
