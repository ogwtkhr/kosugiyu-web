import React from 'react';
import media from 'styled-media-query';
import styled from 'styled-components';

import {
  ModuleWidth,
  Spacing,
  AspectRatio,
  Colors,
  TypographyMixin,
  TextSize,
  ScreenType,
} from '@/constants';

import { ShareButtonList, MicroCMSImage, ArrowIcon } from '@/atoms';
import { MediaArticleItemProps } from '@/molecules/MediaArticleItem';
import { IntersectionFadeIn, ReverseParallax, ParallaxBasePosition } from '@/effects';

type SubInformation = {
  twitter?: boolean;
  facebook?: boolean;
  publishDate?: string;
};

type MediaPickupArticleItemProps = {
  title: string;
  subInformation?: SubInformation;
  parallaxBasePosition?: ParallaxBasePosition;
} & MediaArticleItemProps;

export const MediaPickupArticleItem: React.FC<MediaPickupArticleItemProps> = ({
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
      <Container>
        <ThumbnailContainer>
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
        </ThumbnailContainer>
        <Info>
          <ProfileContainer>
            <Profile>
              <Position>{position}</Position>
              <Name>{name}</Name>
            </Profile>
            {showArrowIcon && (
              <IconContainerSmallScreen>
                <ArrowIcon />
              </IconContainerSmallScreen>
            )}
          </ProfileContainer>
          <Title>{title}</Title>
          {subInformation && (
            <SubInfo>
              {subInformation.publishDate && (
                <PublishDate>{subInformation.publishDate}</PublishDate>
              )}
              {(subInformation.twitter || subInformation.facebook) && (
                <ShareButtonList
                  twitter={subInformation.twitter}
                  facebook={subInformation.facebook}
                />
              )}
            </SubInfo>
          )}
          {showArrowIcon && (
            <IconContainerNormalScreen>
              <ArrowIcon />
            </IconContainerNormalScreen>
          )}
        </Info>
      </Container>
    </IntersectionFadeIn>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: ${ModuleWidth.SEMI_WIDE}px;
  margin: 0 auto;

  ${media.lessThan(ScreenType.MEDIUM)`
    display: block;
    margin: ${Spacing.LARGE}px;
  `}
`;

const ThumbnailContainer = styled.div`
  width: 50%;
  height: 100%;
  overflow: hidden;

  ${media.lessThan(ScreenType.MEDIUM)`
    margin: 0 auto;
    width: 80%;
  `}
`;

const Info = styled.div`
  width: 40%;

  ${media.lessThan(ScreenType.MEDIUM)`
    margin-top: ${Spacing.XX_LARGE}px;
    width: auto;
  `}
`;

const ProfileContainer = styled.div`
  ${media.lessThan(ScreenType.MEDIUM)`
    display: flex;
    justify-content: center;
    max-width: 80%;
    margin-left: auto;
    margin-right: auto;
  `}
`;
const Profile = styled.div``;

const Position = styled.p`
  font-size: ${TextSize.SMALL}rem;
  ${TypographyMixin.DISPLAY};

  ${media.lessThan(ScreenType.MEDIUM)`
    text-align: center;
  `}
`;

const Name = styled.h3`
  ${TypographyMixin.DISPLAY};
  margin-top: ${Spacing.NORMAL}px;
  font-size: ${TextSize.XXX_LARGE}rem;

  ${media.lessThan(ScreenType.MEDIUM)`
    margin-top: ${Spacing.SMALL}px;
    font-size: ${TextSize.X_LARGE}rem;
    text-align: center;
  `}
`;

const Title = styled.p`
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

const IconContainerNormalScreen = styled.div`
  width: ${Spacing.XX_LARGE}px;
  margin-top: ${Spacing.NORMAL}px;
  margin-left: auto;
  ${media.lessThan(ScreenType.MEDIUM)`
    display: none;
  `}
`;

const IconContainerSmallScreen = styled.div`
  width: ${Spacing.X_LARGE}px;
  margin-left: ${Spacing.X_LARGE}px;
  ${media.greaterThan(ScreenType.MEDIUM)`
    display: none;
  `}
`;

const SubInfo = styled.div`
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

const PublishDate = styled.time`
  display: block;
  ${TypographyMixin.DISPLAY};
  color: ${Colors.UI_TEXT_SUB};
  font-size: ${TextSize.SMALL}rem;

  ${media.lessThan(ScreenType.MEDIUM)`
    font-size: ${TextSize.X_SMALL}rem;
  `}
`;
