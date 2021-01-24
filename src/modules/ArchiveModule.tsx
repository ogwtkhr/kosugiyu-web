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
  ModuleWidth,
  BigSpacing,
  ScreenType,
  DateFormat,
  TypeFace,
} from '@/constants';
import dayjs from 'dayjs';
import media from 'styled-media-query';
import { CommonTitle } from '@/components';
import { groupByIndex } from '@/util/array';
import { ValueOf } from '@/types';

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

  const baseArticles: ArticleItemProps[] = data.allMicrocmsArchive.nodes.map((entry) => {
    const slug = entry.slug || '';
    const title = entry.title || '';
    const mainVisualUrl = entry?.mainVisual?.url || '';
    const publishedAt = entry?.publishedAt || '';
    return {
      slug,
      title,
      mainVisualUrl,
      publishedAt,
    };
  });

  // TODO
  const articles = [
    ...baseArticles,
    ...baseArticles,
    ...baseArticles,
    ...baseArticles,
    ...baseArticles,
    ...baseArticles,
  ];
  const years = ['2021', '2020'];

  const groupedArticle = groupByIndex(baseArticles, 11);

  return (
    <Container>
      <CommonTitle title="できごと" imagePath="photos/archive/hero.jpg" />
      <YearNavigation>
        <YearNavigationList>
          {years.map((year) => (
            <YearNavigationItem key={year}>{year}</YearNavigationItem>
          ))}
        </YearNavigationList>
      </YearNavigation>

      {years.map((year) => (
        <ArticlesByYear key={year}>
          <ArticleYear>
            <ArticleYearText>{year}年のできごと</ArticleYearText>
          </ArticleYear>
          <ArticleListContainer>
            <ArticleList>
              {groupedArticle.map((group, index) => {
                return (
                  <ArticleListItem key={index}>
                    <ArticleGroup>{group}</ArticleGroup>
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

const Container = styled.div`
  width: 100%;
  background-color: ${Colors.UI_PAPER};
`;

type ArticleGroupProps = {
  children: (ArticleItemProps | undefined)[];
};

const ArticleGroup: React.FC<ArticleGroupProps> = ({ children }) => {
  const [
    article1,
    article2,
    article3,
    article4,
    article5,
    article6,
    article7,
    article8,
    article9,
    article10,
    article11,
  ] = children;
  return (
    <ArticleGroupContainer>
      <ArticleGroupRow>
        <ArticleGroupColumn>
          {article1 && <ArticleGroupItem>{article1}</ArticleGroupItem>}
        </ArticleGroupColumn>
      </ArticleGroupRow>
    </ArticleGroupContainer>
  );
};

const ArticleGroupContainer = styled.div``;

const ArticleGroupRow = styled.div`
  display: flex;
`;

const ArticleGroupColumn = styled.div`
  flex: 1;
`;

const ArticleGroupItem: React.FC<{ children: ArticleItemProps }> = ({ children }) => (
  <ArticleItem {...children} />
);

// const ArticleItemType = {};

// type ArticleItemType = ValueOf<typeof ArticleItemTYpe>;

type ArticleItemProps = {
  slug: string;
  title: string;
  mainVisualUrl: string;
  publishedAt: string;
  // type: 
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
        </ArticleThumbnailContainer>
        <ArticleTitleContainer>
          <ArticleTitle>{title}</ArticleTitle>
          <PublishDate>{formattedPublishedAt}</PublishDate>
        </ArticleTitleContainer>
      </ArticleLink>
    </ArticleItemContainer>
  );
};

const YearNavigation = styled.nav`
  position: fixed;
  top: 50%;
  left: ${Spacing.LARGE}px;
`;

const YearNavigationList = styled.ul``;

const YearNavigationItem = styled.li`
  font-size: ${TextSize.SMALL}rem;
  ${Typography.Mixin.DISPLAY};
  margin-bottom: ${Spacing.SMALL}px;

  &:last-child {
    margin-bottom: none;
  }
`;

const ArticleLink = styled(Link)`
  display: block;
  text-decoration: none;
  ${StyleMixin.HOVER_EFFECT.NORMAL};
`;

const ArticlesByYear = styled.div`
  margin-top: ${Spacing.XXX_LARGE}px;
  margin-bottom: ${Spacing.XXX_LARGE}px;
  ${StyleMixin.RESPONSIVE_OFFSET};
`;

const ArticleYear = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
`;

const ArticleYearText = styled.p`
  ${Typography.Mixin.DISPLAY};
  display: inline-block;
  padding-bottom: ${Spacing.NORMAL}px;
  border-bottom: solid 1px ${Colors.UI_LINE_NORMAL};
  font-size: ${TextSize.LARGE}rem;
  text-align: center;
`;

const ArticleListContainer = styled.div`
  width: 100%;
`;

// const ArticleList = styled.ul`
//   display: grid;
//   grid-gap: ${Spacing.XX_LARGE}px;
//   grid-template-columns: repeat(3, 1fr);
//   margin: 0 auto;
//   overflow: hidden;
// `;

const ArticleList = styled.div``;

// const ArticleListItem = styled.li`
//   margin-bottom: ${Spacing.XX_LARGE}px;
//   ${media.lessThan(ScreenType.MEDIUM)`
//     margin-bottom: ${Spacing.LARGE}px;
//   `}
// `;

const ArticleListItem = styled.div``;

const ArticleItemContainer = styled.article``;

const ArticleTitleContainer = styled.div`
  max-width: 400px;
  padding: ${Spacing.LARGE}px 0;
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

const ArticleThumbnailContainer = styled.div`
  width: 100%;
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

export default ArchiveModule;
