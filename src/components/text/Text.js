import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Typography from './Typography';

const Text = ({ tid, values, ...props }) => {
  const { t } = useTranslation();

  return <Typography {...props}>{t(tid, values)}</Typography>;
};

Text.propTypes = {
  tid: PropTypes.string,
  values: PropTypes.object,
};

export default Text;
