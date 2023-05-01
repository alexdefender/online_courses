import { ReactNode, Fragment } from 'react';
import styled from '@emotion/styled';

import { redirect } from '@utils/navigation';

type LinkWrapProps = {
  href?: string;
  hrefAs?: string;
  target?: string;
  nofollow?: boolean;
  underline?: boolean;
  children: ReactNode;
};

const Link = styled('a')<Pick<LinkWrapProps, 'underline'>>`
  text-decoration: ${({ underline }) => (underline ? 'underline' : undefined)};
  cursor: pointer;
`;

const LinkWrap = ({ href, hrefAs, target, nofollow, underline = false, children }: LinkWrapProps): JSX.Element => {
  const hrefProps: object = target ? { target, rel: `noopener noreferrer${nofollow ? ' nofollow' : ''}` } : {};

  if (href) {
    return (
      <Link
        href={href}
        onClick={(e) => {
          if (!target) {
            e.preventDefault();
            redirect(href, hrefAs);
          }
        }}
        underline={underline}
        {...hrefProps}
      >
        {children}
      </Link>
    );
  }

  return <Fragment>{children}</Fragment>;
};

LinkWrap.displayName = 'LinkWrap';

export default LinkWrap;
