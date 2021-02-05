import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { AllMicrocmsPersonsQuery } from '@/types';
import styled, { css } from 'styled-components';
import {
  StyleMixin,
  TypographyMixin,
  TextSize,
  Spacing,
  BigSpacing,
  ModuleWidth,
  ScreenType,
  ModuleHeight,
  Colors,
} from '@/constants';
import {
  PersonItem,
  TopPersonItem,
  Picture,
  Button,
  ButtonContainer,
  MediaLogo,
  MediaTagLine,
} from '@/components';
import media from 'styled-media-query';
import { ReverseParallax, ParallaxBasePosition, IntersectionFadeIn } from '@/effects';

type PersonsModuleProps = {
  useTitle?: boolean;
  summaryMode?: boolean;
  summaryMax?: number;
  enableTopEmphasis?: boolean;
  withVerticalMargin?: boolean;
};

export const PersonsModule: React.FC<PersonsModuleProps> = ({
  useTitle,
  summaryMode,
  summaryMax = 3,
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
          isComingSoon
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
  const summarizedPersons = summaryMode ? persons.slice(0, summaryMax) : persons;

  const topPersonSlug = topPerson?.slug || '';
  const topPersonPosition = topPerson?.position || '';
  const topPersonName = topPerson?.name || '';
  const topPersonTitle = topPerson?.title || '';
  const topPersonMainVisualUrl = topPerson?.mainVisual?.url || '';
  const isSummaryView = summaryMode && persons.length > summaryMax;

  return (
    <>
      {useTitle && (
        <PersonsHeadingContainer>
          <PersonsHeadingInner>
            <PersonsHeadingLogoArea>
              <PersonsHeadingLogo>
                <MediaLogo />
              </PersonsHeadingLogo>
              <PersonsHeadingTagLine>
                <MediaTagLine />
              </PersonsHeadingTagLine>
            </PersonsHeadingLogoArea>
            <PersonsHeadingImage>
              <ReverseParallax
                zoom={1.1}
                zoomSmall={1.7}
                basePosition={ParallaxBasePosition.TOP}
                fillLayout
              >
                <Picture relativePath="photos/persons/hero.jpg" />
              </ReverseParallax>
            </PersonsHeadingImage>
          </PersonsHeadingInner>
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
          <PersonList under2={summarizedPersons.length <= 2}>
            {summarizedPersons.map((person) => {
              const slug = person.slug || '';
              const position = person.position || '';
              const name = person.name || '';
              const mainVisualUrl = person?.mainVisual?.url || '';
              const isComingSoon = person.isComingSoon;
              return (
                <PersonListItem key={person.slug}>
                  {!isComingSoon ? (
                    <PersonLink to={`/persons/${slug}`}>
                      <PersonItem position={position} name={name} mainVisualUrl={mainVisualUrl} />
                    </PersonLink>
                  ) : (
                    <PersonItem
                      position={position}
                      name={name}
                      mainVisualUrl={mainVisualUrl}
                      isComingSoon={isComingSoon}
                    />
                  )}
                </PersonListItem>
              );
            })}
          </PersonList>
        </PersonListContainer>
        {isSummaryView && (
          <ButtonContainer>
            <Button to="/persons">さらに読む</Button>
          </ButtonContainer>
        )}
      </Container>
    </>
  );
};

const HeadingTitle: React.FC = () => (
  <IntersectionFadeIn>
    <PersonsHeadingTitle>
      <PersonsHeadingTitleSub>日常の中の非日常を届ける</PersonsHeadingTitleSub>
      <PersonsHeadingTitleMain>ケノ日のハレ</PersonsHeadingTitleMain>
    </PersonsHeadingTitle>
  </IntersectionFadeIn>
);

const Container = styled.div<Pick<PersonsModuleProps, 'withVerticalMargin'>>`
  max-width: ${ModuleWidth.MIDDLE}px;
  margin: ${({ withVerticalMargin }) =>
    `${withVerticalMargin ? BigSpacing.LARGE : 0}px auto ${BigSpacing.NORMAL}px`};

  ${media.lessThan(ScreenType.MEDIUM)`
    margin: ${Spacing.LARGE}px auto;
  `}
`;

const PersonsHeadingContainer = styled.div``;

const PersonsHeadingInner = styled.div`
  display: flex;
  position: relative;
  max-width: ${ModuleWidth.WIDE}px;
  height: ${ModuleHeight.HERO_NORMAL_SCREEN}px;
  margin: 0 auto;
  ${media.lessThan(ScreenType.MEDIUM)`
    height: 388px;
  `}
`;

const PersonsHeadingLogoArea = styled.div`
  position: relative;
  z-index: 1;
  width: 40%;
  ${media.lessThan(ScreenType.MEDIUM)`
    width: 25%;
  `}
`;

const PersonsHeadingLogo = styled.div`
  position: absolute;
  top: 138px;
  right: -135px;
  width: 447px;
  height: 227px;

  ${media.lessThan(ScreenType.MEDIUM)`
    top: 22px;
    right: -178px;
    width: 250px;
    height: 127px;
  `}
`;

const PersonsHeadingTagLine = styled.div`
  position: absolute;
  top: 337px;
  right: 251px;
  width: 168px;
  height: 126px;

  ${media.lessThan(ScreenType.MEDIUM)`
    top: 173px;
    right: -25px;
    width: 98px;
    height: 70px;
  `}
`;

const PersonsHeadingImage = styled.div`
  width: 60%;
  overflow: hidden;
  ${media.lessThan(ScreenType.MEDIUM)`
    padding-top: 68px;
    width: 75%;
  `}
`;

const PersonsHeadingSubTitle = styled.div`
  margin-right: ${BigSpacing.SMALL}px;
  ${media.lessThan(ScreenType.MEDIUM)`
    margin-right: 0;
  `}
`;

const PersonsHeadingTitle = styled.div`
  display: flex;
  ${media.lessThan(ScreenType.MEDIUM)`
    justify-content: center;
    margin-bottom: ${Spacing.LARGE}px;
  `}
`;

const PersonsHeadingTitleMain = styled.h1`
  ${TypographyMixin.DISPLAY};
  ${TypographyMixin.VERTICAL_WRITING};
  font-size: ${TextSize.XXX_LARGE}rem;
`;

const PersonsHeadingTitleSub = styled.p`
  ${TypographyMixin.DISPLAY};
  ${TypographyMixin.VERTICAL_WRITING};
  margin-top: ${Spacing.XX_LARGE}px;
  font-size: ${TextSize.X_SMALL}rem;
`;

const PersonLink = styled(Link)`
  display: block;
  color: ${Colors.UI_TEXT_MAIN};
  text-decoration: none;
  ${StyleMixin.HOVER_EFFECT.NORMAL};
`;

const TopPersonContainer = styled.div`
  margin: ${BigSpacing.LARGE}px auto;
  ${media.lessThan(ScreenType.MEDIUM)`
    margin: ${BigSpacing.X_SMALL}px 0 ${BigSpacing.XX_SMALL}px;
  `}
`;

const PersonListContainer = styled.div`
  display: flex;

  ${media.lessThan(ScreenType.MEDIUM)`
    display: block;
    margin: ${Spacing.XX_LARGE}px auto;
  `}
`;

// TODO: ad hocなので後で消す？
type PersonListProps = {
  under2?: boolean;
};

const PersonList = styled.ul<PersonListProps>`
  display: grid;
  grid-gap: ${BigSpacing.XX_SMALL}px;
  grid-template-columns: repeat(3, 1fr);
  flex: 1;
  margin: 0 auto;
  overflow: hidden;

  ${({ under2 }) =>
    under2
      ? css`
          grid-template-columns: repeat(2, 1fr);
          grid-gap: ${BigSpacing.SMALL}px;
          max-width: 600px;
        `
      : ''}

  ${media.lessThan(ScreenType.MEDIUM)`
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${Spacing.XX_LARGE}px ${Spacing.LARGE}px;
    margin-left: ${Spacing.X_LARGE}px;
    margin-right: ${Spacing.X_LARGE}px;
  `}
`;

const PersonListItem = styled.li``;

export default PersonsModule;
