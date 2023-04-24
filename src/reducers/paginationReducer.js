import { PAGINATION } from '@constants/actions';

const initialState = {
  page: 1,
  perPage: 10,
};

const paginationReducer = (state = initialState, action) => {
  switch (action.type) {
    case PAGINATION.SET_PAGE:
      return {
        ...state,
        page: action.value,
      };

    default:
      return state;
  }
};

export default paginationReducer;
