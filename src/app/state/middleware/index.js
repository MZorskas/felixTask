import thunk from 'redux-thunk';
import log from './log';
import { apiMiddleware } from 'redux-api-middleware';

export default [apiMiddleware, thunk, log];
