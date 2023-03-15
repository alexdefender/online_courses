import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const DivRoot = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.gap};
  flex-direction: ${({ theme }) => theme.direction};
  justify-content: ${({ theme }) => theme.justify};
  align-items: ${({ theme }) => theme.align};
  flex: ${({ theme }) => theme.flex};
  flex-wrap: ${({ theme }) => theme.wrap};
`;

const WrapFlex = ({ gap, direction, justify, align, flex, wrap, children }) => {
  const customTheme = { gap, direction, justify, align, wrap, flex };

  return <DivRoot theme={customTheme}>{children}</DivRoot>;
};

WrapFlex.propTypes = {
  children: PropTypes.node.isRequired,

  gap: PropTypes.string,
  direction: PropTypes.string,
  justify: PropTypes.string,
  align: PropTypes.string,
  flex: PropTypes.number,
  wrap: PropTypes.string,
};

export default WrapFlex;
