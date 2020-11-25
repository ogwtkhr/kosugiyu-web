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
  TypeFace,
} from '@/constants';
import dayjs from 'dayjs';
import media from 'styled-media-query';
import { ArchiveLogoVertical } from '@/components';

import headingImage from '@/images/photos/archive/archive_heading.jpg';

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
            <ArchiveLogoVertical />
          </ArchiveLogoInner>
        </ArchiveLogoContainer>
      </ArchiveHeading>

      {['2021', '2020'].map((year) => (
        <ArticlesByYear key={year}>
          <ArticleYear>
            <ArticleYearInner>
              <ArticleYearText> {year}</ArticleYearText>
            </ArticleYearInner>
          </ArticleYear>
          <ArticleListContainer>
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
          </ArticleListContainer>
        </ArticlesByYear>
      ))}
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
    () => dayjs(publishedAt).format(DateFormat.YEAR_MONTH_DATE_DOT),
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
  display: block;
  text-decoration: none;
  ${StyleMixin.HOVER_EFFECT.NORMAL};
`;

const ArticlesByYear = styled.div`
  display: flex;
  justify-content: center;
  margin: ${Spacing.XXX_LARGE}px auto;
  max-width: ${ScreenValue.LARGE}px;

  ${media.lessThan(ScreenType.LARGE)`
    display: block;
    margin: 0 ${Spacing.LARGE}px;
  `}
`;

const ArticleYear = styled.div`
  width: 200px;

  ${media.lessThan(ScreenType.LARGE)`
    width: 100%;
    margin-bottom: ${Spacing.LARGE}px;
  `}
`;

const ArticleYearInner = styled.div`
  display: flex;
  width: calc(100% - ${Spacing.LARGE}px * 2);
  align-items: center;
  height: 100px;
  border-top: solid 1px ${Colors.ABSTRACT_GRAY};
  border-bottom: solid 1px ${Colors.ABSTRACT_GRAY};

  ${media.lessThan(ScreenType.MEDIUM)`
    width: 100%;
  `}
`;

const ArticleYearText = styled.p`
  width: 100%;
  font-size: ${TextSize.X_LARGE}rem;
  font-family: ${TypeFace.SANS_SERIF};
  font-weight: ${TextWeight.MEDIUM};
  text-align: center;
`;

const ArticleListContainer = styled.div`
  width: 100%;
`;

const ArticleList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: ${Spacing.LARGE}px;
  margin: 0 auto;
  overflow: hidden;

  ${media.lessThan(ScreenType.MEDIUM)`
    grid-template-columns: repeat(2, 1fr);
  `}
`;

const ArticleListItem = styled.li`
  margin-bottom: ${Spacing.XX_LARGE}px;
  ${media.lessThan(ScreenType.MEDIUM)`
    margin-bottom: ${Spacing.LARGE}px;
  `}
`;

const ArticleItemContainer = styled.article``;

const ArticleTitleContainer = styled.div`
  max-width: 400px;
  padding: ${Spacing.LARGE}px 0;

  ${media.lessThan(ScreenType.MEDIUM)`

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
  /* max-width: ${ScreenValue.MEDIUM}px; */
  margin: 0 auto;
`;

const ArticleThumbnail = styled.div`
  width: 100%;
  ${StyleMixin.BACKGROUND_IMAGE_WITH_SRC}

  &::after {
    content: '';
    display: block;
    padding-bottom: ${AspectRatio.R_4_BY_3}%;
  }

  ${media.lessThan(ScreenType.MEDIUM)`
    width: auto;
    position: static;
  `}
`;

const PublishDate = styled.p`
  color: ${Colors.UI_BASE};
  font-family: ${TypeFace.SANS_SERIF};
`;

export default ArchiveModule;
