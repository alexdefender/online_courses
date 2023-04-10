import React from 'react';
import App from 'next/app';
import { createWrapper } from 'next-redux-wrapper';
import { ThemeProvider } from '@mui/material/styles';

import i18n from '@services/i18n';
import store from '@services/store';
import theme from '@theme';

export const wrapper = createWrapper(store, { debug: false });

class MyApp extends App {
  static getInitialProps = wrapper.getInitialAppProps((appStore) => async ({ Component, ctx }) => {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps({ ...ctx, store: appStore }) : {};

    await i18n.changeLanguage('en');

    return { pageProps };
  });

  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

export default wrapper.withRedux(MyApp);
