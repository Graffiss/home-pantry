import { createStore } from 'redux';
import rootReducer from '../reducers';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();
/* eslint-disable no-underscore-dangle */

const store = createStore(
  rootReducer,
  persistedState,
  /* preloadedState, */ window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(),
);

/* eslint-enable */

store.subscribe(() => {
  saveState({
    items: store.getState().items,
    item: store.getState().item,
  });
});

export default store;
