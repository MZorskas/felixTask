import { createStore } from 'redux';
import reducer from '../../content';

const store = createStore(
  reducer,
  process.env.NODE_ENV !== 'production' &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
