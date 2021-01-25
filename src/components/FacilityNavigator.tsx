import React, { useState } from 'react';
import { useFacilityInfo } from '@/hooks';
import { Picture, PrevIcon, NextIcon, OtherWindowIcon } from '@/components';
import styled, { css } from 'styled-components';

import { getTextBreakFragment } from '@/util/jsx';
import {
  AspectRatio,
  BigSpacing,
  Colors,
  LineHeight,
  ScreenType,
  Spacing,
  TextSize,
  Typography,
} from '@/constants';
import media from 'styled-media-query';
import { Parallax, ReverseParallax } from '@/effects';

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
      <BigImageContainer>
        <ReverseParallax fillLayout>
          <BigImage index={currentIndex}>
            <Picture relativePath="illustrations/facility/all_facilities.jpg" />
          </BigImage>
        </ReverseParallax>
      </BigImageContainer>

      <Controls>
        <ControlButton
          color={Colors.ABSTRACT_WHITE}
          onClick={() => {
            setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : facilityInfo.length - 1);
          }}
        >
          <ControlButtonIcon>
            <PrevIcon />
          </ControlButtonIcon>
          前へ
        </ControlButton>
        <Indicator>
          {currentIndex + 1}/{facilityInfo.length}
        </Indicator>
        <ControlButton
          color={Colors.ABSTRACT_WHITE}
          onClick={() => {
            setCurrentIndex(currentIndex < facilityInfo.length - 1 ? currentIndex + 1 : 0);
          }}
        >
          次へ
          <ControlButtonIcon>
            <NextIcon />
          </ControlButtonIcon>
        </ControlButton>
      </Controls>
      <DetailButton>
        <DetailButtonLabel>解説</DetailButtonLabel>
        <DetailButtonIcon>
          <OtherWindowIcon />
        </DetailButtonIcon>
      </DetailButton>
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

const BigImageContainer = styled.div`
  position: absolute;
  z-index: ${FacilityLayers.BIG_IMAGE};
  top: 50%;
  left: 50%;
  width: 200vw;
  height: 155vw;
  transform: translate(-50%, -50%);

  ${media.greaterThan(ScreenType.HUGE)`
    width: 2600px;
    height: 2040px;
  `}
`;

const BigImage = styled.div<IndexInjectable>`
  width: 100%;
  height: 100%;
  transition: 1s ease;
  opacity: 1;

  ${({ index }) => {
    switch (index) {
      // 外観
      case 0:
        return css`
          transform: scale(0.35) translate(10%, 0);
        `;
      // 玄関
      case 1:
        return css`
          transform: translate(-8%, -29%);
        `;
      // 番台
      case 2:
        return css`
          transform: scale(1.2) translate(-6%, -18%);
        `;
      // 脱衣所
      case 3:
        return css`
          transform: scale(0.8) translate(0, -4%);
        `;
      // 浴室
      case 4:
        return css`
          transform: scale(0.6) translate(23%, 19%);
        `;
      // 待合室兼ギャラリー
      case 5:
        return css`
          transform: scale(1.1) translate(-25%, -14%);
        `;
      // コインランドリー、となり
      case 6:
      case 7:
        return css`
          opacity: 0;
          transform: scale(1) translate(0, 0);
        `;
      default:
        return '';
    }
  }}
`;

const BaseWindow = styled.div`
  position: absolute;
  border: solid 2px ${Colors.UI_LINE_NORMAL};
  background-color: ${Colors.ABSTRACT_WHITE};
`;

const DescriptionWindow = styled(BaseWindow)<IndexInjectable>`
  z-index: ${FacilityLayers.WINDOW_BASE};
  top: ${BigSpacing.NORMAL}px;
  left: 0;
  width: 420px;
  padding: ${Spacing.X_LARGE}px ${Spacing.XXX_LARGE}px;
  transition: 1s ease;
`;

const DescriptionTitle = styled.h3`
  ${Typography.Mixin.DISPLAY};
  font-size: ${TextSize.X_LARGE}rem;
`;

const DescriptionBody = styled.p`
  ${Typography.Mixin.DISPLAY};
  margin-top: ${Spacing.NORMAL}px;
  font-size: ${TextSize.SMALL}rem;
`;

const DescriptionPhoto = styled.div`
  position: absolute;
  bottom: calc(100% - ${Spacing.XXX_LARGE}px);
  left: calc(100% - ${BigSpacing.NORMAL}px);
  width: 240px;
  border: solid 2px ${Colors.UI_LINE_NORMAL};
  background-color: gray;
`;

const CONTROLS_WIDTH = 200;
const CONTROLS_HEIGHT = 40;

const Controls = styled.div`
  display: flex;
  position: absolute;
  z-index: ${FacilityLayers.WINDOW_BASE};
  top: ${Spacing.XX_LARGE}px;
  left: 0;
  align-items: center;
  justify-content: space-between;
  width: ${CONTROLS_WIDTH}px;
  height: ${CONTROLS_HEIGHT}px;
  padding: 0 ${Spacing.SMALL}px;
  background-color: ${Colors.ABSTRACT_BLACK};
`;

const Indicator = styled.p`
  color: ${Colors.ABSTRACT_WHITE};
  font-size: ${TextSize.NORMAL}rem;
  line-height: ${LineHeight.MONOLITHIC};
`;

const ControlButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${BigSpacing.XX_SMALL}px;
  color: ${Colors.UI_TEXT_DARK_BACKGROUND};
  font-size: ${TextSize.X_SMALL}rem;
  cursor: pointer;
`;

const ControlButtonIcon = styled.div`
  width: 20px;
  height: 20px;
`;

const DetailButton = styled.button`
  display: flex;
  position: absolute;
  z-index: ${FacilityLayers.WINDOW_BASE};
  top: ${Spacing.XX_LARGE}px;
  left: ${CONTROLS_WIDTH + Spacing.LARGE}px;
  align-items: center;
  justify-content: space-around;
  width: 80px;
  height: ${CONTROLS_HEIGHT}px;
  padding: ${Spacing.SMALL}px;
  border: solid 2px ${Colors.UI_LINE_NORMAL};
  background-color: ${Colors.UI_PAPER};
`;

const DetailButtonLabel = styled.span`
  display: block;
`;

const DetailButtonIcon = styled.span`
  display: block;
  width: ${Spacing.LARGE}px;
  height: ${Spacing.LARGE}px;
`;
