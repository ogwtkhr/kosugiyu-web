import React, { useState } from 'react';
import { useFacilityInfo } from '@/hooks';
import { Picture, PrevIcon, NextIcon } from '@/components';
import styled, { css } from 'styled-components';

import { getTextBreakFragment } from '@/util/jsx';
import { AspectRatio, Colors, ScreenType, Spacing, TextSize, Typography } from '@/constants';
import media from 'styled-media-query';

import { rgba } from 'polished';

export const FacilityLayers = {
  BACKGROUND: 1,
  BIG_IMAGE: 2,
  OVER_BIG_IMAGE: 3,
  WINDOW_BASE: 4,
  WINDOW_POPUP: 5,
  OVERLAY: 6,
  MODAL: 7,
} as const;

export const FacilityNavigator: React.FC = () => {
  const facilityInfo = useFacilityInfo();
  const [currentIndex, setCurrentIndex] = useState(0);
  const { title, description } = facilityInfo[currentIndex];
  return (
    <Container>
      <BigImageContainer index={currentIndex}>
        <Picture relativePath="illustrations/facility/all_facilities.jpg" />
      </BigImageContainer>

      <Controls>
        <UpButton
          color={Colors.ABSTRACT_WHITE}
          onClick={() => {
            if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
          }}
        />
        <Indicator>
          <IndicatorCurrent>{currentIndex + 1}</IndicatorCurrent>/{facilityInfo.length}
        </Indicator>
        <DownButton
          color={Colors.ABSTRACT_WHITE}
          onClick={() => {
            if (currentIndex < facilityInfo.length - 1) setCurrentIndex(currentIndex + 1);
          }}
        />
      </Controls>
      <DescriptionWindow index={currentIndex}>
        <DescriptionTitle>{title}</DescriptionTitle>
        <DescriptionBody>{description}</DescriptionBody>
        <DescriptionPhoto>
          <Picture relativePath={'photos/facility/facility_photo_1.jpg'} />
        </DescriptionPhoto>
      </DescriptionWindow>
    </Container>
  );
};

type IndexInjectable = {
  index: number;
};

const Container = styled.div`
  position: relative;
  width: 100%;
  /* overflow: hidden; */

  &::after {
    content: '';
    display: block;
    padding-bottom: 50%;

    ${media.lessThan(ScreenType.MEDIUM)`
      padding-bottom: 80vh;
    `}
  }
`;

const BigImageContainer = styled.div<IndexInjectable>`
  position: absolute;
  width: 200vw;
  height: 155vw;
  top: 0;
  left: 0;
  transition: 1s ease;
  transform: scale(1);
  z-index: ${FacilityLayers.BIG_IMAGE};

  ${({ index }) => {
    switch (index) {
      // 外観
      case 0:
        return css`
          transform: scale(0.3);
          top: -60vw;
          left: -70vw;
        `;
      // 玄関
      case 1:
        return css`
          top: -110vw;
          left: -100vw;
        `;
      case 2:
        return css`
          top: -90vw;
          left: -100vw;
        `;
      default:
        return '';
    }
  }}
`;

const DescriptionWindow = styled.div<IndexInjectable>`
  position: absolute;
  right: 5vw;
  bottom: 5vw;
  width: 600px;
  padding: ${Spacing.X_LARGE}px ${Spacing.XXX_LARGE}px;
  transition: 1s ease;
  border: solid 2px ${Colors.UI_LINE_NORMAL};
  background-color: ${Colors.ABSTRACT_WHITE};
  z-index: ${FacilityLayers.WINDOW_BASE};
`;

const DescriptionTitle = styled.h3`
  ${Typography.Mixin.DISPLAY};
  font-size: ${TextSize.LARGE}rem;
`;

const DescriptionBody = styled.p`
  ${Typography.Mixin.DISPLAY};
  font-size: ${TextSize.SMALL}rem;
`;

const DescriptionPhoto = styled.div`
  top: -150px;
  right: -${Spacing.XX_LARGE}px;
  position: absolute;
  width: 300px;
  background-color: gray;
  border: solid 2px ${Colors.UI_LINE_NORMAL};

  /* &::after {
    content: '';
    display: block;
    padding-bottom: ${AspectRatio.R_4_BY_3}%;
  } */
`;

const Controls = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 130px;
  position: absolute;
  bottom: 0;
  left: -80px;
`;

const Indicator = styled.p`
  font-family: 'Roboto Condensed';
  color: ${Colors.ABSTRACT_WHITE};
  font-size: 2rem;
`;

const IndicatorCurrent = styled.span`
  font-size: 4rem;
`;

const UpButton = styled.div`
  cursor: pointer;
  width: 20px;
  height: 20px;
  background-color: blue;
`;

const DownButton = styled.div`
  cursor: pointer;
  width: 20px;
  height: 20px;
  background-color: blue;
`;
