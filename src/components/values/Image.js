import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const StyledBgImg = styled('div')(({ url }) => ({
  width: '100%',
  minHeight: '100%',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundImage: url ? `url(${url})` : null,
}));

const StyledImg = styled('img')(({ width, height }) => ({
  width,
  height: height || width,
}));

const Image = ({ url, alt, width, height, bg, style }) => {
  if (bg) {
    return <StyledBgImg url={url} style={style} />;
  }

  return <StyledImg src={url} {...{ alt, width, height, style }} />;
};

Image.defaultProps = {
  alt: '',
};

Image.propTypes = {
  url: PropTypes.string,
  alt: PropTypes.string,
  bg: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  style: PropTypes.object,
};

export default Image;
