import { useTranslation } from 'react-i18next';
import Typography, { CommonTypographyProps } from './Typography';

type TextProps = {
  tid: string;
  values?: object;
} & Partial<CommonTypographyProps>;

const Text = ({ tid, values = {}, ...props }: TextProps): JSX.Element => {
  const { t } = useTranslation();

  return <Typography {...props}>{t(tid, values)}</Typography>;
};

Text.displayName = 'Text';

export default Text;
