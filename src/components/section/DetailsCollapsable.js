import React from 'react';
import PropTypes from 'prop-types';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Text from '../text/Text';

const DetailsCollapsable = ({ id, openId, title, TitleProps, children, onChange }) => (
  <Accordion disableGutters expanded={id === openId} onChange={onChange}>
    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`${id}-content`} id={`${id}-header`}>
      <Text tid={title} {...TitleProps} />
    </AccordionSummary>

    <AccordionDetails>{children}</AccordionDetails>
  </Accordion>
);

DetailsCollapsable.defaultProps = {
  TitleProps: {},
};

DetailsCollapsable.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,

  TitleProps: PropTypes.object,
  children: PropTypes.node,
  openId: PropTypes.string,
};

export default DetailsCollapsable;
