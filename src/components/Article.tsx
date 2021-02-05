import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import {
  ModuleWidth,
  TextWeight,
  Spacing,
  Colors,
  TypographyMixin,
  TextSize,
  LetterSpacing,
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

const Container = styled.article`
  max-width: ${ModuleWidth.ARTICLE}px;
  margin-right: auto;
  margin-left: auto;
  word-wrap: break-word;
  overflow-wrap: break-word;
  ${media.lessThan(ScreenType.MEDIUM)`
    margin: 0 ${Spacing.LARGE}px;
  `}

  & p {
    padding-bottom: ${Spacing.LARGE}px;
    font-size: ${TextSize.NORMAL}rem;
    font-weight: ${TextWeight.MEDIUM};

    ${media.lessThan(ScreenType.MEDIUM)`
      font-size: ${TextSize.SMALL}rem;
    `}

    & > strong,
    & > em {
      color: ${Colors.ABSTRACT_MIDDLE_GRAY};
      font-weight: ${TextWeight.BOLD};
      /* 詰まって見えるので微調整 */
      letter-spacing: ${LetterSpacing.SEMI_WIDE + 0.02}em;
    }

    & > img {
      display: block;
      width: 100%;
      margin-top: ${Spacing.X_LARGE}px;

      ${media.lessThan(ScreenType.MEDIUM)`
      margin-left: -${Spacing.LARGE}px;
      margin-right: -${Spacing.LARGE}px;
      margin-top: ${Spacing.LARGE}px;
      width: calc(100% + ${Spacing.LARGE * 2}px);
    `}
    }

    & > a {
      ${TypographyMixin.LINK};
    }
  }

  & p:not(:first-child) {
    padding-top: ${Spacing.LARGE}px;
  }

  & > h1,
  & > h2 {
    ${TypographyMixin.DISPLAY};
    margin-top: ${Spacing.XXX_LARGE}px;
  }

  & > h1 {
    font-size: ${TextSize.X_LARGE}rem;

    ${media.lessThan(ScreenType.MEDIUM)`
      font-size: ${TextSize.LARGE}rem;
    `}
  }

  & > h2 {
    font-size: ${TextSize.LARGE}rem;

    ${media.lessThan(ScreenType.MEDIUM)`
      font-size: ${TextSize.NORMAL}rem;
    `}
  }
`;
