import { performCoursesList } from '@utils/api/course';
import { COURSES_ACTIONS, CoursesState, CoursesActions } from '@models/courses';

const initialState: CoursesState = {
  list: null,
  loading: false,
  error: null,
  page: 1,
  perPage: 10,
};

const coursesReducer = (state = initialState, action: CoursesActions): CoursesState => {
  switch (action.type) {
    case COURSES_ACTIONS.GET_START:
      return {
        ...state,
        list: state.list,
        loading: true,
        error: null,
      };

    case COURSES_ACTIONS.GET_SUCCESS:
      return {
        ...state,
        list: performCoursesList(action.payload, state.perPage),
        loading: false,
        error: null,
      };

    case COURSES_ACTIONS.ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case COURSES_ACTIONS.RESET_ERROR:
      return {
        ...state,
        error: initialState.error,
      };

    case COURSES_ACTIONS.SET_PAGE:
      return {
        ...state,
        page: action.payload,
      };

    default:
      return state;
  }
};

export default coursesReducer;
