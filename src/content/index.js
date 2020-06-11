import { combineReducers } from 'redux';

import authentication from './authentication';
import content from './content';

export default combineReducers({
  authentication,
  content,
});
