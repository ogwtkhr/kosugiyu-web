import React from 'react';

type ExternalLinkProps = {
  href: string;
  className?: string;
  openNewWindow?: boolean;
};

export const ExternalLink: React.FC<ExternalLinkProps> = ({
  href,
  openNewWindow = true,
  className,
  children,
}) => {
  const attributes = openNewWindow
    ? {
        target: '_blank',
        rel: 'noopener noreferrer',
      }
    : {};

  return (
    <a {...attributes} href={href} className={className}>
      {children}
    </a>
  );
};
