import React from 'react';
import PropTypes from 'prop-types';

import { MAIN_CONTENT_ID } from '@constants';

const Page = ({ children }) => <main id={MAIN_CONTENT_ID}>{children}</main>;

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
