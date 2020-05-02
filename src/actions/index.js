import { v4 as uuidv4 } from 'uuid';

export const removeItem = (id) => ({
  type: 'REMOVE_ITEM',
  payload: {
    id,
  },
});

export const editItem = (id, itemContent) => ({
  type: 'EDIT_ITEM',
  payload: {
    id,
    item: {
      id,
      ...itemContent,
    },
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

export const toggleModal = (modalOpen) => ({
  type: 'TOGGLE_MODAL',
  payload: {
    modalOpen,
  },
});

export const toggleEdit = (editMode) => ({
  type: 'TOGGLE_EDIT',
  payload: {
    editMode,
  },
});
