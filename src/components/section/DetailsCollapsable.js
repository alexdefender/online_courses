import React from 'react';
import PropTypes from 'prop-types';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Text from '../text/Text';
import ExpandMoreIcon from '../icons/ExpandMoreIcon';

const DetailsCollapsable = ({ id, openId, title, children, onChange }) => (
  <Accordion disableGutters expanded={id === openId} onChange={onChange}>
    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`${id}-content`} id={`${id}-header`}>
      <Text tid={title} />
    </AccordionSummary>

    <AccordionDetails>{children}</AccordionDetails>
  </Accordion>
);

DetailsCollapsable.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,

  children: PropTypes.node,
  openId: PropTypes.string,
};

export default DetailsCollapsable;
