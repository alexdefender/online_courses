import React from 'react';
import App from 'next/app';
import withRedux from 'next-redux-wrapper';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';

import i18n from '@services/i18n';
import initStore from '@services/redux';
import theme from '@theme';

export default withRedux(initStore, { debug: false })(
  class MyApp extends App {
    static async getInitialProps(appContext) {
      const { Component, ctx } = appContext;
      const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
      await i18n.changeLanguage('en');

      return { pageProps };
    }

    render() {
      const { Component, pageProps, store } = this.props;

      return (
        <ReduxProvider store={store}>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </ReduxProvider>
      );
    }
  },
);
