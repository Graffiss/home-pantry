import { v4 as uuidv4 } from 'uuid';

export const removeItem = (id) => ({
  type: 'REMOVE_ITEM',
  payload: {
    id,
  },
});

export const editItem = (id, itemContent, editMode) => ({
  type: 'EDIT_ITEM',
  payload: {
    id,
    itemContent,
    item: {
      id,
      ...itemContent,
    },
    editMode,
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

export const stopEdit = () => ({
  type: 'STOP_EDIT',
  payload: {
    editMode: false,
  },
});
