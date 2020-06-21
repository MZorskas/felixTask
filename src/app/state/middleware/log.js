import content from '../../../content';

const log = ({ dispatch, getState }) => (next) => (action) => {
  console.log({ dispatch, getState, next, action });

  //   if (
  //     action.id === 'cbcd32-Avengers:-4f12eb' &&
  //     action.type === content.types.REMOVE_FAVORITE
  //   ) {
  //     return null;
  //   }
  next(action);
};

export default log;
