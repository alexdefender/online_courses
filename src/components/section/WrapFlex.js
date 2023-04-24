import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Wrap = styled.div(({ gap, direction, justify, align, wrap, flex }) => ({
  display: 'flex',
  gap: gap ? `${gap}px` : null,
  flexDirection: direction,
  justifyContent: justify,
  alignItems: align,
  flex: flex,
  flexWrap: wrap,
}));

const WrapFlex = ({ gap, direction, justify, align, flex, wrap, children, className }) => (
  <Wrap {...{ gap, direction, justify, align, wrap, flex }} className={className}>
    {children}
  </Wrap>
);

WrapFlex.propTypes = {
  children: PropTypes.node.isRequired,

  gap: PropTypes.number,
  direction: PropTypes.string,
  justify: PropTypes.string,
  align: PropTypes.string,
  flex: PropTypes.number,
  wrap: PropTypes.string,
  className: PropTypes.string,
};

export default WrapFlex;
