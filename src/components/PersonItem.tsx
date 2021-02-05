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

import {
  TwitterTweetButton,
  FacebookShareButton,
  UnderLineText,
  MicroCMSImage,
  ArrowIcon,
} from '@/components';
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
  return (
    <IntersectionFadeIn>
      <Container>
        <ThumbnailContainer>
          <ReverseParallax zoom={1.1} coefficient={0.03} min={-800} max={800}>
            <ThumbnailContainer>
              <ThumbnailInner isComingSoon={isComingSoon}>
                <MicroCMSImage
                  src={mainVisualUrl}
                  options={{
                    height: 400,
                    aspectRatio: AspectRatio.SILVER_VERTICAL,
                  }}
                  optionsSmallScreen={{
                    height: 250,
                  }}
                />
              </ThumbnailInner>
            </ThumbnailContainer>
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

const Info = styled.div<IsComingSoonAcceptable>`
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

  ${media.lessThan(ScreenType.MEDIUM)`
    width: 80px;
  `};
`;

const ThumbnailContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const ThumbnailInner = styled.div<IsComingSoonAcceptable>`
  opacity: ${({ isComingSoon }) => (isComingSoon ? 0.2 : 1)};
`;

type SubInformation = {
  twitter?: boolean;
  facebook?: boolean;
  publishDate?: string;
};

type TopItemProps = {
  title: string;
  subInformation?: SubInformation;
  parallaxBasePosition?: ParallaxBasePosition;
} & PersonItemProps;

export const TopPersonItem: React.FC<TopItemProps> = ({
  position,
  name,
  title,
  mainVisualUrl,
  showArrowIcon = true,
  subInformation,
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
            <MicroCMSImage
              src={mainVisualUrl}
              options={{
                height: 600,
                aspectRatio: AspectRatio.R_3_BY_4,
              }}
              optionsSmallScreen={{
                height: 400,
              }}
            />
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
          {subInformation && (
            <TopSubInfo>
              {subInformation.publishDate && (
                <TopPublishDate>{subInformation.publishDate}</TopPublishDate>
              )}
              {(subInformation.twitter || subInformation.facebook) && (
                <TopSubInfoSocialButtons>
                  {subInformation.twitter && (
                    <TopSubInfoSocialButton>
                      <TwitterTweetButton shape="circle" />
                    </TopSubInfoSocialButton>
                  )}
                  {subInformation.facebook && (
                    <TopSubInfoSocialButton>
                      <FacebookShareButton shape="circle" />
                    </TopSubInfoSocialButton>
                  )}
                </TopSubInfoSocialButtons>
              )}
            </TopSubInfo>
          )}
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

const TopInfo = styled.div`
  width: 40%;

  ${media.lessThan(ScreenType.MEDIUM)`
    margin-top: ${Spacing.XX_LARGE}px;
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
    margin-top: ${Spacing.SMALL}px;
    font-size: ${TextSize.X_LARGE}rem;
    text-align: center;
  `}
`;

const TopTitle = styled.p`
  margin-top: ${Spacing.NORMAL}px;
  font-size: ${TextSize.SMALL}rem;
  ${TypographyMixin.DISPLAY};

  ${media.lessThan(ScreenType.MEDIUM)`
    margin-top: ${Spacing.MIDDLE}px;
    margin-left: auto;
    margin-right: auto;
    max-width: 80%;
    font-size: ${TextSize.X_SMALL}rem;
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

const TopSubInfo = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: ${Spacing.LARGE}px;
  ${media.lessThan(ScreenType.MEDIUM)`
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    max-width: 80%;
  `}
`;

const TopSubInfoSocialButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  ${media.lessThan(ScreenType.MEDIUM)`
    justify-content: flex-end;
  `}
`;

const TopSubInfoSocialButton = styled.div`
  width: 28px;
  & + & {
    margin-left: ${Spacing.NORMAL}px;
  }

  ${media.lessThan(ScreenType.MEDIUM)`
    width: 36px;

    & + & {
      margin-left: ${Spacing.LARGE}px;
    }
  `}
`;

const TopPublishDate = styled.div`
  ${TypographyMixin.DISPLAY};
  color: ${Colors.UI_TEXT_SUB};
  font-size: ${TextSize.SMALL}rem;

  ${media.lessThan(ScreenType.MEDIUM)`
    font-size: ${TextSize.X_SMALL}rem;
  `}
`;
