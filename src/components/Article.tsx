import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import {
  ModuleWidth,
  TextWeight,
  Spacing,
  Colors,
  Typography,
  TextSize,
  ScreenType,
} from '@/constants';

type ArticleProps = {
  body: string;
};

export const Article: React.FC<ArticleProps> = ({ body }) => {
  return (
    <Container
      dangerouslySetInnerHTML={{
        __html: body,
      }}
    />
  );
};

export const Container = styled.article`
  max-width: ${ModuleWidth.ARTICLE}px;
  margin-left: auto;
  margin-right: auto;
  ${media.lessThan(ScreenType.MEDIUM)`
      margin: 0 ${Spacing.LARGE}px;
    `}

  & p {
    padding-top: ${Spacing.LARGE}px;
    padding-bottom: ${Spacing.LARGE}px;
    font-size: ${TextSize.NORMAL}rem;
    font-weight: ${TextWeight.MEDIUM};

    ${media.lessThan(ScreenType.MEDIUM)`
        font-size: ${TextSize.SMALL}rem;
      `}
  }

  & h1 {
    ${Typography.Mixin.DISPLAY};
    margin-top: ${Spacing.XXX_LARGE}px;
    font-size: ${TextSize.LARGE}rem;

    ${media.lessThan(ScreenType.MEDIUM)`
        font-size: ${TextSize.NORMAL}rem;
      `}
  }

  & strong {
    color: ${Colors.UI_TEXT_SUB};
    font-weight: ${TextWeight.BOLD};
  }

  & img {
    display: block;
    width: 100%;
    margin-top: ${Spacing.X_LARGE}px;

    ${media.lessThan(ScreenType.MEDIUM)`
        margin-left: -${Spacing.LARGE}px;
        margin-right: -${Spacing.LARGE}px;
        width: calc(100% + ${Spacing.LARGE * 2}px);
    `}
  }
`;
