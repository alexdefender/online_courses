import { ReactNode } from 'react';
import styled from '@emotion/styled';
import theme from '@theme';

type CoursesListWrapProps = {
  children: ReactNode;
};

const Wrap = styled.div`
  display: grid;
  gap: 20px;

  ${theme.breakpoints.up('md')} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const CoursesListWrap = ({ children }: CoursesListWrapProps): JSX.Element => <Wrap>{children}</Wrap>;

CoursesListWrap.displayName = 'CoursesListWrap';

export default CoursesListWrap;
