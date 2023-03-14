import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Header from '@containers/Header';
import Container from '@components/Container';

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
