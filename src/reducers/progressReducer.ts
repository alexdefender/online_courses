import { PROGRESS_ACTIONS, ProgressState, ProgressActions } from '@models/progress';

const initialState: ProgressState = {
  courses: {},
};

const coursesProgressReducer = (state = initialState, action: ProgressActions): ProgressState => {
  switch (action.type) {
    case PROGRESS_ACTIONS.SET_COURSES:
      return {
        ...state,
        courses: action.payload,
      };

    default:
      return state;
  }
};

export default coursesProgressReducer;
