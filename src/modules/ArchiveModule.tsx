import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { AllMicrocmsArchiveQuery } from '@/types';
import styled from 'styled-components';
import { StyleMixin, TextSize, TypographyMixin, Colors, Spacing, ScreenType } from '@/constants';
import { CommonTitle, ArchiveArticleGroup, ArchiveArticleItemProps } from '@/components';
import { groupByIndex } from '@/util/array';
import media from 'styled-media-query';
import { orderBy, groupBy } from 'lodash';
import dayjs from 'dayjs';

export const ArchiveModule: React.FC = () => {
  const data = useStaticQuery<AllMicrocmsArchiveQuery>(graphql`
    query allMicrocmsArchive {
      allMicrocmsArchive(sort: { fields: [createdAt], order: DESC }) {
        nodes {
          id
          title
          slug
          publishedAt
          publishDate
          mainVisual {
            url
          }
        }
      }
    }
  `);

  const baseArticles: ArchiveArticleItemProps[] = orderBy(
    data.allMicrocmsArchive.nodes.map((entry) => {
      const slug = entry.slug || '';
      const title = entry.title || '';
      const mainVisualUrl = entry?.mainVisual?.url || '';
      const publishDate = entry?.publishDate || entry?.publishedAt || '';
      return {
        slug,
        title,
        mainVisualUrl,
        publishDate,
      };
    }),
    'publishDate',
    'desc',
  );

  const yearGroupedList = groupBy(baseArticles, (item) => dayjs(item.publishDate).get('year'));
  const years = Object.keys(yearGroupedList).sort().reverse();

  return (
    <Container>
      <CommonTitle title="できごと" imagePath="photos/archive/hero.jpg" />

      {years.length > 1 && (
        <YearNavigation>
          <YearNavigationList>
            {years.map((year, index) => (
              <div key={year}>
                <YearNavigationItem key={year}>{year}</YearNavigationItem>
                {index < years.length - 1 && (
                  <YearNavigationLineContainer>
                    <YearNavigationLine />
                  </YearNavigationLineContainer>
                )}
              </div>
            ))}
          </YearNavigationList>
        </YearNavigation>
      )}

      {years.map((year) => {
        const yearGroupedItem = yearGroupedList[year];
        const groupedArticle = groupByIndex(yearGroupedItem, 11);
        return (
          <ArticlesByYear key={year}>
            <ArticleYear>
              <ArticleYearText>{year}年のできごと</ArticleYearText>
            </ArticleYear>
            <ArticleList>
              {groupedArticle.map((group, index) => {
                return <ArchiveArticleGroup key={index}>{group}</ArchiveArticleGroup>;
              })}
            </ArticleList>
          </ArticlesByYear>
        );
      })}
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
    display: none;
  `}
`;

const YearNavigationList = styled.ul``;

const YearNavigationItem = styled.li`
  margin-bottom: ${Spacing.SMALL}px;
  ${TypographyMixin.DISPLAY};
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

const ArticlesByYear = styled.section`
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
  ${TypographyMixin.DISPLAY};
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
