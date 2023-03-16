import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const ImgRoot = styled.img`
  width: ${({ theme }) => theme.width};
  height: ${({ theme }) => theme.height || theme.width};
`;

const Image = ({ url, alt, width, height }) => <ImgRoot src={url} alt={alt} theme={{ width, height }} />;

Image.defaultProps = {
  alt: '',
};

Image.propTypes = {
  url: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Image;
