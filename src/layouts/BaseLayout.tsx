import { Fragment, ReactNode } from 'react';
import Container from '@mui/material/Container';

import { Header } from '@components';

type BaseLayoutProps = {
  children: ReactNode;
};

const BaseLayout = ({ children }: BaseLayoutProps): JSX.Element => (
  <Fragment>
    <Header />

    <Container>{children}</Container>
  </Fragment>
);

export default BaseLayout;
