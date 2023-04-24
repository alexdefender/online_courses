import { LAYOUT } from '@constants/actions';

const initialState = {
  isError: false,
};

const layoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case LAYOUT.DATA_FAIL:
      return {
        ...state,
        isError: true,
      };

    case LAYOUT.RESET_DATA_FAIL:
      return {
        ...state,
        isError: false,
      };

    default:
      return state;
  }
};

export default layoutReducer;
