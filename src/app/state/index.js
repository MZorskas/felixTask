import { createStore } from 'redux';
import { combineReducers } from 'redux';
import content from '../../content';
import authentication from '../../authentication';

const rootReducer = combineReducers({
  content: content.reducer,
  authentication: authentication.reducer,
});

const store = createStore(
  rootReducer,
  process.env.NODE_ENV !== 'production' &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

// import { combineReducers } from 'redux';

// import authentication from './authentication';
// import content from './content';

// export default combineReducers({
//   authentication,
//   content,
// });
