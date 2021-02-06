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
import { ExternalLink } from '@/atoms';
import { Colors, Spacing, ScreenType } from '@/constants';
import { ValueOf } from '@/types';
import media from 'styled-media-query';

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
    <Container href={shareUrl}>
      {shape === Shape.CIRCLE ? <TwitterCircleIcon color={color} /> : <TwitterIcon color={color} />}
    </Container>
  );
};

export const FacebookShareButton: React.FC<SocialBaseProps> = ({ url: propsUrl, color, shape }) => {
  const url = propsUrl || window.location.href;
  const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  return (
    <Container href={shareUrl}>
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
    <Container href={url}>
      {shape === Shape.CIRCLE ? <TwitterCircleIcon color={color} /> : <TwitterIcon color={color} />}
    </Container>
  );
};

export const FacebookAccountButton: React.FC<SocialAccountProps> = ({ id, color, shape }) => {
  const url = `https://www.facebook.com/${id}/`;
  return (
    <Container href={url}>
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
    <Container href={url}>
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
    <Container href={url}>
      {shape === Shape.CIRCLE ? <NoteCircleIcon color={color} /> : <NoteIcon color={color} />}
    </Container>
  );
};

const Container = styled(ExternalLink)`
  display: block;
  width: 100%;
  height: 100%;
  color: ${Colors.UI_TEXT_MAIN};
`;

type ShareButtonListProps = {
  twitter?: boolean;
  facebook?: boolean;
};

export const ShareButtonList: React.FC<ShareButtonListProps> = ({ twitter, facebook }) => {
  return (
    <ShareButtonListContainer>
      {twitter && (
        <ButtonItem>
          <TwitterTweetButton shape="circle" />
        </ButtonItem>
      )}
      {facebook && (
        <ButtonItem>
          <FacebookShareButton shape="circle" />
        </ButtonItem>
      )}
    {/* </ShareButtonListContainer> */}
  );
};

const ShareButtonListContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const ButtonItem = styled.li`
  width: 28px;
  & + & {
    margin-left: ${Spacing.NORMAL}px;
  }

  ${media.lessThan(ScreenType.MEDIUM)`
    width: 32px;

    & + & {
      margin-left: ${Spacing.LARGE}px;
    }
  `}
`;
