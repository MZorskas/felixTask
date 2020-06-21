import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import content from '../../content';
import authentication from '../../authentication';
import middleware from './middleware';

const allMiddleWare =
  process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION__
    ? composeWithDevTools(applyMiddleware(...middleware))
    : applyMiddleware(...middleware);

// const allMiddleware = [
//   log,
//   process.env.NODE_ENV === 'development' &&
//     window.__REDUX_DEVTOOLS_EXTENSION__ &&
//     window.__REDUX_DEVTOOLS_EXTENSION__(),
// ].filter(Boolean);

const rootReducer = combineReducers({
  content: content.reducer,
  authentication: authentication.reducer,
});

const store = createStore(rootReducer, allMiddleWare);

export default store;

// import { combineReducers } from 'redux';

// import authentication from './authentication';
// import content from './content';

// export default combineReducers({
//   authentication,
//   content,
// });
