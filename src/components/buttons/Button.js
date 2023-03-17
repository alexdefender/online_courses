import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';

import Text from '../text/Text';

const ButtonComponent = ({ title, children, ...props }) => (
  <Button {...props}>
    {title ? <Text tid={title} /> : null}
    {children}
  </Button>
);

ButtonComponent.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default ButtonComponent;
