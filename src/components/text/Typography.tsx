import { ReactNode } from 'react';
import TypographyComponent from '@mui/material/Typography';
import styled from '@emotion/styled';

export type CommonTypographyProps = {
  variant: string;
  component: string;
  color: string | undefined;
  bold: number | undefined;
};

type TypographyProps = {
  children: ReactNode;
  dangerouslySetInnerHTML: { __html: string } | undefined;
} & Pick<CommonTypographyProps, 'color' | 'bold'>;

const StyledTypography = styled(TypographyComponent)<TypographyProps>`
  color: ${({ color }) => color};
  font-weight: ${({ bold }) => bold};
`;

const Typography = ({
  color,
  bold,
  dangerouslySetInnerHTML,
  children,
  ...props
}: Partial<TypographyProps>): JSX.Element => (
  <StyledTypography {...{ color, bold, dangerouslySetInnerHTML, ...props }}>{children}</StyledTypography>
);

Typography.displayName = 'Typography';

export default Typography;
