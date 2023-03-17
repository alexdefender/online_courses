import React from 'react';
import PropTypes from 'prop-types';
import theme from '@theme';
import styled from '@emotion/styled';

const StyledHr = styled('hr')(({ width, color }) => ({
  width,
  height: 1,
  margin: theme.spacing(2, 0),
  border: 0,
  color,
  backgroundColor: color,
}));

const Divider = ({ width, color }) => <StyledHr {...{ width, color }} />;

Divider.defaultProps = {
  width: '100%',
  color: theme.palette.grey[300],
};

Divider.propTypes = {
  width: PropTypes.string,
  color: PropTypes.string,
};

export default Divider;
