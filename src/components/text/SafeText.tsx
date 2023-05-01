import Typography, { CommonTypographyProps } from './Typography';

type SafeTextProps = {
  content: string | number;
} & Partial<CommonTypographyProps>;

const SafeText = ({ content, ...props }: SafeTextProps) => (
  <Typography dangerouslySetInnerHTML={{ __html: `${content}` }} {...props} />
);

SafeText.displayName = 'SafeText';

export default SafeText;
