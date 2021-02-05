import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { AllMicrocmsPersonsQuery } from '@/types';
import styled, { css } from 'styled-components';
import {
  StyleMixin,
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
        <PersonsTitleContainer>
          <PersonsTitleInner>
            <PersonsTitleLogoArea>
              <PersonsTitleLogo>
                <MediaLogo />
              </PersonsTitleLogo>
              <PersonsTitleTagLine>
                <MediaTagLine />
              </PersonsTitleTagLine>
            </PersonsTitleLogoArea>
            <PersonsTitleImage>
              <ReverseParallax
                zoom={1.1}
                zoomSmall={1.7}
                basePosition={ParallaxBasePosition.TOP}
                fillLayout
              >
                <Picture relativePath="photos/persons/hero.jpg" />
              </ReverseParallax>
            </PersonsTitleImage>
          </PersonsTitleInner>
        </PersonsTitleContainer>
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
            <>
              <PersonsSummaryTitleLogo>
                <IntersectionFadeIn fillLayout slideIn>
                  <MediaLogo />
                </IntersectionFadeIn>
              </PersonsSummaryTitleLogo>
              <PersonsSummaryTitleTagLine>
                <IntersectionFadeIn fillLayout slideIn>
                  <MediaTagLine />
                </IntersectionFadeIn>
              </PersonsSummaryTitleTagLine>
            </>
          )}
          <PersonList under2={summarizedPersons.length <= 2} withTitle={summaryMode}>
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

type ContainerProps = Pick<PersonsModuleProps, 'withVerticalMargin'>;
const Container = styled.div<ContainerProps>`
  position: relative;
  max-width: ${ModuleWidth.MIDDLE}px;
  margin: ${({ withVerticalMargin }) =>
    `${withVerticalMargin ? BigSpacing.NORMAL : 0}px auto ${BigSpacing.NORMAL}px`};

  ${media.lessThan<ContainerProps>(ScreenType.MEDIUM)`
    margin: ${({ withVerticalMargin }) =>
      `${withVerticalMargin ? Spacing.XXX_LARGE : 0}px auto ${
        withVerticalMargin ? Spacing.X_LARGE : 0
      }px`};
  `}
`;

const PersonsTitleContainer = styled.div``;

const PersonsTitleInner = styled.div`
  display: flex;
  position: relative;
  max-width: ${ModuleWidth.WIDE}px;
  height: ${ModuleHeight.HERO_NORMAL_SCREEN}px;
  margin: 0 auto;
  ${media.lessThan(ScreenType.MEDIUM)`
    height: 388px;
  `}
`;

const PersonsTitleLogoArea = styled.div`
  position: relative;
  z-index: 1;
  width: 40%;
  ${media.lessThan(ScreenType.MEDIUM)`
    width: 25%;
  `}
`;

const PersonsTitleLogo = styled.div`
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

const PersonsTitleTagLine = styled.div`
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

const PersonsTitleImage = styled.div`
  width: 60%;
  overflow: hidden;
  ${media.lessThan(ScreenType.MEDIUM)`
    padding-top: 68px;
    width: 75%;
  `}
`;

const PersonsSummaryTitleLogo = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 300px;
  height: 152px;

  ${media.lessThan(ScreenType.MEDIUM)`
    top: 12px;
    left: 10px;
    width: 212px;
    height: 107px;
  `}
`;

const PersonsSummaryTitleTagLine = styled.div`
  position: absolute;
  top: 199px;
  left: 0;
  width: 97px;
  height: 72px;

  ${media.lessThan(ScreenType.MEDIUM)`
    top: 28px;
    left: auto;
    right: 16px;
    width: 88px;
    height: 63px;
  `}
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
`;

type PersonListProps = {
  under2?: boolean;
  withTitle?: boolean;
};

const PersonList = styled.ul<PersonListProps>`
  display: grid;
  grid-gap: ${BigSpacing.XX_SMALL}px;
  grid-template-columns: repeat(3, 1fr);
  flex: 1;
  margin-top: ${({ withTitle }) => (withTitle ? 122 : 0)}px;
  margin-right: auto;
  margin-bottom: 0;
  margin-left: ${({ withTitle }) => (withTitle ? 146 : 0)}px;
  overflow: hidden;

  ${({ under2 }) =>
    under2
      ? css`
          grid-template-columns: repeat(2, 1fr);
          grid-gap: ${BigSpacing.SMALL}px;
          max-width: 600px;
        `
      : ''}

  ${media.lessThan<PersonListProps>(ScreenType.MEDIUM)`
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${Spacing.XX_LARGE}px ${Spacing.LARGE}px;
    margin-top: ${({ withTitle }) => (withTitle ? 110 : 0)}px;
    margin-left: ${Spacing.X_LARGE}px;
    margin-right: ${Spacing.X_LARGE}px;
  `}
`;

const PersonListItem = styled.li``;

export default PersonsModule;
