import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import Card from '../Card';

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  gap: '8px',
  flexDirection: 'column',
  width: '100%',
  maxWidth: 500,
  padding: theme.spacing(2),
}));

const CourseCard = ({ children }) => <StyledCard>{children}</StyledCard>;

CourseCard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CourseCard;
