import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { AllMicrocmsPersonsQuery } from '@/types';
import styled from 'styled-components';
import {
  StyleMixin,
  Typography,
  TextSize,
  Colors,
  Spacing,
  BigSpacing,
  ModuleWidth,
  ScreenType,
} from '@/constants';
import { PersonItem, TopPersonItem } from '@/components';
import media from 'styled-media-query';

import headingImage from '@/images/photos/persons/persons_heading.jpg';

type PersonsModuleProps = {
  useTitle?: boolean;
  enableTopEmphasis?: boolean;
};

export const PersonsModule: React.FC<PersonsModuleProps> = ({ useTitle, enableTopEmphasis }) => {
  const data = useStaticQuery<AllMicrocmsPersonsQuery>(graphql`
    query allMicrocmsPersons {
      allMicrocmsPersons {
        nodes {
          id
          position
          title
          name
          slug
          mainVisual {
            url
          }
        }
      }
    }
  `);

  const [topPerson, ...persons] = data.allMicrocmsPersons.nodes;

  const topPersonSlug = topPerson?.slug || '';
  const topPersonPosition = topPerson?.position || '';
  const topPersonName = topPerson?.name || '';
  const topPersonTitle = topPerson?.title || '';
  const topPersonMainVisualUrl = topPerson?.mainVisual?.url || '';

  return (
    <Container>
      {useTitle && (
        <PersonsHeading>
          <PersonsHeadingMain>
            <PersonsHeadingTitle>
              <PersonsHeadingTitleSub>日常の中の非日常を届ける</PersonsHeadingTitleSub>
              <PersonsHeadingTitleMain>ケノ日のハレ</PersonsHeadingTitleMain>
            </PersonsHeadingTitle>
            <PersonsHeadingBodyCopy>
              親譲りの無鉄砲で小供の時から損ばかりして居る。小学校に居る時分学校の二階から飛び降りて一週間程腰を抜かした事がある。なぜそんな無闇(むやみ)をしたと聞く人があるかも知れぬ。別段深い理由でもない。
            </PersonsHeadingBodyCopy>
          </PersonsHeadingMain>
          <PersonsHeadingImage src={headingImage} />
        </PersonsHeading>
      )}

      <TopPersonContainer>
        <PersonLink to={`/persons/${topPersonSlug}`}>
          <TopPersonItem
            position={topPersonPosition}
            name={topPersonName}
            title={topPersonTitle}
            mainVisualUrl={topPersonMainVisualUrl}
          />
        </PersonLink>
      </TopPersonContainer>
      <PersonListContainer>
        <PersonList>
          {persons.map((person) => {
            const slug = person.slug || '';
            const position = person.position || '';
            const name = person.name || '';
            const mainVisualUrl = person?.mainVisual?.url || '';
            return (
              <PersonListItem key={person.slug}>
                <PersonLink to={`/persons/${slug}`}>
                  <PersonItem
                    slug={slug}
                    position={position}
                    name={name}
                    mainVisualUrl={mainVisualUrl}
                  />
                </PersonLink>
              </PersonListItem>
            );
          })}
        </PersonList>
      </PersonListContainer>
    </Container>
  );
};

const PersonsHeading = styled.div`
  display: flex;
  height: 600px;
`;

const PersonsHeadingImage = styled.div`
  flex: 1;
  ${StyleMixin.BACKGROUND_IMAGE_WITH_SRC};
`;

const PersonsHeadingMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30%;
  padding: 0 ${Spacing.XX_LARGE}px;
`;

const PersonsHeadingTitle = styled.div`
  display: flex;
`;

const PersonsHeadingTitleMain = styled.h1`
  ${Typography.Mixin.DISPLAY};
  ${Typography.Mixin.VERTICAL_WRITING};
  font-size: ${TextSize.X_LARGE}rem;
`;

const PersonsHeadingTitleSub = styled.p`
  ${Typography.Mixin.DISPLAY};
  ${Typography.Mixin.VERTICAL_WRITING};
  margin-top: ${Spacing.XX_LARGE}px;
  font-size: ${TextSize.X_SMALL}rem;
`;

const PersonsHeadingBodyCopy = styled.p`
  ${Typography.Mixin.DISPLAY};
  font-size: ${TextSize.SMALL}rem;
`;

const Container = styled.div`
  width: 100%;
  background-color: ${Colors.UI_PAPER};
`;

const PersonLink = styled(Link)`
  display: block;
  text-decoration: none;
  ${StyleMixin.HOVER_EFFECT.NORMAL};
`;

const TopPersonContainer = styled.div`
  margin: ${BigSpacing.LARGE}px auto;
`;

const PersonListContainer = styled.div`
  margin: ${BigSpacing.LARGE}px auto;
  max-width: ${ModuleWidth.MIDDLE}px;
`;

const PersonList = styled.ul`
  display: grid;
  grid-gap: ${BigSpacing.XX_SMALL}px;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
  overflow: hidden;

  ${media.lessThan(ScreenType.MEDIUM)`
    /* grid-template-columns: repeat(2, 1fr); */
  `}
`;

const PersonListItem = styled.li``;

export default PersonsModule;
