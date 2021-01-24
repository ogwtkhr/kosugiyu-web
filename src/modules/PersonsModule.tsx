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
  ModuleHeight,
} from '@/constants';
import { PersonItem, TopPersonItem, Picture, Button, ButtonContainer } from '@/components';
import media from 'styled-media-query';
import { ReverseParallax, ParallaxBasePosition } from '@/effects';

type PersonsModuleProps = {
  useTitle?: boolean;
  summaryMode?: boolean;
  enableTopEmphasis?: boolean;
  withVerticalMargin?: boolean;
};

export const PersonsModule: React.FC<PersonsModuleProps> = ({
  useTitle,
  summaryMode,
  enableTopEmphasis = true,
  withVerticalMargin,
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
    <>
      {useTitle && (
        <PersonsHeadingContainer>
          <PersonsHeadingInner>
            <PersonsHeadingMain>
              <HeadingTitle />
              <PersonsHeadingBodyCopyLargeScreen>
                親譲りの無鉄砲で小供の時から損ばかりして居る。小学校に居る時分学校の二階から飛び降りて一週間程腰を抜かした事がある。なぜそんな無闇(むやみ)をしたと聞く人があるかも知れぬ。別段深い理由でもない。
              </PersonsHeadingBodyCopyLargeScreen>
            </PersonsHeadingMain>
            <PersonsHeadingImage>
              <ReverseParallax zoom={1.2} zoomSmall={1.7} basePosition={ParallaxBasePosition.TOP}>
                <Picture relativePath="photos/persons/hero.jpg" />
              </ReverseParallax>
            </PersonsHeadingImage>
          </PersonsHeadingInner>
          <PersonsHeadingBodyCopySmallScreen>
            親譲りの無鉄砲で小供の時から損ばかりして居る。小学校に居る時分学校の二階から飛び降りて一週間程腰を抜かした事がある。なぜそんな無闇(むやみ)をしたと聞く人があるかも知れぬ。別段深い理由でもない。
          </PersonsHeadingBodyCopySmallScreen>
        </PersonsHeadingContainer>
      )}
      <Container withVerticalMargin={withVerticalMargin}>
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
          {summaryMode && (
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
        <ButtonContainer>
          <Button to="/persons">さらに読む</Button>
        </ButtonContainer>
      </Container>
    </>
  );
};

const HeadingTitle: React.FC = () => (
  <PersonsHeadingTitle>
    <PersonsHeadingTitleSub>日常の中の非日常を届ける</PersonsHeadingTitleSub>
    <PersonsHeadingTitleMain>ケノ日のハレ</PersonsHeadingTitleMain>
  </PersonsHeadingTitle>
);

const Container = styled.div<Pick<PersonsModuleProps, 'withVerticalMargin'>>`
  max-width: ${ModuleWidth.MIDDLE}px;
  margin: ${({ withVerticalMargin }) => `${withVerticalMargin ? BigSpacing.LARGE : 0}px auto`};
`;

const PersonsHeadingContainer = styled.div``;

const PersonsHeadingInner = styled.div`
  display: flex;
  max-width: ${ModuleWidth.WIDE}px;
  height: ${ModuleHeight.HERO_NORMAL_SCREEN}px;
  margin: 0 auto;
  ${media.lessThan(ScreenType.MEDIUM)`
    height: 300px;
  `}
`;

const PersonsHeadingImage = styled.div`
  flex: 1;
  overflow: hidden;
`;

const PersonsHeadingMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30%;
  padding: 0 ${Spacing.XX_LARGE}px;
  ${media.lessThan(ScreenType.MEDIUM)`
    padding: 0;
  `}
`;

const PersonsHeadingSubTitle = styled.div`
  margin-right: ${BigSpacing.SMALL}px;
`;

const PersonsHeadingTitle = styled.div`
  display: flex;
  ${media.lessThan(ScreenType.MEDIUM)`
    margin: 0 auto;
  `}
`;

const PersonsHeadingTitleMain = styled.h1`
  ${Typography.Mixin.DISPLAY};
  ${Typography.Mixin.VERTICAL_WRITING};
  font-size: ${TextSize.XXX_LARGE}rem;
`;

const PersonsHeadingTitleSub = styled.p`
  ${Typography.Mixin.DISPLAY};
  ${Typography.Mixin.VERTICAL_WRITING};
  margin-top: ${Spacing.XX_LARGE}px;
  font-size: ${TextSize.X_SMALL}rem;
`;

const PersonsHeadingBodyCopyLargeScreen = styled.p`
  ${Typography.Mixin.DISPLAY};
  font-size: ${TextSize.SMALL}rem;
  ${media.lessThan(ScreenType.MEDIUM)`
    display: none;
  `}
`;

const PersonsHeadingBodyCopySmallScreen = styled.p`
  margin: ${Spacing.LARGE}px;
  ${Typography.Mixin.DISPLAY};
  font-size: ${TextSize.X_SMALL}rem;
  ${media.greaterThan(ScreenType.MEDIUM)`
    display: none;
  `}
`;

const PersonLink = styled(Link)`
  display: block;
  text-decoration: none;
  ${StyleMixin.HOVER_EFFECT.NORMAL};
`;

const TopPersonContainer = styled.div`
  margin: ${BigSpacing.LARGE}px auto;
  ${media.lessThan(ScreenType.MEDIUM)`
    margin: ${Spacing.XX_LARGE}px 0;
  `}
`;

const PersonListContainer = styled.div`
  display: flex;

  ${media.lessThan(ScreenType.MEDIUM)`
    display: block;
    margin: ${Spacing.XX_LARGE}px auto;
  `}
`;

const PersonList = styled.ul`
  display: grid;
  grid-gap: ${BigSpacing.XX_SMALL}px;
  grid-template-columns: repeat(3, 1fr);
  flex: 1;
  margin: 0 auto;
  overflow: hidden;

  ${media.lessThan(ScreenType.MEDIUM)`
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${Spacing.LARGE}px ${Spacing.XX_LARGE}px;
    margin-left: ${Spacing.LARGE}px;
    margin-right: ${Spacing.LARGE}px;
  `}
`;

const PersonListItem = styled.li``;

export default PersonsModule;
