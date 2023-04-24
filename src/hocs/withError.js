import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { resetDataFail } from '@actions/layoutActions';

import { NotFound } from '@components';

const withError = (WrappedComponent) => {
  const HOComponent = ({ isError, dispatch, ...props }) => {
    useEffect(() => {
      return () => {
        dispatch(resetDataFail());
      };
    }, []);

    if (isError) {
      return <NotFound />;
    }

    return <WrappedComponent {...props} />;
  };

  const mapStateToProps = ({ layout: { isError } }) => ({ isError });

  HOComponent.propTypes = {
    dispatch: PropTypes.func.isRequired,
    isError: PropTypes.bool.isRequired,
  };

  return connect(mapStateToProps)(HOComponent);
};

export default withError;
