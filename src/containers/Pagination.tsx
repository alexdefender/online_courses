import React, { useEffect, Fragment } from 'react';
import { useRouter } from 'next/router';
import Pagination from '@mui/material/Pagination';

import useTypedSelector from '@hooks/useTypedSelector';
import useActions from '@hooks/useActions';
import { scrollToTop } from '@utils';

const PaginationContainer = (): JSX.Element => {
  const { list, page } = useTypedSelector((store) => store.courses);
  const { setPage: setPageAction } = useActions();
  const router = useRouter();
  const { pathname, query } = router;
  const pageCount = list?.length || 1;
  const visible = pageCount > 2;

  const setPage = (newPage: number): void => {
    setPageAction(newPage);
  };

  const updateUrl = (newPage: number): void => {
    router.push({ pathname, query: { page: newPage } }, undefined, { shallow: true });
  };

  useEffect(() => {
    if (!visible) return;

    if (!query.page) {
      return;
    }

    const queryPage = Number(query.page);

    if (queryPage <= pageCount) {
      setPage(queryPage);
    } else if (queryPage > pageCount) {
      setPage(1);
      updateUrl(1);
    }
  }, [visible]);

  if (!visible) {
    return <Fragment />;
  }

  const handleChange = (_e: React.ChangeEvent<unknown>, newPage: number): void => {
    updateUrl(newPage);
    setPage(newPage);
    scrollToTop();
  };

  return <Pagination color="primary" size="large" page={page} count={pageCount} onChange={handleChange} />;
};

PaginationContainer.displayName = 'PaginationContainer';

export default PaginationContainer;
