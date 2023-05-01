import { ReactNode } from 'react';
import styled from '@emotion/styled';

type WrapFlexProps = {
  gap: number | undefined;
  direction: string | undefined;
  justify: string | undefined;
  align: string | undefined;
  flex: number | undefined;
  wrap: string | undefined;
  className: string | undefined;
  style: object | undefined;
  children: ReactNode;
};

const Wrap = styled('div')<WrapFlexProps>`
  display: flex;
  gap: ${({ gap }) => (gap !== undefined && gap >= 0 ? `${gap}px` : undefined)};
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  flex: ${({ flex }) => flex};
  flex-wrap: ${({ wrap }) => wrap};
`;

const WrapFlex = ({
  gap,
  direction,
  justify,
  align,
  flex,
  wrap,
  children,
  className,
  style,
}: Partial<WrapFlexProps>): JSX.Element => (
  <Wrap {...{ gap, direction, justify, align, wrap, flex, style }} className={className}>
    {children}
  </Wrap>
);

WrapFlex.displayName = 'WrapFlex';

export default WrapFlex;
