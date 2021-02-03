import React from 'react';
import media from 'styled-media-query';
import styled from 'styled-components';

import {
  ModuleWidth,
  Spacing,
  StyleMixin,
  AspectRatio,
  Colors,
  TypographyMixin,
  TextSize,
  ScreenType,
  LineHeight,
} from '@/constants';

import { UnderLineText, ArrowIcon } from '@/components';
import { IntersectionFadeIn, ReverseParallax, ParallaxBasePosition } from '@/effects';

type PersonItemProps = {
  position: string;
  name: string;
  mainVisualUrl: string;
  showArrowIcon?: boolean;
  isComingSoon?: boolean;
};

export const PersonItem: React.FC<PersonItemProps> = ({
  position,
  name,
  mainVisualUrl,
  showArrowIcon = true,
  isComingSoon,
}) => {
  // const formattedPublishedAt = useMemo(
  //   () => dayjs(publishedAt).format(DateFormat.YEAR_MONTH_DATE_JP),
  //   [publishedAt],
  // );

  return (
    <IntersectionFadeIn>
      <Container>
        <ThumbnailContainer>
          <ReverseParallax zoom={1.1} coefficient={0.03} min={-800} max={800}>
            <Thumbnail src={mainVisualUrl} isComingSoon={isComingSoon} />
          </ReverseParallax>
          {isComingSoon && (
            <ComingSoonLabel>
              <UnderLineText size="small">近日公開</UnderLineText>
            </ComingSoonLabel>
          )}
        </ThumbnailContainer>
        <Info isComingSoon={isComingSoon}>
          <Position>{position}</Position>
          <NameContainer>
            <Name>{name}</Name>
            {showArrowIcon && (
              <IconContainer>
                <ArrowIcon />
              </IconContainer>
            )}
          </NameContainer>
        </Info>
      </Container>
    </IntersectionFadeIn>
  );
};

type IsComingSoonAcceptable = Pick<PersonItemProps, 'isComingSoon'>;

const Info = styled.div`
  margin-top: ${Spacing.NORMAL}px;
  opacity: ${({ isComingSoon }) => (isComingSoon ? 0.2 : 1)};
`;

const Position = styled.p`
  font-size: ${TextSize.X_SMALL}rem;
  ${TypographyMixin.DISPLAY};
`;

const NameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Name = styled.h3`
  color: ${Colors.ABSTRACT_BLACK};
  font-size: ${TextSize.LARGE}rem;
  line-height: ${LineHeight.NORMAL};
  text-decoration: none;
  ${TypographyMixin.DISPLAY};

  ${media.lessThan(ScreenType.MEDIUM)`
    font-size: ${TextSize.NORMAL}rem;
  `};
`;

const IconContainer = styled.div`
  width: ${Spacing.XX_LARGE}px;
  ${media.lessThan(ScreenType.MEDIUM)`
    width: ${Spacing.X_LARGE}px;
    font-size: ${TextSize.SMALL}rem;
  `};
`;

const Container = styled.div``;

const ComingSoonLabel = styled.div`
  ${StyleMixin.ABSOLUTE_CENTERING};
`;

const ThumbnailContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

const Thumbnail = styled.div<
  {
    src: string;
  } & IsComingSoonAcceptable
>`
  width: 100%;
  opacity: ${({ isComingSoon }) => (isComingSoon ? 0.2 : 1)};
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

type TopItemProps = {
  title: string;
  parallaxBasePosition?: ParallaxBasePosition;
} & PersonItemProps;

export const TopPersonItem: React.FC<TopItemProps> = ({
  position,
  name,
  title,
  mainVisualUrl,
  showArrowIcon = true,
  parallaxBasePosition = ParallaxBasePosition.CENTER,
}) => {
  return (
    <IntersectionFadeIn>
      <TopContainer>
        <TopThumbnailContainer>
          <ReverseParallax
            fillLayout
            basePosition={parallaxBasePosition}
            zoom={1.1}
            coefficient={0.07}
            min={-800}
            max={800}
          >
            <TopThumbnail src={mainVisualUrl} />
          </ReverseParallax>
        </TopThumbnailContainer>
        <TopInfo>
          <TopProfileContainer>
            <TopProfile>
              <TopPosition>{position}</TopPosition>
              <TopName>{name}</TopName>
            </TopProfile>
            {showArrowIcon && (
              <TopIconContainerSmallScreen>
                <ArrowIcon />
              </TopIconContainerSmallScreen>
            )}
          </TopProfileContainer>
          <TopTitle>{title}</TopTitle>
          {showArrowIcon && (
            <TopIconContainerNormalScreen>
              <ArrowIcon />
            </TopIconContainerNormalScreen>
          )}
        </TopInfo>
      </TopContainer>
    </IntersectionFadeIn>
  );
};

const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: ${ModuleWidth.SEMI_WIDE}px;
  margin: 0 auto;

  ${media.lessThan(ScreenType.MEDIUM)`
    display: block;
    margin: ${Spacing.LARGE}px;
  `}
`;

const TopThumbnailContainer = styled.div`
  width: 40%;
  height: 100%;
  overflow: hidden;

  ${media.lessThan(ScreenType.MEDIUM)`
    margin: 0 auto;
    width: 80%;
  `}
`;

const TopThumbnail = styled.div`
  ${StyleMixin.BACKGROUND_IMAGE_WITH_SRC};

  &::after {
    content: '';
    display: block;
    padding-bottom: ${AspectRatio.R_3_BY_4}%;
  }
`;

const TopInfo = styled.div`
  width: 40%;

  ${media.lessThan(ScreenType.MEDIUM)`
    margin-top: ${Spacing.LARGE}px;
    width: auto;
  `}
`;

const TopProfileContainer = styled.div`
  ${media.lessThan(ScreenType.MEDIUM)`
    display: flex;
    justify-content: center;
    max-width: 80%;
    margin-left: auto;
    margin-right: auto;
  `}
`;
const TopProfile = styled.div``;

const TopPosition = styled.p`
  font-size: ${TextSize.SMALL}rem;
  ${TypographyMixin.DISPLAY};

  ${media.lessThan(ScreenType.MEDIUM)`
    text-align: center;
  `}
`;

const TopName = styled.h3`
  ${TypographyMixin.DISPLAY};
  margin-top: ${Spacing.NORMAL}px;
  font-size: ${TextSize.XXX_LARGE}rem;

  ${media.lessThan(ScreenType.MEDIUM)`
    font-size: ${TextSize.X_LARGE}rem;
    text-align: center;
  `}
`;

const TopTitle = styled.p`
  margin-top: ${Spacing.NORMAL}px;
  font-size: ${TextSize.X_SMALL}rem;
  ${TypographyMixin.DISPLAY};

  ${media.lessThan(ScreenType.MEDIUM)`
    margin-left: auto;
    margin-right: auto;
    max-width: 80%;
  `}
`;

const TopIconContainerNormalScreen = styled.div`
  width: ${Spacing.XX_LARGE}px;
  margin-top: ${Spacing.NORMAL}px;
  margin-left: auto;
  ${media.lessThan(ScreenType.MEDIUM)`
    display: none;
  `}
`;

const TopIconContainerSmallScreen = styled.div`
  width: ${Spacing.X_LARGE}px;
  margin-left: ${Spacing.X_LARGE}px;
  ${media.greaterThan(ScreenType.MEDIUM)`
    display: none;
  `}
`;
