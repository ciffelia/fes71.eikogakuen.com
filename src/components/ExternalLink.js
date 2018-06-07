import React from 'react'

const ExternalLink = ({ to, onClick, children }) =>
  <a
    href={to}
    target='_blank'
    rel='noopener'
    onClick={onClick}
  >
    {children}
  </a>

export default ExternalLink
