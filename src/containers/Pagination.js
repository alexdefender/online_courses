import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';

import { setPaginationPage } from '@actions/paginationActions';
import { scrollToTop } from '@utils';
import { Pagination } from '@components';

const PaginationContainer = ({ page, pageCount, dispatch }) => {
  const router = useRouter();
  const { pathname, query } = router;
  const visible = pageCount > 2;

  const setPage = (newPage) => {
    dispatch(setPaginationPage(newPage));
  };

  const updateUrl = (newQuery) => {
    router.push({ pathname, query: newQuery }, null, { shallow: true });
  };

  useEffect(() => {
    if (!visible) return;

    let queryPage = query.page;
    if (!queryPage) {
      setPage(1);
      return;
    }

    queryPage = parseInt(queryPage);
    if (queryPage <= pageCount) {
      setPage(queryPage);
    } else if (queryPage > pageCount) {
      setPage(1);
      updateUrl({ page: 1 });
    }
  }, [visible]);

  if (!visible) {
    return null;
  }

  const handleChange = (e, newPage) => {
    updateUrl({ page: newPage });
    setPage(newPage);
    scrollToTop();
  };

  return <Pagination page={page} count={pageCount} onChange={handleChange} />;
};

PaginationContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
};

const mapStateToProps = ({ pagination: { page } }) => ({
  page,
});

export default connect(mapStateToProps)(PaginationContainer);
