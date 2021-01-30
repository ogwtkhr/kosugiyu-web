import React from 'react';
import styled from 'styled-components';
import { window } from '@/util/window';
import { TwitterIcon, FacebookIcon, InstagramIcon, NoteIcon } from './Icon';
import { Colors } from '@/constants';

type SocialBaseProps = {
  url?: string;
  color?: string;
  type?: 'normal' | 'circle';
};

type TwitterTweetButtonProps = {
  title?: string;
} & SocialBaseProps;

type SocialAccountProps = {
  id: string;
  color?: string;
};

const defaultProps = {
  target: '_blank',
  rel: 'noopener noreferrer',
} as const;

export const TwitterTweetButton: React.FC<TwitterTweetButtonProps> = ({
  url: propsUrl,
  title: propsTitle,
  color,
}) => {
  const url = propsUrl || window.location.href;
  const title = propsTitle || window.document.title;
  const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    title,
  )}&url=${encodeURIComponent(url)}`;
  return (
    <Container {...defaultProps} href={shareUrl}>
      <TwitterIcon color={color} />
    </Container>
  );
};

export const FacebookShareButton: React.FC<SocialBaseProps> = ({ url: propsUrl, color }) => {
  const url = propsUrl || window.location.href;
  const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  return (
    <Container {...defaultProps} href={shareUrl}>
      <FacebookIcon color={color} />
    </Container>
  );
};

export const TwitterAccountButton: React.FC<SocialAccountProps> = ({ id, color }) => {
  const url = `https://twitter.com/${id}`;
  return (
    <Container {...defaultProps} href={url}>
      <TwitterIcon color={color} />
    </Container>
  );
};

export const FacebookAccountButton: React.FC<SocialAccountProps> = ({ id, color }) => {
  const url = `https://www.facebook.com/${id}/`;
  return (
    <Container {...defaultProps} href={url}>
      <FacebookIcon color={color} />
    </Container>
  );
};

export const InstagramAccountButton: React.FC<SocialAccountProps> = ({ id, color }) => {
  const url = `https://www.instagram.com/${id}/`;
  return (
    <Container {...defaultProps} href={url}>
      <InstagramIcon color={color} />
    </Container>
  );
};

export const NoteAccountButton: React.FC<SocialAccountProps> = ({ id, color }) => {
  const url = `https://note.com/${id}`;
  return (
    <Container {...defaultProps} href={url}>
      <NoteIcon color={color} />
    </Container>
  );
};

const Container = styled.a`
  display: block;
  /* color: ${Colors.UI_TEXT_SUB}; */
  color: ${Colors.UI_TEXT_MAIN};
`;
