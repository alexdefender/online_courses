import React from 'react';
import { createWrapper } from 'next-redux-wrapper';
import { ThemeProvider } from '@mui/material/styles';

import i18n from '@services/i18n';
import store from '@services/store';
import theme from '@theme';

export const wrapper = createWrapper(store, { debug: false });

type MyAppProps = {
  Component: React.ComponentType<any>;
  pageProps: object;
};

const MyApp = ({ Component, pageProps }: MyAppProps): JSX.Element => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
);

MyApp.getInitialProps = wrapper.getInitialAppProps((appStore) => async ({ Component, ctx }) => {
  const pageProps = Component.getInitialProps ? await Component.getInitialProps({ ...ctx, store: appStore }) : {};

  await i18n.changeLanguage('en');

  return { pageProps };
});

export default wrapper.withRedux(MyApp);
