import React, { useState, useEffect } from 'react';
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
import { RenderClientOnly } from '@/effects';
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
  const [url, setUrl] = useState<string>(propsUrl || window.location.href);
  const [title, setTitle] = useState<string>(propsTitle || window.document.title);

  useEffect(() => {
    setTimeout(() => {
      // TODO、即時でtitleが書き換わらないのでいったん
      setUrl(propsUrl || window.location.href);
      setTitle(propsTitle || window.document.title);
    }, 10);
  }, [propsUrl, propsTitle]);

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
  const [url, setUrl] = useState<string>(propsUrl || window.location.href);

  useEffect(() => {
    setTimeout(() => {
      // 上に同じ
      setUrl(propsUrl || window.location.href);
    }, 10);
  }, [propsUrl]);

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
    <RenderClientOnly>
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
      </ShareButtonListContainer>
    </RenderClientOnly>
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
