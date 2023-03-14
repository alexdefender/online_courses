import React from 'react';
import App from 'next/app';
import withRedux from 'next-redux-wrapper';
import { Provider as ReduxProvider } from 'react-redux';

import i18n from '@services/i18n';
import initStore from '@services/redux';
import { setAutorizationHeader } from '@services/request';
import { getAuthToken } from '@utils';

class MyApp extends App {
  static async getInitialProps(appContext) {
    const { Component, ctx } = appContext;

    if (ctx.isServer) {
      const authToken = getAuthToken();

      // Set authorization to API instance for SSR
      setAutorizationHeader(authToken);
    }

    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <ReduxProvider store={store}>
        <Component {...pageProps} />
      </ReduxProvider>
    );
  }
}

export default withRedux(initStore, { debug: false })(MyApp);
