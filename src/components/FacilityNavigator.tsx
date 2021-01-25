import React, { useCallback, useState } from 'react';
import { useFacilityInfo } from '@/hooks';
import { Picture, PrevIcon, NextIcon, OtherWindowIcon, Overlay } from '@/components';
import styled, { css } from 'styled-components';
import Transition from 'react-transition-group/Transition';

import { getTextBreakFragment } from '@/util/jsx';
import {
  AspectRatio,
  BigSpacing,
  Colors,
  LineHeight,
  ModuleWidth,
  ScreenType,
  Spacing,
  TextSize,
  Typography,
} from '@/constants';
import media from 'styled-media-query';
import { Parallax, ReverseParallax } from '@/effects';
import { UnderLineText } from './UnderLineText';

export const FacilityLayers = {
  BACKGROUND: 1,
  BIG_IMAGE: 2,
  OVER_BIG_IMAGE: 3,
  WINDOW_BASE: 4,
  WINDOW_POPUP: 5,
  OVERLAY: 6,
  MODAL: 7,
} as const;

// const windowTransitionTimeout = {
//   enter: 10,
//   exit: 300,
// };

export const FacilityNavigator: React.FC = () => {
  const facilityInfo = useFacilityInfo();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isDetailWindowOpen, setIsDetailWindowOpen] = useState<boolean>(false);
  const { id, title, description, details } = facilityInfo[currentIndex];
  const openDetailWindow = useCallback(() => {
    setIsDetailWindowOpen(true);
  }, []);
  const closeDetailWindow = useCallback(() => {
    setIsDetailWindowOpen(false);
  }, []);
  const hasDetails = !!details;

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
            closeDetailWindow();
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
            closeDetailWindow();
            setCurrentIndex(currentIndex < facilityInfo.length - 1 ? currentIndex + 1 : 0);
          }}
        >
          次へ
          <ControlButtonIcon>
            <NextIcon />
          </ControlButtonIcon>
        </ControlButton>
      </Controls>
      {/* TODO: Transition */}
      {hasDetails && (
        <DetailButton onClick={openDetailWindow}>
          <DetailButtonLabel>解説</DetailButtonLabel>
          <DetailButtonIcon>
            <OtherWindowIcon />
          </DetailButtonIcon>
        </DetailButton>
      )}

      <DescriptionWindow index={currentIndex}>
        <DescriptionTitle>{title}</DescriptionTitle>
        <DescriptionBody>{getTextBreakFragment(description)}</DescriptionBody>
        <DescriptionPhoto>
          <Picture relativePath={'photos/facility/facility_photo_1.jpg'} />
        </DescriptionPhoto>
      </DescriptionWindow>

      <Overlay isOpen={hasDetails && isDetailWindowOpen} onClick={closeDetailWindow}>
        <DetailWindow>
          <DetailWindowInner>
            <DetailWindowHeader>
              <UnderLineText>{title}</UnderLineText>
              <DetailWindowCloseButton />
            </DetailWindowHeader>
            <DetailList>
              {details?.map(({ id, title, description }) => (
                <DetailListItem key={id}>
                  <DetailItem>
                    <div>
                      <DetailItemPhoto>
                        <Picture relativePath={'photos/facility/facility_photo_1.jpg'} />
                      </DetailItemPhoto>
                    </div>
                    <DetailDescriptionList>
                      <DetailDescriptionTerm>{title}</DetailDescriptionTerm>
                      <DetailDescriptionDetail>{description}</DetailDescriptionDetail>
                    </DetailDescriptionList>
                  </DetailItem>
                </DetailListItem>
              ))}
            </DetailList>
          </DetailWindowInner>
        </DetailWindow>
      </Overlay>
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

const DetailWindow = styled(BaseWindow)`
  width: 100%;
  max-width: ${ModuleWidth.ARTICLE}px;
`;

const DetailWindowInner = styled.div`
  padding: ${Spacing.XX_LARGE}px;
`;

const DetailWindowHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DetailWindowCloseButton = styled.button`
  position: relative;
  width: ${Spacing.XX_LARGE}px;
  height: ${Spacing.XX_LARGE}px;

  &::after,
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${Colors.UI_LINE_NORMAL};
  }

  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
`;

const DetailList = styled.ul`
  max-height: 70vh;
  margin-top: ${Spacing.X_LARGE}px;
  overflow: scroll;
`;

const DetailListItem = styled.li`
  & + & {
    margin-top: ${Spacing.X_LARGE}px;
  }
`;

const DetailItem = styled.div`
  display: flex;
`;

const DetailItemPhoto = styled.div`
  width: 240px;
`;

const DetailDescriptionList = styled.dl`
  flex: 1;
  margin-left: ${Spacing.LARGE}px;
`;

const DetailDescriptionTerm = styled.dt`
  ${Typography.Mixin.DISPLAY};
  font-size: ${TextSize.LARGE}rem;
`;

const DetailDescriptionDetail = styled.dd`
  ${Typography.Mixin.DISPLAY};
  margin-top: ${Spacing.NORMAL}px;
  font-size: ${TextSize.SMALL}rem;
`;
