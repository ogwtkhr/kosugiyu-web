import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { AllMicrocmsArchiveQuery } from '@/types';
import styled from 'styled-components';
import { StyleMixin, TextSize, Typography, Colors, Spacing, ScreenType } from '@/constants';
import { CommonTitle, ArticleGroup, ArticleItemProps } from '@/components';
import { groupByIndex } from '@/util/array';
import media from 'styled-media-query';

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

  // TODO（実データを年ごとにグループする、lodash#groupBy?）
  const articles = [
    ...baseArticles,
    ...baseArticles,
    ...baseArticles,
    ...baseArticles,
    ...baseArticles,
    ...baseArticles,
  ];
  const years = ['2021', '2020', '2019'];

  const groupedArticle = groupByIndex(articles, 11);

  return (
    <Container>
      <CommonTitle title="できごと" imagePath="photos/archive/hero.jpg" />
      <YearNavigation>
        <YearNavigationList>
          {years.map((year, index) => (
            <>
              <YearNavigationItem key={year}>{year}</YearNavigationItem>
              {index < years.length - 1 && (
                <YearNavigationLineContainer>
                  <YearNavigationLine />
                </YearNavigationLineContainer>
              )}
            </>
          ))}
        </YearNavigationList>
      </YearNavigation>

      {years.map((year) => (
        <ArticlesByYear key={year}>
          <ArticleYear>
            <ArticleYearText>{year}年のできごと</ArticleYearText>
          </ArticleYear>
          <ArticleList>
            {groupedArticle.map((group, index) => {
              return <ArticleGroup key={index}>{group}</ArticleGroup>;
            })}
          </ArticleList>
        </ArticlesByYear>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background-color: ${Colors.UI_PAPER};
`;

// TODO: 色検討
const YearNavigation = styled.nav`
  position: fixed;
  top: 50%;
  left: ${Spacing.LARGE}px;
  mix-blend-mode: difference;

  ${media.lessThan(ScreenType.MEDIUM)`
    left: auto;
    right: ${Spacing.LARGE}px;
  `}
`;

const YearNavigationList = styled.ul``;

const YearNavigationItem = styled.li`
  margin-bottom: ${Spacing.SMALL}px;
  ${Typography.Mixin.DISPLAY};
  color: ${Colors.UI_TEXT_DARK_BACKGROUND};
  font-size: ${TextSize.SMALL}rem;

  &:last-child {
    margin-bottom: none;
  }
`;

const YearNavigationLineContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const YearNavigationLine = styled.div`
  width: 1px;
  height: ${Spacing.LARGE}px;
  background-color: ${Colors.UI_LINE_WEAKEN};
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

const ArticleList = styled.div`
  width: 100%;
`;

export default ArchiveModule;
