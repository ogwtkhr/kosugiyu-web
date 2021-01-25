import React, { useMemo } from 'react';
import { Link } from 'gatsby';
import { ValueOf } from '@/types';
import styled, { css } from 'styled-components';
import {
  StyleMixin,
  AspectRatio,
  TextSize,
  Typography,
  LineHeight,
  Colors,
  Spacing,
  ScreenType,
  DateFormat,
} from '@/constants';
import dayjs from 'dayjs';
import media from 'styled-media-query';

export const ArticleItemType = {
  VERTICAL: 'vertical',
  HORIZONTAL: 'horizontal',
} as const;

export type ArticleItemType = ValueOf<typeof ArticleItemType>;

export type ArticleItemProps = {
  slug: string;
  title: string;
  mainVisualUrl: string;
  publishedAt: string;
  type?: ArticleItemType;
};

export const ArticleItem: React.FC<ArticleItemProps> = ({
  slug,
  title,
  mainVisualUrl,
  publishedAt,
  type = ArticleItemType.VERTICAL,
}) => {
  const formattedPublishedAt = useMemo(
    () => dayjs(publishedAt).format(DateFormat.YEAR_MONTH_DATE_JP),
    [publishedAt],
  );

  return (
    <ArticleItemContainer>
      <ArticleLink type={type} to={`/archive/${slug}`}>
        <ArticleThumbnailContainer type={type}>
          <ArticleThumbnail src={mainVisualUrl} />
        </ArticleThumbnailContainer>
        <ArticleTitleContainer type={type}>
          <ArticleTitle>{title}</ArticleTitle>
          <PublishDate>{formattedPublishedAt}</PublishDate>
        </ArticleTitleContainer>
      </ArticleLink>
    </ArticleItemContainer>
  );
};

type ArticleItemChildProps = Pick<ArticleItemProps, 'type'>;

const ArticleLink = styled(Link)<ArticleItemChildProps>`
  display: ${({ type }) => (type === ArticleItemType.VERTICAL ? 'block' : 'flex')};
  text-decoration: none;
  ${StyleMixin.HOVER_EFFECT.NORMAL};
`;

const ArticleItemContainer = styled.article``;

const ArticleTitleContainer = styled.div<ArticleItemChildProps>`
  flex: 1;
  max-width: 400px;
  padding: ${Spacing.LARGE}px 0;
  ${({ type }) =>
    type === ArticleItemType.HORIZONTAL
      ? css`
          margin-left: ${Spacing.X_LARGE}px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        `
      : ''};
`;

const ArticleTitle = styled.h3`
  ${Typography.Mixin.DISPLAY};
  font-size: ${TextSize.LARGE}rem;
  line-height: ${LineHeight.NORMAL};
  text-decoration: none;

  ${media.lessThan(ScreenType.MEDIUM)`
    font-size: ${TextSize.NORMAL}rem;
  `}
`;

const ArticleThumbnailContainer = styled.div<ArticleItemChildProps>`
  width: ${({ type }) => (type === ArticleItemType.VERTICAL ? 100 : 40)}%;
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

const PublishDate = styled.p`
  ${Typography.Mixin.DISPLAY};
  color: ${Colors.UI_TEXT_SUB};
  font-size: ${TextSize.SMALL}rem;
`;
