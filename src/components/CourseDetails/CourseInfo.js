import React from 'react';
import PropTypes from 'prop-types';

import WrapFlex from '../section/WrapFlex';
import Text from '../text/Text';
import SafeText from '../text/SafeText';
import Chip from '../values/Chip';

const CourseInfo = ({ title, content }) => {
  if (!content) {
    return null;
  }

  return (
    <WrapFlex gap="4px" align="center" wrap="wrap">
      <Text tid={title} body1 parent="span" bold={600} />

      {Array.isArray(content) ? (
        content.map((item) => <Chip key={item} label={item} variant="outlined" />)
      ) : (
        <SafeText content={content} body1 parent="span" />
      )}
    </WrapFlex>
  );
};

CourseInfo.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]),
};

export default CourseInfo;
