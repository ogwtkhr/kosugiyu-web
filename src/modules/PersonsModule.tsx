import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { AllMicrocmsPersonsQuery } from '@/types';
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
} from '@/constants';
import dayjs from 'dayjs';
import media from 'styled-media-query';
// import media from 'styled-media-query';

type PersonsModuleProps = {
  useTitle?: boolean;
};

export const PersonsModule: React.FC<PersonsModuleProps> = ({ useTitle }) => {
  const data = useStaticQuery<AllMicrocmsPersonsQuery>(graphql`
    query allMicrocmsPersons {
      allMicrocmsPersons(sort: { fields: [createdAt], order: DESC }) {
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
      {useTitle && <h2>小杉湯と人</h2>}
      <ArticleList>
        {data.allMicrocmsPersons.nodes.map((entry) => {
          const slug = entry.slug || '';
          const title = entry.title || '';
          const mainVisualUrl = entry?.mainVisual?.url || '';
          const publishedAt = entry?.publishedAt || '';
          const formattedPublishedAt = dayjs(publishedAt).format('YYYY年M月D日');

          return (
            <ArticleListItem key={slug}>
              <ArticleItem>
                <ArticleLink to={`/persons/${slug}`}>
                  <ArticleThumbnailContainer>
                    <ArticleThumbnail src={mainVisualUrl} />
                    <ArticleTitleContainer>
                      {formattedPublishedAt}
                      <ArticleTitle>{title}</ArticleTitle>
                    </ArticleTitleContainer>
                  </ArticleThumbnailContainer>
                </ArticleLink>
              </ArticleItem>
            </ArticleListItem>
          );
        })}
      </ArticleList>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background-color: ${Colors.UI_PAPER};
`;

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

  ${media.lessThan(ScreenType.MEDIUM)`
    margin-bottom: ${BigSpacing.LARGE}px;
  `}
`;

const ArticleItem = styled.article`
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

export default PersonsModule;
