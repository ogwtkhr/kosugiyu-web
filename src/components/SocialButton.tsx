import React from 'react';
import styled from 'styled-components';
import { window } from '@/util/window';
import { TwitterIcon, FacebookIcon } from './Icon';

type SocialBaseProps = {
  url?: string;
};

type TwitterTweetButtonProps = {
  title?: string;
} & SocialBaseProps;

type SocialAccountProps = {
  id: string;
};

const defaultProps = {
  target: '_blank',
  rel: 'noopener noreferrer',
} as const;

export const TwitterTweetButton: React.FC<TwitterTweetButtonProps> = ({
  url: propsUrl,
  title: propsTitle,
}) => {
  const url = propsUrl || window.location.href;
  const title = propsTitle || window.document.title;
  const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    title,
  )}&url=${encodeURIComponent(url)}`;
  return (
    <Container {...defaultProps} href={shareUrl}>
      <TwitterIcon />
    </Container>
  );
};

export const FacebookShareButton: React.FC<SocialBaseProps> = ({ url: propsUrl }) => {
  const url = propsUrl || window.location.href;
  const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  return (
    <Container {...defaultProps} href={shareUrl}>
      <FacebookIcon />
    </Container>
  );
};

export const TwitterAccountButton: React.FC<SocialAccountProps> = ({ id }) => {
  const url = `https://twitter.com/${id}`;
  return (
    <Container {...defaultProps} href={url}>
      <TwitterIcon />
    </Container>
  );
};

export const FacebookAccountButton: React.FC<SocialAccountProps> = ({ id }) => {
  const url = `https://www.facebook.com/${id}`;
  return (
    <Container {...defaultProps} href={url}>
      <FacebookIcon />
    </Container>
  );
};

const Container = styled.a`
  display: block;
`;
