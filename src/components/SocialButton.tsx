import React from 'react';
import styled from 'styled-components';
import { window } from '@/util/window';
import {
  TwitterIcon,
  FacebookIcon,
  InstagramIcon,
  NoteIcon,
  TwitterCircleIcon,
  FacebookCircleIcon,
  InstagramCircleIcon,
  NoteCircleIcon,
} from './Icon';
import { Colors } from '@/constants';
import { ValueOf } from '@/types';

const Shape = {
  NORMAL: 'normal',
  CIRCLE: 'circle',
} as const;

type Shape = ValueOf<typeof Shape>;

type SocialBaseProps = {
  url?: string;
  color?: string;
  shape?: Shape;
};

type TwitterTweetButtonProps = {
  title?: string;
} & SocialBaseProps;

type SocialAccountProps = {
  id: string;
  color?: string;
  shape?: Shape;
};

const defaultProps = {
  target: '_blank',
  rel: 'noopener noreferrer',
} as const;

export const TwitterTweetButton: React.FC<TwitterTweetButtonProps> = ({
  url: propsUrl,
  title: propsTitle,
  color,
  shape,
}) => {
  const url = propsUrl || window.location.href;
  const title = propsTitle || window.document.title;
  const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    title,
  )}&url=${encodeURIComponent(url)}`;
  return (
    <Container {...defaultProps} href={shareUrl}>
      {shape === Shape.CIRCLE ? <TwitterCircleIcon color={color} /> : <TwitterIcon color={color} />}
    </Container>
  );
};

export const FacebookShareButton: React.FC<SocialBaseProps> = ({ url: propsUrl, color, shape }) => {
  const url = propsUrl || window.location.href;
  const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  return (
    <Container {...defaultProps} href={shareUrl}>
      {shape === Shape.CIRCLE ? (
        <FacebookCircleIcon color={color} />
      ) : (
        <FacebookIcon color={color} />
      )}
    </Container>
  );
};

export const TwitterAccountButton: React.FC<SocialAccountProps> = ({ id, color, shape }) => {
  const url = `https://twitter.com/${id}`;
  return (
    <Container {...defaultProps} href={url}>
      {shape === Shape.CIRCLE ? <TwitterCircleIcon color={color} /> : <TwitterIcon color={color} />}
    </Container>
  );
};

export const FacebookAccountButton: React.FC<SocialAccountProps> = ({ id, color, shape }) => {
  const url = `https://www.facebook.com/${id}/`;
  return (
    <Container {...defaultProps} href={url}>
      {shape === Shape.CIRCLE ? (
        <FacebookCircleIcon color={color} />
      ) : (
        <FacebookIcon color={color} />
      )}
    </Container>
  );
};

export const InstagramAccountButton: React.FC<SocialAccountProps> = ({ id, color, shape }) => {
  const url = `https://www.instagram.com/${id}/`;
  return (
    <Container {...defaultProps} href={url}>
      {shape === Shape.CIRCLE ? (
        <InstagramCircleIcon color={color} />
      ) : (
        <InstagramIcon color={color} />
      )}
    </Container>
  );
};

export const NoteAccountButton: React.FC<SocialAccountProps> = ({ id, color, shape }) => {
  const url = `https://note.com/${id}`;
  return (
    <Container {...defaultProps} href={url}>
      {shape === Shape.CIRCLE ? <NoteCircleIcon color={color} /> : <NoteIcon color={color} />}
    </Container>
  );
};

const Container = styled.a`
  display: block;
  width: 100%;
  height: 100%;
  /* color: ${Colors.UI_TEXT_SUB}; */
  color: ${Colors.UI_TEXT_MAIN};
`;
