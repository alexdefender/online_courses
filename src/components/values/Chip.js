import React from 'react';
import PropTypes from 'prop-types';
import Chip from '@mui/material/Chip';

import SafeText from '../text/SafeText';

const ChipComponent = ({ label, LabelProps, ...props }) => (
  <Chip label={<SafeText content={label} {...LabelProps} />} {...props} />
);

ChipComponent.defaultProps = {
  LabelProps: {},
};

ChipComponent.propTypes = {
  label: PropTypes.string.isRequired,

  LabelProps: PropTypes.object,
};

export default ChipComponent;
