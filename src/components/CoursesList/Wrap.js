import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Wrap = styled.div(({ theme }) => ({
  display: 'grid',
  gap: 20,

  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
}));

const CoursesListWrap = ({ children }) => <Wrap>{children}</Wrap>;

CoursesListWrap.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CoursesListWrap;
