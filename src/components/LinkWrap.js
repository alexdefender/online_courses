import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { redirect } from '@utils/navigation';

const StyledA = styled.a({
  textDecoration: 'none',
  cursor: 'pointer',
});

const LinkWrap = ({ href, hrefAs, target, children }) => {
  const hrefProps = target ? { target, rel: 'noopener noreferrer' } : {};

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
  children: PropTypes.node,
};

export default LinkWrap;
