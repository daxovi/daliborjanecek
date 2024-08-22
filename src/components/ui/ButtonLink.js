import React from 'react';
import "./ButtonLink.css";

const ButtonLink = ({to, children}) => {
  const isExternal = to.startsWith('http');

  return (
    <a 
      href={to} 
      className="button-link" 
      target={isExternal ? '_blank' : '_self'} 
      rel={isExternal ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  );
}

export default ButtonLink;
