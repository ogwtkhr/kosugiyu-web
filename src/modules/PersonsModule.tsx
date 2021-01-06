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
import { PersonItem, TopPersonItem, Picture } from '@/components';
import media from 'styled-media-query';

type PersonsModuleProps = {
  useTitle?: boolean;
  useSideTitle?: boolean;
  enableTopEmphasis?: boolean;
};

export const PersonsModule: React.FC<PersonsModuleProps> = ({
  useTitle,
  useSideTitle,
  enableTopEmphasis = true,
}) => {
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

  const basePersons = data.allMicrocmsPersons.nodes;
  const [topPerson, ...restPersons] = basePersons;
  const persons = enableTopEmphasis ? restPersons : basePersons;

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
            <HeadingTitle />
            <PersonsHeadingBodyCopy>
              親譲りの無鉄砲で小供の時から損ばかりして居る。小学校に居る時分学校の二階から飛び降りて一週間程腰を抜かした事がある。なぜそんな無闇(むやみ)をしたと聞く人があるかも知れぬ。別段深い理由でもない。
            </PersonsHeadingBodyCopy>
          </PersonsHeadingMain>
          <PersonsHeadingImage>
            <Picture relativePath="photos/persons/persons_heading.jpg" />
          </PersonsHeadingImage>
        </PersonsHeading>
      )}

      {enableTopEmphasis && (
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
      )}

      <PersonListContainer>
        {useSideTitle && (
          <PersonsHeadingSubTitle>
            <HeadingTitle />
          </PersonsHeadingSubTitle>
        )}
        <PersonList>
          {persons.map((person) => {
            const slug = person.slug || '';
            const position = person.position || '';
            const name = person.name || '';
            const mainVisualUrl = person?.mainVisual?.url || '';
            return (
              <PersonListItem key={person.slug}>
                <PersonLink to={`/persons/${slug}`}>
                  <PersonItem position={position} name={name} mainVisualUrl={mainVisualUrl} />
                </PersonLink>
              </PersonListItem>
            );
          })}
        </PersonList>
      </PersonListContainer>
    </Container>
  );
};

const HeadingTitle: React.FC = () => (
  <PersonsHeadingTitle>
    <PersonsHeadingTitleSub>日常の中の非日常を届ける</PersonsHeadingTitleSub>
    <PersonsHeadingTitleMain>ケノ日のハレ</PersonsHeadingTitleMain>
  </PersonsHeadingTitle>
);

const PersonsHeading = styled.div`
  display: flex;
  height: 600px;
`;

const PersonsHeadingImage = styled.div`
  flex: 1;
`;

const PersonsHeadingMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30%;
  padding: 0 ${Spacing.XX_LARGE}px;
`;

const PersonsHeadingSubTitle = styled.div`
  margin-right: ${BigSpacing.SMALL}px;
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
  display: flex;
  max-width: ${ModuleWidth.MIDDLE}px;
  margin: ${BigSpacing.LARGE}px auto;
`;

const PersonList = styled.ul`
  display: grid;
  grid-gap: ${BigSpacing.XX_SMALL}px;
  grid-template-columns: repeat(3, 1fr);
  flex: 1;
  margin: 0 auto;
  overflow: hidden;

  ${media.lessThan(ScreenType.MEDIUM)`
    /* grid-template-columns: repeat(2, 1fr); */
  `}
`;

const PersonListItem = styled.li``;

export default PersonsModule;
