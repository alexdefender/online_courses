import { PAGINATION } from '@constants/actions';

export const setPaginationPage = (value) => ({
  type: PAGINATION.SET_PAGE,
  value,
});
