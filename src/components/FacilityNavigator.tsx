import React, { useCallback, useState } from 'react';
import { useFacilityInfo } from '@/hooks';
import { Picture, PrevIcon, NextIcon, OtherWindowIcon, Overlay } from '@/components';
import styled, { css } from 'styled-components';
import Transition from 'react-transition-group/Transition';

import { getTextBreakFragment } from '@/util/jsx';
import {
  BigSpacing,
  Colors,
  Layer,
  LineHeight,
  ScreenType,
  ScreenValue,
  Spacing,
  TextSize,
  Typography,
  TransitionStatus,
  PropsWithTransition,
} from '@/constants';
import media from 'styled-media-query';
import { Parallax, ReverseParallax } from '@/effects';
import { UnderLineText } from './UnderLineText';
import { ValueOf } from '@/types';

// TODO: 統合
export const FacilityLayers = {
  BACKGROUND: 1,
  BIG_IMAGE: 2,
  OVER_BIG_IMAGE: 3,
  WINDOW_BASE: 4,
  // WINDOW_POPUP: 5,
  OVERLAY: Layer.PRIVILEGE,
  // MODAL: Layer.PRIVILEGE,
} as const;

const FacilityID = {
  FACADE: 'facade',
  ENTRANCE: 'entrance',
  COUNTER: 'counter',
  CHANGING_ROOM: 'changing_room',
  BATHROOM: 'bathroom',
  LOUNGE: 'lounge',
  LAUNDRY: 'laundry',
  TONARI: 'tonari',
} as const;

type FacilityID = ValueOf<typeof FacilityID>;

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
          <BigImage id={id}>
            <Picture relativePath="illustrations/facility/all_facilities.jpg" />
          </BigImage>
        </ReverseParallax>
      </BigImageContainer>

      <BackgroundPhoto
        isActive={id === FacilityID.LAUNDRY}
        relativePath="photos/facility/bg_laundry.jpg"
      />
      <BackgroundPhoto
        isActive={id === FacilityID.TONARI}
        relativePath="photos/facility/bg_tonari.jpg"
      />

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

      <DescriptionWindow id={id}>
        <DescriptionTitle>{title}</DescriptionTitle>
        <DescriptionBody>{getTextBreakFragment(description)}</DescriptionBody>
        <DescriptionPhoto>
          <Picture relativePath={'photos/facility/facility_photo_1.jpg'} />
        </DescriptionPhoto>
      </DescriptionWindow>

      <Overlay
        layer={FacilityLayers.OVERLAY}
        isOpen={hasDetails && isDetailWindowOpen}
        onClick={closeDetailWindow}
      >
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

type IdInjectable = {
  id: string;
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

const BigImage = styled.div<IdInjectable>`
  width: 100%;
  height: 100%;
  transition: 1s ease;
  opacity: 1;

  ${({ id }) => {
    switch (id) {
      // 外観
      case FacilityID.FACADE:
        return css`
          transform: scale(0.35) translate(10%, 0);
          ${media.lessThan(ScreenType.MEDIUM)`
            transform: scale(0.4) translate(-13%, -16%);
          `}
        `;
      // 玄関
      case FacilityID.ENTRANCE:
        return css`
          transform: translate(-8%, -29%);
          ${media.lessThan(ScreenType.MEDIUM)`
            transform: scale(1.2) translate(-18%, -40%);
          `}
        `;
      // 番台
      case FacilityID.COUNTER:
        return css`
          transform: scale(1.2) translate(-6%, -18%);
          ${media.lessThan(ScreenType.MEDIUM)`
            transform: scale(1.4) translate(-23%, -30%);
          `}
        `;
      // 脱衣所
      case FacilityID.CHANGING_ROOM:
        return css`
          transform: scale(0.8) translate(0, -4%);
          ${media.lessThan(ScreenType.MEDIUM)`
            transform: scale(1.1) translate(-7%, -19%);
          `}
        `;
      // 浴室
      case FacilityID.BATHROOM:
        return css`
          transform: scale(0.6) translate(23%, 19%);
          ${media.lessThan(ScreenType.MEDIUM)`
            transform: scale(0.9) translate(17%, 0%);
          `}
        `;
      // 待合室兼ギャラリー
      case FacilityID.LOUNGE:
        return css`
          transform: scale(1.1) translate(-25%, -14%);
          ${media.lessThan(ScreenType.MEDIUM)`
            transform: scale(1.4) translate(-35%, -20%);
          `}
        `;
      // コインランドリー、となり
      case FacilityID.LAUNDRY:
      case FacilityID.TONARI:
        return css`
          opacity: 0;
          transform: scale(1) translate(0, 0);
        `;
      default:
        return '';
    }
  }}
`;

type BackgroundPhotoProps = {
  isActive: boolean;
  relativePath: string;
};

const BackgroundPhoto: React.FC<BackgroundPhotoProps> = ({ isActive, relativePath }) => (
  <Transition in={isActive} timeout={200}>
    {(state) => (
      <BackgroundPhotoContainer state={state}>
        <Picture relativePath={relativePath} />
      </BackgroundPhotoContainer>
    )}
  </Transition>
);

const BackgroundPhotoContainer = styled.div<PropsWithTransition>`
  position: absolute;
  top: ${Spacing.X_LARGE}px;
  right: ${Spacing.X_LARGE}px;
  bottom: ${Spacing.X_LARGE}px;
  left: ${Spacing.X_LARGE}px;
  width: calc(100% - ${Spacing.X_LARGE * 2}px);
  height: calc(100% - ${Spacing.X_LARGE * 2}px);
  transition: 1s ease;
  opacity: ${({ state }) => (state === TransitionStatus.ENTERED ? 1 : 0)};
`;

const BaseWindow = styled.div`
  position: absolute;
  border: solid 2px ${Colors.UI_LINE_NORMAL};
  background-color: ${Colors.ABSTRACT_WHITE};
`;

const DescriptionWindow = styled(BaseWindow)<IdInjectable>`
  z-index: ${FacilityLayers.WINDOW_BASE};
  top: ${BigSpacing.NORMAL}px;
  left: 0;
  width: 420px;
  padding: ${Spacing.X_LARGE}px ${Spacing.XXX_LARGE}px;
  transition: 1s ease;

  ${media.lessThan(ScreenType.MEDIUM)`
    top: auto;
    bottom: 0;
    width: auto;
    padding: ${Spacing.LARGE}px;
  `}
`;

const DescriptionTitle = styled.h3`
  ${Typography.Mixin.DISPLAY};
  font-size: ${TextSize.X_LARGE}rem;

  ${media.lessThan(ScreenType.MEDIUM)`
    font-size: ${TextSize.LARGE}rem;
  `}
`;

const DescriptionBody = styled.p`
  ${Typography.Mixin.DISPLAY};
  margin-top: ${Spacing.NORMAL}px;
  font-size: ${TextSize.SMALL}rem;
  ${media.lessThan(ScreenType.MEDIUM)`
    max-height: 20vh;
    overflow: scroll;
    font-size: ${TextSize.X_SMALL}rem;
  `}
`;

const DescriptionPhoto = styled.div`
  position: absolute;
  bottom: calc(100% - ${Spacing.XXX_LARGE}px);
  left: calc(100% - ${BigSpacing.NORMAL}px);
  width: 260px;
  border: solid 2px ${Colors.UI_LINE_NORMAL};
  background-color: gray;

  ${media.lessThan(ScreenType.MEDIUM)`
    left: calc(100% - 110px);
    width: 120px;
  `}
`;

const CONTROLS_WIDTH = 200;
const CONTROLS_WIDTH_SMALL = 170;
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

  ${media.lessThan(ScreenType.MEDIUM)`
    width: ${CONTROLS_WIDTH_SMALL}px;
  `}
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

  ${media.lessThan(ScreenType.MEDIUM)`
    left: ${CONTROLS_WIDTH_SMALL + Spacing.LARGE}px;
  `}
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
  max-width: ${ScreenValue.MEDIUM}px;
  ${media.lessThan(ScreenType.MEDIUM)`
    width: calc(100% -  ${Spacing.LARGE * 2}px);
    margin-left: ${Spacing.LARGE}px;
    margin-right: ${Spacing.LARGE}px;
  `}
`;

const DetailWindowInner = styled.div`
  padding: ${Spacing.XX_LARGE}px;

  ${media.lessThan(ScreenType.MEDIUM)`
    padding: ${Spacing.XX_LARGE}px ${Spacing.X_LARGE}px;
  `}
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
  ${media.lessThan(ScreenType.MEDIUM)`
    display: block;
  `}
`;

const DetailItemPhoto = styled.div`
  width: 240px;
  ${media.lessThan(ScreenType.MEDIUM)`
    width: 100%;
  `}
`;

const DetailDescriptionList = styled.dl`
  flex: 1;
  margin-left: ${Spacing.LARGE}px;

  ${media.lessThan(ScreenType.MEDIUM)`
    margin-top: ${Spacing.LARGE}px;
    margin-left: 0;
  `}
`;

const DetailDescriptionTerm = styled.dt`
  ${Typography.Mixin.DISPLAY};
  font-size: ${TextSize.LARGE}rem;
`;

const DetailDescriptionDetail = styled.dd`
  ${Typography.Mixin.DISPLAY};
  margin-top: ${Spacing.NORMAL}px;
  font-size: ${TextSize.SMALL}rem;
  ${media.lessThan(ScreenType.MEDIUM)`
    font-size: ${TextSize.X_SMALL}rem;
  `}
`;
