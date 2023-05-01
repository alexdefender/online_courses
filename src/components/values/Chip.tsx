import Chip from '@mui/material/Chip';

import SafeText from '../text/SafeText';

type ChipProps = {
  label: string;
  variant: 'filled' | 'outlined';
  LabelProps?: object;
};

const ChipComponent = ({ label, LabelProps = {}, variant }: ChipProps): JSX.Element => (
  <Chip label={<SafeText content={label} {...LabelProps} />} variant={variant} />
);

ChipComponent.displayName = 'ChipComponent';

export default ChipComponent;
