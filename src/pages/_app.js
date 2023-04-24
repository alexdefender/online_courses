import React from 'react';
import PropTypes from 'prop-types';
import { createWrapper } from 'next-redux-wrapper';
import { ThemeProvider } from '@mui/material/styles';

import i18n from '@services/i18n';
import store from '@services/store';
import theme from '@theme';

export const wrapper = createWrapper(store, { debug: false });

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
);

MyApp.getInitialProps = wrapper.getInitialAppProps((appStore) => async ({ Component, ctx }) => {
  const pageProps = Component.getInitialProps ? await Component.getInitialProps({ ...ctx, store: appStore }) : {};

  await i18n.changeLanguage('en');

  return { pageProps };
});

MyApp.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object,
};

export default wrapper.withRedux(MyApp);
