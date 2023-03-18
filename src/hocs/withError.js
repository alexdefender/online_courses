import { Component, createElement } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { resetDataFail } from '@actions/layoutActions';

import { NotFound } from '@components';

const withError = (WrappedComponent) => {
  class HOComponent extends Component {
    componentWillUnmount() {
      const { dispatch } = this.props;

      dispatch(resetDataFail());
    }

    render() {
      const { isError, ...props } = this.props;

      return isError
        ? createElement(NotFound)
        : createElement(WrappedComponent, {
            ...props,
          });
    }
  }

  const mapStateToProps = ({ layout: { isError } }) => ({ isError });

  HOComponent.propTypes = {
    dispatch: PropTypes.func.isRequired,
    isError: PropTypes.bool.isRequired,
  };

  return connect(mapStateToProps)(HOComponent);
};

export default withError;
