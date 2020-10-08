import React, { useMemo } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { AllMicrocmsArchiveQuery } from '@/types';
import styled from 'styled-components';
import {
  StyleMixin,
  AspectRatio,
  TextSize,
  Typography,
  TextWeight,
  LineHeight,
  Colors,
  Spacing,
  ScreenValue,
  BigSpacing,
  ScreenType,
  DateFormat,
} from '@/constants';
import dayjs from 'dayjs';
import media from 'styled-media-query';
import { PersonsLogoVertical } from '@/components';

import headingImage from '@/images/photos/persons/persons_heading.jpg';

export const ArchiveModule: React.FC = () => {
  const data = useStaticQuery<AllMicrocmsArchiveQuery>(graphql`
    query allMicrocmsArchive {
      allMicrocmsArchive(sort: { fields: [createdAt], order: DESC }) {
        nodes {
          id
          title
          slug
          publishedAt
          mainVisual {
            url
          }
        }
      }
    }
  `);

  return (
    <Container>
      <ArchiveHeading src={headingImage}>
        <ArchiveLogoContainer>
          <ArchiveLogoInner>
            <PersonsLogoVertical />
          </ArchiveLogoInner>
        </ArchiveLogoContainer>
      </ArchiveHeading>
      <ArticleList>
        {data.allMicrocmsArchive.nodes.map((entry) => {
          const slug = entry.slug || '';
          const title = entry.title || '';
          const mainVisualUrl = entry?.mainVisual?.url || '';
          const publishedAt = entry?.publishedAt || '';
          return (
            <ArticleListItem key={entry.slug}>
              <ArticleItem
                slug={slug}
                title={title}
                mainVisualUrl={mainVisualUrl}
                publishedAt={publishedAt}
              />
            </ArticleListItem>
          );
        })}
      </ArticleList>
    </Container>
  );
};

const ArchiveHeading = styled.div`
  width: 100%;
  ${StyleMixin.BACKGROUND_IMAGE_WITH_SRC};
  margin-bottom: ${Spacing.XX_LARGE}px;
  padding: ${Spacing.XX_LARGE}px;

  ${media.lessThan(ScreenType.MEDIUM)`
    padding: ${Spacing.LARGE}px auto;
  `}
`;

const ArchiveLogoContainer = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 200px;
  margin: 0 auto;
  border: solid 1px ${Colors.ABSTRACT_NAVY};
  background-color: ${Colors.ABSTRACT_WHITE};
`;

const ArchiveLogoInner = styled.div`
  width: 32px;
  height: 160px;
`;

const Container = styled.div`
  width: 100%;
  background-color: ${Colors.UI_PAPER};
`;

type ArticleItemProps = {
  slug: string;
  title: string;
  mainVisualUrl: string;
  publishedAt: string;
};

const ArticleItem: React.FC<ArticleItemProps> = ({ slug, title, mainVisualUrl, publishedAt }) => {
  const formattedPublishedAt = useMemo(
    () => dayjs(publishedAt).format(DateFormat.YEAR_MONTH_DATE_JP),
    [publishedAt],
  );

  return (
    <ArticleItemContainer>
      <ArticleLink to={`/archive/${slug}`}>
        <ArticleThumbnailContainer>
          <ArticleThumbnail src={mainVisualUrl} />
          <ArticleTitleContainer>
            <PublishDate>{formattedPublishedAt}</PublishDate>
            <ArticleTitle>{title}</ArticleTitle>
          </ArticleTitleContainer>
        </ArticleThumbnailContainer>
      </ArticleLink>
    </ArticleItemContainer>
  );
};

const ArticleLink = styled(Link)`
  text-decoration: none;
`;

const ArticleList = styled.ul`
  max-width: ${ScreenValue.LARGE}px;
  margin: 0 auto;
  overflow: hidden;
`;

const ArticleListItem = styled.li`
  margin-bottom: ${Spacing.XX_LARGE}px;

  /* TODO: 調整の余地あり */
  ${media.lessThan(ScreenType.MEDIUM)`
    margin-bottom: ${BigSpacing.XX_LARGE}px;
  `}
`;

const ArticleItemContainer = styled.article`
  position: relative;
`;

const ArticleTitleContainer = styled.div`
  position: absolute;
  top: 70%;
  max-width: 400px;
  padding: ${Spacing.LARGE}px;
  border: solid 1px ${Colors.ABSTRACT_NAVY};
  background-color: ${Colors.ABSTRACT_WHITE};

  ${ArticleListItem}:nth-child(odd) & {
    right: ${Spacing.LARGE}px;
  }

  ${ArticleListItem}:nth-child(even) & {
    left: ${Spacing.LARGE}px;
  }

  ${media.lessThan(ScreenType.MEDIUM)`
    right: ${Spacing.LARGE}px;
    left: ${Spacing.LARGE}px;
    top: 90%;
  `}
`;

const ArticleTitle = styled.h3`
  ${Typography.Mixin.EXTENDED};
  color: ${Colors.ABSTRACT_NAVY};
  font-size: ${TextSize.LARGE}rem;
  font-weight: ${TextWeight.BOLD};
  line-height: ${LineHeight.NORMAL};
  text-decoration: none;

  ${media.lessThan(ScreenType.MEDIUM)`
    font-size: ${TextSize.NORMAL}rem;
  `}
`;

const ArticleThumbnailContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: ${ScreenValue.MEDIUM}px;
  margin: 0 auto;

  &::after {
    content: '';
    display: block;
    padding-bottom: ${AspectRatio.R_4_BY_3}%;
  }

  ${media.lessThan(ScreenType.MEDIUM)`
    &::after {
      display: none;
    }
  `}
`;

const ArticleThumbnail = styled.div`
  position: absolute;
  width: 100%;
  ${StyleMixin.BACKGROUND_IMAGE_WITH_SRC}

  &::after {
    content: '';
    display: block;
    padding-bottom: ${AspectRatio.R_4_BY_3}%;
  }

  ${ArticleListItem}:nth-child(odd) & {
    right: ${BigSpacing.SMALL}px;
  }

  ${ArticleListItem}:nth-child(even) & {
    left: ${BigSpacing.SMALL}px;
  }

  ${media.lessThan(ScreenType.MEDIUM)`
    width: auto;
    position: static;

    ${ArticleListItem}:nth-child(odd) & {
      margin-right: ${Spacing.XX_LARGE}px;
    }

    ${ArticleListItem}:nth-child(even) & {
      margin-left: ${Spacing.XX_LARGE}px;
    }
  `}
`;

const PublishDate = styled.p`
  color: ${Colors.UI_BASE};
  text-align: center;
`;

export default ArchiveModule;
