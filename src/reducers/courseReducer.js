import { COURSE } from '@actions';
import { getLoadingState } from '@utils/store';

const initialState = {
  data: {},
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case COURSE.GET_START:
      return {
        ...state,
        data: getLoadingState(state.data),
      };

    default:
      return state;
  }
};

export default courseReducer;
