import { ReactNode } from 'react';

import { MAIN_CONTENT_ID } from '@constants';

type PageProps = {
  children: ReactNode;
};

const Page = ({ children }: PageProps): JSX.Element => <main id={MAIN_CONTENT_ID}>{children}</main>;

export default Page;
