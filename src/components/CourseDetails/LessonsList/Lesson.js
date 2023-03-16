import React from 'react';
import PropTypes from 'prop-types';
import theme from '@theme';

import Accordion from '../../Accordion';
import AccordionSummary from '../../AccordionSummary';
import AccordionDetails from '../../AccordionDetails';
import Text from '../../text/Text';
import SafeText from '../../text/SafeText';
import ExpandMoreIcon from '../../icons/ExpandMoreIcon';

const LessonPreview = ({ id, openId, title, isLocked, videoLink, onChange }) => (
  <Accordion disableGutters expanded={id === openId} onChange={onChange(id)}>
    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`${id}bh-content`} id={`${id}bh-header`}>
      <Text tid={title} />
    </AccordionSummary>

    <AccordionDetails>
      {isLocked ? (
        <Text tid="LESSON.CLOSED" bold={600} color={theme.palette.error.main} />
      ) : (
        <SafeText content={videoLink} />
      )}
    </AccordionDetails>
  </Accordion>
);

LessonPreview.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isLocked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,

  openId: PropTypes.string,
  videoLink: PropTypes.string,
};

export default LessonPreview;
