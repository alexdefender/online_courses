import { ReactNode, SyntheticEvent } from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Text from '../text/Text';

type DetailsCollapsableProps = {
  id: string;
  isOpen: boolean;
  title: string;
  TitleProps: object;
  children: ReactNode;
  onChange: (e: SyntheticEvent, expanded: boolean) => void;
};

const DetailsCollapsable = ({
  id,
  isOpen,
  title,
  TitleProps,
  children,
  onChange,
}: DetailsCollapsableProps): JSX.Element => (
  <Accordion disableGutters expanded={isOpen} onChange={onChange}>
    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`${id}-content`} id={`${id}-header`}>
      <Text tid={title} {...TitleProps} />
    </AccordionSummary>

    <AccordionDetails>{children}</AccordionDetails>
  </Accordion>
);

DetailsCollapsable.displayName = 'DetailsCollapsable';

export default DetailsCollapsable;
