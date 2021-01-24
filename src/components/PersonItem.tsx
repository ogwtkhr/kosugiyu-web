import React from 'react';
import media from 'styled-media-query';
import styled from 'styled-components';

import {
  ModuleWidth,
  Spacing,
  BigSpacing,
  StyleMixin,
  AspectRatio,
  Colors,
  Typography,
  TextSize,
  ScreenType,
  LineHeight,
} from '@/constants';

import { ArrowIcon } from '@/components';
import { IntersectionFadeIn, ReverseParallax, ParallaxBasePosition } from '@/effects';

type PersonItemProps = {
  position: string;
  name: string;
  mainVisualUrl: string;
  showArrowIcon?: boolean;
};

export const PersonItem: React.FC<PersonItemProps> = ({
  position,
  name,
  mainVisualUrl,
  showArrowIcon = true,
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
            <Thumbnail src={mainVisualUrl} />
          </ReverseParallax>
        </ThumbnailContainer>
        <Info>
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
const Info = styled.div`
  margin-top: ${Spacing.NORMAL}px;
`;

const Position = styled.p`
  font-size: ${TextSize.X_SMALL}rem;
  ${Typography.Mixin.DISPLAY};
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
  ${Typography.Mixin.DISPLAY};

  ${media.lessThan(ScreenType.MEDIUM)`
    font-size: ${TextSize.NORMAL}rem;
  `};
`;

const IconContainer = styled.div`
  width: ${Spacing.XX_LARGE}px;
  ${media.lessThan(ScreenType.MEDIUM)`
    font-size: ${TextSize.SMALL}rem;
  `};
`;

const Container = styled.div``;

const ThumbnailContainer = styled.div`
  overflow: hidden;
`;

const Thumbnail = styled.div`
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
          <TopPosition>{position}</TopPosition>
          <TopName>{name}</TopName>
          <TopTitle>{title}</TopTitle>
          {showArrowIcon && (
            <TopIconContainer>
              <ArrowIcon />
            </TopIconContainer>
          )}
        </TopInfo>
      </TopContainer>
    </IntersectionFadeIn>
  );
};

const TopContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: ${ModuleWidth.SEMI_WIDE}px;
  margin: 0 auto;

  ${media.lessThan(ScreenType.MEDIUM)`
    display: block;
    margin: ${Spacing.LARGE}px;
  `}
`;

const TopThumbnailContainer = styled.div`
  overflow: hidden;
  width: 40%;
  height: 100%;

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

const TopPosition = styled.p`
  font-size: ${TextSize.SMALL}rem;
  ${Typography.Mixin.DISPLAY};

  ${media.lessThan(ScreenType.MEDIUM)`
    text-align: center;
  `}
`;

const TopName = styled.h3`
  ${Typography.Mixin.DISPLAY};
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
  ${Typography.Mixin.DISPLAY};
`;

const TopIconContainer = styled.div`
  width: ${Spacing.XX_LARGE}px;
  margin-top: ${Spacing.NORMAL}px;
  margin-left: auto;
`;
