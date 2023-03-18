import { PAGINATION } from '.';

export const setPaginationPage = (value) => ({
  type: PAGINATION.SET_PAGE,
  value,
});
