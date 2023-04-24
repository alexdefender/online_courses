import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';

import { Header } from '@components';

const BaseLayout = ({ children }) => (
  <Fragment>
    <Header />

    <Container>{children}</Container>
  </Fragment>
);

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BaseLayout;
