import React, { useMemo } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { AllMicrocmsPersonsQuery } from '@/types';
import styled from 'styled-components';
import {
  StyleMixin,
  AspectRatio,
  TextSize,
  TextWeight,
  LineHeight,
  LetterSpacing,
  Colors,
  Spacing,
  BigSpacing,
  ScreenType,
} from '@/constants';
import { ArrowIcon } from '@/components';
import dayjs from 'dayjs';
import media from 'styled-media-query';

import headingImage from '@/images/photos/persons/persons_heading.jpg';

type PersonsModuleProps = {
  useTitle?: boolean;
};

export const PersonsModule: React.FC<PersonsModuleProps> = ({ useTitle }) => {
  const data = useStaticQuery<AllMicrocmsPersonsQuery>(graphql`
    query allMicrocmsPersons {
      allMicrocmsPersons {
        nodes {
          id
          position
          name
          slug
          mainVisual {
            url
          }
        }
      }
    }
  `);

  return (
    <Container>
      {useTitle && <PersonsHeading src={headingImage}></PersonsHeading>}
      <ArticleListContainer>
        <ArticleList>
          {data.allMicrocmsPersons.nodes.map((entry) => {
            const slug = entry.slug || '';
            const position = entry.position || '';
            const name = entry.name || '';
            const mainVisualUrl = entry?.mainVisual?.url || '';
            return (
              <ArticleListItem key={entry.slug}>
                <ArticleItem
                  slug={slug}
                  position={position}
                  name={name}
                  mainVisualUrl={mainVisualUrl}
                />
              </ArticleListItem>
            );
          })}
        </ArticleList>
      </ArticleListContainer>
    </Container>
  );
};

const PersonsHeading = styled.div`
  width: 100%;
  ${StyleMixin.BACKGROUND_IMAGE_WITH_SRC};
  margin-bottom: ${Spacing.XX_LARGE}px;
  padding: ${Spacing.XX_LARGE}px;

  ${media.lessThan(ScreenType.MEDIUM)`
    padding: ${Spacing.LARGE}px auto;
  `}
`;

const Container = styled.div`
  width: 100%;
  background-color: ${Colors.UI_PAPER};
`;

type ArticleItemProps = {
  slug: string;
  position: string;
  name: string;
  mainVisualUrl: string;
};

const ArticleItem: React.FC<ArticleItemProps> = ({ slug, position, name, mainVisualUrl }) => {
  // const formattedPublishedAt = useMemo(
  //   () => dayjs(publishedAt).format(DateFormat.YEAR_MONTH_DATE_JP),
  //   [publishedAt],
  // );

  return (
    <ArticleLink to={`/persons/${slug}`}>
      <ArticleThumbnailContainer>
        <ArticleThumbnail src={mainVisualUrl} />
        <PersonInfo>
          <PersonPosition>{position}</PersonPosition>
          <PersonNameContainer>
            <PersonName>{name}</PersonName>
            <PersonIconContainer>
              <ArrowIcon />
            </PersonIconContainer>
          </PersonNameContainer>
        </PersonInfo>
      </ArticleThumbnailContainer>
    </ArticleLink>
  );
};

const ArticleLink = styled(Link)`
  text-decoration: none;
`;

const ArticleListContainer = styled.div`
  margin: ${Spacing.LARGE}px auto;
  max-width: 900px;
`;

const ArticleList = styled.ul`
  display: grid;
  grid-gap: ${BigSpacing.XX_SMALL}px;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
  overflow: hidden;

  ${media.lessThan(ScreenType.MEDIUM)`
    /* grid-template-columns: repeat(2, 1fr); */
  `}
`;

const ArticleListItem = styled.li``;

const PersonInfo = styled.div`
  margin-top: ${Spacing.NORMAL}px;
`;

const PersonPosition = styled.p`
  color: ${Colors.UI_BASE};
  font-size: ${TextSize.X_SMALL}rem;
  font-weight: ${TextWeight.MEDIUM};
  letter-spacing: ${LetterSpacing.WIDE}em;
`;

const PersonNameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PersonName = styled.h3`
  color: ${Colors.ABSTRACT_BLACK};
  font-size: ${TextSize.LARGE}rem;
  font-weight: ${TextWeight.BOLD};
  line-height: ${LineHeight.NORMAL};
  text-decoration: none;
  letter-spacing: ${LetterSpacing.WIDE}em;

  /* ${media.lessThan(ScreenType.MEDIUM)`
    font-size: ${TextSize.NORMAL}rem;
  `} */
`;

const PersonIconContainer = styled.div`
  width: ${Spacing.XX_LARGE}px;
`;

const ArticleThumbnailContainer = styled.div``;

const ArticleThumbnail = styled.div`
  width: 100%;
  ${StyleMixin.BACKGROUND_IMAGE_WITH_SRC}

  &::after {
    content: '';
    display: block;
    padding-bottom: ${AspectRatio.SILVER_VERTICAL}%;
  }

  ${media.lessThan(ScreenType.MEDIUM)`
    width: auto;
    position: static;
  `}
`;

export default PersonsModule;
