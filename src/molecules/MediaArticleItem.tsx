import React from 'react';
import media from 'styled-media-query';
import styled from 'styled-components';

import {
  Spacing,
  StyleMixin,
  AspectRatio,
  Colors,
  TypographyMixin,
  TextSize,
  ScreenType,
  LineHeight,
} from '@/constants';

import { UnderLineText, MicroCMSImage, ArrowIcon } from '@/atoms';
import { IntersectionFadeIn, ReverseParallax } from '@/effects';

export type MediaArticleItemProps = {
  position: string;
  name: string;
  mainVisualUrl: string;
  showArrowIcon?: boolean;
  isComingSoon?: boolean;
};

export const MediaArticleItem: React.FC<MediaArticleItemProps> = ({
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

type IsComingSoonAcceptable = Pick<MediaArticleItemProps, 'isComingSoon'>;

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
