import { Html, Head, Main, NextScript } from 'next/document';
import { getStaticAssetPath } from '@utils';

const MyDocument = (): JSX.Element => (
  <Html lang="en">
    <Head>
      <link rel="stylesheet" href={getStaticAssetPath('reset.css', 'css')} />
    </Head>

    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default MyDocument;
