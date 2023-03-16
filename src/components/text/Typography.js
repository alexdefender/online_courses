import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';

export const getTypoVariant = ({ body2, subtitle1, subtitle2, p, body1, h6, h5, h4, h3, h2, h1 }) => {
  if (body2) {
    return 'body2';
  }
  if (subtitle1) {
    return 'subtitle1';
  }
  if (subtitle2) {
    return 'subtitle2';
  }
  if (p || body1) {
    return 'body1';
  }
  if (h6) {
    return 'h6';
  }
  if (h5) {
    return 'h5';
  }
  if (h4) {
    return 'h4';
  }
  if (h3) {
    return 'h3';
  }
  if (h2) {
    return 'h2';
  }
  if (h1) {
    return 'h1';
  }

  return 'body2';
};

export const getWrap = ({ subtitle1, subtitle2, p, body1, h6, h5, h4, h3, h2, h1 }, parent) => {
  if (parent) {
    return parent;
  }

  if (p || subtitle1 || subtitle2 || body1) {
    return 'p';
  }
  if (h6) {
    return 'h6';
  }
  if (h5) {
    return 'h5';
  }
  if (h4) {
    return 'h4';
  }
  if (h3) {
    return 'h3';
  }
  if (h2) {
    return 'h2';
  }
  if (h1) {
    return 'h1';
  }

  return 'span';
};

const StyledTypography = styled(Typography)`
  color: ${({ theme }) => theme.color};
  font-weight: ${({ theme }) => theme.bold};
`;

const TypographyComponent = ({ parent, color, align, bold, dangerouslySetInnerHTML, children, ...props }) => {
  const variant = getTypoVariant(props);
  const wrap = getWrap(props, parent);

  return (
    <StyledTypography
      variant={variant}
      component={wrap}
      align={align}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
      theme={{ color, bold }}
    >
      {children}
    </StyledTypography>
  );
};

TypographyComponent.propTypes = {
  parent: PropTypes.string,
  color: PropTypes.string,
  align: PropTypes.string,
  bold: PropTypes.number,
  dangerouslySetInnerHTML: PropTypes.object,
  children: PropTypes.node,
};

export default TypographyComponent;
