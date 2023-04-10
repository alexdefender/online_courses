import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { redirect } from '@utils/navigation';

const StyledA = styled.a(({ underline }) => ({
  textDecoration: 'none',
  cursor: 'pointer',
  textDecoration: underline ? 'underline' : null,
}));

const LinkWrap = ({ href, hrefAs, target, nofollow, underline, children }) => {
  const hrefProps = target ? { target, rel: `noopener noreferrer${nofollow ? ' nofollow' : ''}` } : {};

  if (href) {
    return (
      <StyledA
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
      </StyledA>
    );
  }

  return children;
};

LinkWrap.propTypes = {
  href: PropTypes.string,
  hrefAs: PropTypes.string,
  target: PropTypes.string,
  nofollow: PropTypes.bool,
  underline: PropTypes.bool,
  children: PropTypes.node,
};

export default LinkWrap;
