import React, { useMemo } from 'react';
import { Link } from 'gatsby';
import { ValueOf } from '@/types';
import styled, { css } from 'styled-components';
import {
  StyleMixin,
  AspectRatio,
  TextSize,
  TypographyMixin,
  LineHeight,
  Colors,
  Spacing,
  ScreenType,
  DateFormat,
  SizeType,
} from '@/constants';
import dayjs from 'dayjs';
import media from 'styled-media-query';

export const ArticleItemDirection = {
  VERTICAL: 'vertical',
  HORIZONTAL: 'horizontal',
} as const;

export type ArticleItemDirection = ValueOf<typeof ArticleItemDirection>;

export type ArticleItemProps = {
  slug: string;
  title: string;
  mainVisualUrl: string;
  publishedAt: string;
  direction?: ArticleItemDirection;
  textSize?: Extract<SizeType, 'small' | 'normal'>;
  enableTextSizingOnSmallScreen?: boolean;
};

export const ArticleItem: React.FC<ArticleItemProps> = ({
  slug,
  title,
  mainVisualUrl,
  publishedAt,
  direction = ArticleItemDirection.VERTICAL,
  textSize,
  enableTextSizingOnSmallScreen,
}) => {
  const formattedPublishedAt = useMemo(
    () => dayjs(publishedAt).format(DateFormat.YEAR_MONTH_DATE_JP),
    [publishedAt],
  );

  return (
    <ArticleItemContainer>
      <ArticleLink direction={direction} to={`/archive/${slug}`}>
        <ArticleThumbnailContainer direction={direction}>
          <ArticleThumbnail src={mainVisualUrl} />
        </ArticleThumbnailContainer>
        <ArticleTitleContainer direction={direction}>
          <ArticleTitle
            textSize={textSize}
            enableTextSizingOnSmallScreen={enableTextSizingOnSmallScreen}
          >
            {title}
          </ArticleTitle>
          <PublishDate enableTextSizingOnSmallScreen={enableTextSizingOnSmallScreen}>
            {formattedPublishedAt}
          </PublishDate>
        </ArticleTitleContainer>
      </ArticleLink>
    </ArticleItemContainer>
  );
};

type ArticleItemChildPropsWithDirection = Pick<ArticleItemProps, 'direction'>;
type ArticleItemChildPropsWithTextSize = Pick<
  ArticleItemProps,
  'textSize' | 'enableTextSizingOnSmallScreen'
>;

const ArticleLink = styled(Link)<ArticleItemChildPropsWithDirection>`
  display: ${({ direction }) => (direction === ArticleItemDirection.VERTICAL ? 'block' : 'flex')};
  text-decoration: none;
  ${StyleMixin.HOVER_EFFECT.NORMAL};
`;

const ArticleItemContainer = styled.article``;

const ArticleTitleContainer = styled.div<ArticleItemChildPropsWithDirection>`
  flex: 1;
  max-width: 400px;
  padding: ${Spacing.LARGE}px 0;
  ${({ direction }) =>
    direction === ArticleItemDirection.HORIZONTAL
      ? css`
          margin-left: ${Spacing.X_LARGE}px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          ${media.lessThan(ScreenType.MEDIUM)`
            margin-left: ${Spacing.LARGE}px;
            padding: 0;
          `}
        `
      : ''};
`;

const ArticleTitle = styled.h3<ArticleItemChildPropsWithTextSize>`
  ${TypographyMixin.DISPLAY};
  font-size: ${({ textSize }) =>
    textSize === SizeType.SMALL ? TextSize.NORMAL : TextSize.LARGE}rem;
  line-height: ${LineHeight.NORMAL};
  text-decoration: none;

  ${media.lessThan<ArticleItemChildPropsWithTextSize>(ScreenType.MEDIUM)`
    font-size: ${({ textSize, enableTextSizingOnSmallScreen }) =>
      enableTextSizingOnSmallScreen && textSize === SizeType.SMALL
        ? TextSize.SMALL
        : TextSize.NORMAL}rem
  `}
`;

const ArticleThumbnailContainer = styled.div<ArticleItemChildPropsWithDirection>`
  width: ${({ direction }) => (direction === ArticleItemDirection.VERTICAL ? 100 : 40)}%;
  overflow: hidden;
`;

const ArticleThumbnail = styled.div`
  width: 100%;
  ${StyleMixin.BACKGROUND_IMAGE_WITH_SRC};

  &::after {
    content: '';
    display: block;
    padding-bottom: ${AspectRatio.R_4_BY_3}%;
  }
`;

const PublishDate = styled.p<ArticleItemChildPropsWithTextSize>`
  ${TypographyMixin.DISPLAY};
  color: ${Colors.UI_TEXT_SUB};
  font-size: ${({ textSize }) =>
    textSize === SizeType.SMALL ? TextSize.X_SMALL : TextSize.SMALL}rem;
  line-height: ${LineHeight.NORMAL};

  ${media.lessThan<ArticleItemChildPropsWithTextSize>(ScreenType.MEDIUM)`
    font-size: ${({ textSize, enableTextSizingOnSmallScreen }) =>
      enableTextSizingOnSmallScreen && textSize === SizeType.SMALL
        ? TextSize.XX_SMALL
        : TextSize.X_SMALL}rem
  `}
`;
