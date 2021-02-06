import React from 'react';
import styled from 'styled-components';

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
    <Anchor {...attributes} href={href} className={className}>
      {children}
    </Anchor>
  );
};

const Anchor = styled.a`
  /* color: inherit;
  text-decoration: inherit; */
`;
