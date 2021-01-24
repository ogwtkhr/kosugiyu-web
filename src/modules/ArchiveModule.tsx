import React, { useMemo } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { AllMicrocmsArchiveQuery, ValueOf } from '@/types';
import styled, { css } from 'styled-components';
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

const GUTTER_NORMAL = Spacing.XX_LARGE;
const GUTTER_SMALL = Spacing.LARGE;

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

  const groupedArticle = groupByIndex(articles, 11);

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
  if (!article1) return <div />;
  console.log(children);
  return (
    <ArticleGroupContainer>
      <ArticleSubGroupType1 list={[article1, article2, article3]} />
      {article4 && (
        <>
          {article5 && article6 ? (
            <ArticleSubGroupType2 list={[article4, article5, article6]} />
          ) : (
            <ArticleSubGroupType1 list={[article4, article5, article6]} />
          )}
        </>
      )}
      {article7 && (
        <>
          {article7 && article8 && article9 && article10 ? (
            <ArticleSubGroupType3 list={[article7, article8, article9, article10, article11]} />
          ) : (
            <ArticleSubGroupType1 list={[article7, article8, article9]} />
          )}
        </>
      )}
    </ArticleGroupContainer>
  );
};

type MaybeArticleItemProps = ArticleItemProps | undefined;

// 1〜3用
type ArticleSubGroupType1Props = {
  list: [ArticleItemProps, MaybeArticleItemProps, MaybeArticleItemProps];
};
const ArticleSubGroupType1: React.FC<ArticleSubGroupType1Props> = ({ list }) => {
  const [first, second, third] = list;
  return (
    <ArticleGroupGrid columns={2} collapseOnSmallScreen>
      {first && (
        <ArticleGroupGridItem columnStart={1} columnEnd={2} rowStart={1} rowEnd={2}>
          <ArticleGroupItem>{first}</ArticleGroupItem>
        </ArticleGroupGridItem>
      )}
      <ArticleGroupGridItem columnStart={2} columnEnd={3} rowStart={1} rowEnd={2}>
        {second && <ArticleGroupItem type={ArticleItemType.HORIZONTAL}>{second}</ArticleGroupItem>}
        {third && <ArticleGroupItem type={ArticleItemType.HORIZONTAL}>{third}</ArticleGroupItem>}
      </ArticleGroupGridItem>
    </ArticleGroupGrid>
  );
};

// 3つ並列
type ArticleSubGroupType2Props = {
  list: [ArticleItemProps, ArticleItemProps, ArticleItemProps];
};
const ArticleSubGroupType2: React.FC<ArticleSubGroupType2Props> = ({ list }) => {
  const [first, second, third] = list;
  return (
    <ArticleGroupGrid columns={3} collapseOnSmallScreen>
      <ArticleGroupGridItem columnStart={1} columnEnd={2} rowStart={1} rowEnd={2}>
        <ArticleGroupItem>{first}</ArticleGroupItem>
      </ArticleGroupGridItem>
      <ArticleGroupGridItem columnStart={2} columnEnd={3} rowStart={1} rowEnd={2}>
        <ArticleGroupItem>{second}</ArticleGroupItem>
      </ArticleGroupGridItem>
      <ArticleGroupGridItem columnStart={3} columnEnd={4} rowStart={1} rowEnd={2}>
        <ArticleGroupItem>{third}</ArticleGroupItem>
      </ArticleGroupGridItem>
    </ArticleGroupGrid>
  );
};

// 4〜5用
type ArticleSubGroupType3Props = {
  list: [
    ArticleItemProps,
    ArticleItemProps,
    ArticleItemProps,
    ArticleItemProps,
    MaybeArticleItemProps,
  ];
};
const ArticleSubGroupType3: React.FC<ArticleSubGroupType3Props> = ({ list }) => {
  const [first, second, third, fourth, fifth] = list;
  return (
    <ArticleGroupGrid columns={fifth ? 2 : 1} collapseOnSmallScreen>
      <ArticleGroupGridItem columnStart={1} columnEnd={2} rowStart={1} rowEnd={2}>
        <ArticleGroupGrid columns={2}>
          <ArticleGroupGridItem columnStart={1} columnEnd={2} rowStart={1} rowEnd={2}>
            <ArticleGroupItem>{first}</ArticleGroupItem>
          </ArticleGroupGridItem>
          <ArticleGroupGridItem columnStart={2} columnEnd={3} rowStart={1} rowEnd={2}>
            <ArticleGroupItem>{second}</ArticleGroupItem>
          </ArticleGroupGridItem>
          <ArticleGroupGridItem columnStart={1} columnEnd={2} rowStart={2} rowEnd={3}>
            <ArticleGroupItem>{third}</ArticleGroupItem>
          </ArticleGroupGridItem>
          <ArticleGroupGridItem columnStart={2} columnEnd={3} rowStart={2} rowEnd={3}>
            <ArticleGroupItem>{fourth}</ArticleGroupItem>
          </ArticleGroupGridItem>
        </ArticleGroupGrid>
      </ArticleGroupGridItem>
      {fifth && (
        <ArticleGroupGridItem columnStart={2} columnEnd={3} rowStart={1} rowEnd={2}>
          <ArticleGroupItem>{fifth}</ArticleGroupItem>
        </ArticleGroupGridItem>
      )}
    </ArticleGroupGrid>
  );
};

const verticalGutterFragment = css`
  & + & {
    margin-top: ${GUTTER_NORMAL}px;
    ${media.lessThan(ScreenType.MEDIUM)`
      margin-top: ${GUTTER_SMALL}px;
    `}
  }
`;

const ArticleGroupContainer = styled.div`
  ${verticalGutterFragment};
`;

type ArticleGroupGridProps = {
  columns: number;
  collapseOnSmallScreen?: boolean;
};

const ArticleGroupGrid = styled.div<ArticleGroupGridProps>`
  display: grid;
  grid-column-gap: ${GUTTER_NORMAL}px;
  grid-row-gap: ${GUTTER_NORMAL}px;
  grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr);`};
  ${media.lessThan(ScreenType.MEDIUM)`
    grid-column-gap: ${GUTTER_SMALL}px;
    grid-row-gap: ${GUTTER_SMALL}px;
  `}
  ${verticalGutterFragment};

  ${({ collapseOnSmallScreen }) =>
    collapseOnSmallScreen
      ? css`
          ${media.lessThan(ScreenType.MEDIUM)`
            display: block;
          `}
        `
      : ''}
`;

type ArticleGroupGridItemProps = {
  rowStart: number;
  rowEnd: number;
  columnStart: number;
  columnEnd: number;
};

const ArticleGroupGridItem = styled.div<ArticleGroupGridItemProps>`
  ${({ rowStart, rowEnd, columnStart, columnEnd }) => css`
    grid-row: ${rowStart} / ${rowEnd};
    grid-column: ${columnStart} / ${columnEnd};
  `}
`;

type ArticleGroupItemProps = { type?: ArticleItemType; children: ArticleItemProps };

const ArticleGroupItem: React.FC<ArticleGroupItemProps> = ({ type, children }) => (
  <ArticleGroupItemContainer>
    <ArticleItem type={type} {...children} />
  </ArticleGroupItemContainer>
);

const ArticleGroupItemContainer = styled.div`
  ${verticalGutterFragment};
`;

const ArticleItemType = {
  VERTICAL: 'vertical',
  HORIZONTAL: 'horizontal',
} as const;

type ArticleItemType = ValueOf<typeof ArticleItemType>;

type ArticleItemProps = {
  slug: string;
  title: string;
  mainVisualUrl: string;
  publishedAt: string;
  type?: ArticleItemType;
};

const ArticleItem: React.FC<ArticleItemProps> = ({
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

const YearNavigation = styled.nav`
  position: fixed;
  top: 50%;
  left: ${Spacing.LARGE}px;
  mix-blend-mode: difference;
`;

const YearNavigationList = styled.ul``;

const YearNavigationItem = styled.li`
  font-size: ${TextSize.SMALL}rem;
  ${Typography.Mixin.DISPLAY};
  margin-bottom: ${Spacing.SMALL}px;
  color: ${Colors.UI_TEXT_DARK_BACKGROUND};

  &:last-child {
    margin-bottom: none;
  }
`;

type ArticleItemChildProps = Pick<ArticleItemProps, 'type'>;

const ArticleLink = styled(Link)<ArticleItemChildProps>`
  display: ${({ type }) => (type === ArticleItemType.VERTICAL ? 'block' : 'flex')};
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

const ArticleList = styled.div`
  width: 100%;
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

export default ArchiveModule;
