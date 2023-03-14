import { COURSES } from '@actions';
import { getLoadingState } from '@utils/store';

const initialState = {
  list: {},
};

const coursesReducer = (state = initialState, action) => {
  switch (action.type) {
    case COURSES.GET_START:
      return {
        ...state,
        list: getLoadingState(state.list),
      };

    default:
      return state;
  }
};

export default coursesReducer;
