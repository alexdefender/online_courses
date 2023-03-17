import React, { useState } from 'react';
import PropTypes from 'prop-types';

import WrapFlex from '../../section/WrapFlex';
import Button from '../../buttons/Button';
import Text from '../../text/Text';
import SafeText from '../../text/SafeText';

const speeds = [1, 1.5, 2];

const VideoSpeedButtons = ({ active, onClick }) => {
  const handleClick = (newSpeed) => () => {
    onClick(newSpeed);
  };

  const getTypoVariant = (value) => (active === value ? 'contained' : 'outlined');

  return (
    <WrapFlex gap="8px" align="center" wrap="wrap">
      <Text tid="COMMON.SPEED" bold={600} body1 />

      {speeds.map((s) => (
        <Button key={s} size="small" variant={getTypoVariant(s)} onClick={handleClick(s)}>
          <SafeText content={`${s}x`} />
        </Button>
      ))}
    </WrapFlex>
  );
};

VideoSpeedButtons.propTypes = {
  active: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default VideoSpeedButtons;
