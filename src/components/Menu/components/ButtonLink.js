import React from 'react';
import PropTypes from 'prop-types';

function ButtonLink({ className, href, children }) {
  return (
    <button className={className} href={href}>
      {children}
    </button>
  );
}

ButtonLink.defaultProps = {
  href: '/',
  className: '',
};

ButtonLink.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default ButtonLink;