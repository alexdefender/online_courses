import { HYDRATE } from 'next-redux-wrapper';
import { performCourse } from '@utils/api/course';
import { COURSE_ACTIONS, CourseState, CourseActions } from '@models/course';

const initialState: CourseState = {
  data: null,
  loading: false,
  error: null,
  init: false,
};

const courseReducer = (state = initialState, action: CourseActions): CourseState => {
  switch (action.type) {
    case HYDRATE:
      const nextState = {
        ...state,
        ...action.payload.course,
      };

      if (!state.init) {
        nextState.init = true;
        return nextState;
      }

      return state;

    case COURSE_ACTIONS.GET_START:
      return {
        ...state,
        data: state.data,
        loading: true,
        error: null,
      };

    case COURSE_ACTIONS.GET_SUCCESS:
      return {
        ...state,
        data: performCourse(action.payload),
        loading: false,
        error: null,
      };

    case COURSE_ACTIONS.ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case COURSE_ACTIONS.RESET_ERROR:
      return {
        ...state,
        error: initialState.error,
      };

    case COURSE_ACTIONS.RESET:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};

export default courseReducer;
