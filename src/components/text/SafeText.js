import React from 'react';
import PropTypes from 'prop-types';
import Typography from './Typography';

const SafeText = ({ content, ...props }) => (
  <Typography dangerouslySetInnerHTML={{ __html: `${content}` }} {...props} />
);

SafeText.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default SafeText;
