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
    <PersonThumbnailContainer>
      <PersonThumbnail src={mainVisualUrl} />
      <PersonInfo>
        <PersonPosition>{position}</PersonPosition>
        <PersonNameContainer>
          <PersonName>{name}</PersonName>
          {showArrowIcon && (
            <PersonIconContainer>
              <ArrowIcon />
            </PersonIconContainer>
          )}
        </PersonNameContainer>
      </PersonInfo>
    </PersonThumbnailContainer>
  );
};
const PersonInfo = styled.div`
  margin-top: ${Spacing.NORMAL}px;
`;

const PersonPosition = styled.p`
  font-size: ${TextSize.X_SMALL}rem;
  ${Typography.Mixin.DISPLAY};
`;

const PersonNameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PersonName = styled.h3`
  color: ${Colors.ABSTRACT_BLACK};
  font-size: ${TextSize.LARGE}rem;
  line-height: ${LineHeight.NORMAL};
  text-decoration: none;
  ${Typography.Mixin.DISPLAY};

  /* ${media.lessThan(ScreenType.MEDIUM)`
    font-size: ${TextSize.NORMAL}rem;
  `} */
`;

const PersonIconContainer = styled.div`
  width: ${Spacing.XX_LARGE}px;
`;

const PersonThumbnailContainer = styled.div``;

const PersonThumbnail = styled.div`
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

type TopPersonItemProps = {
  title: string;
} & PersonItemProps;

export const TopPersonItem: React.FC<TopPersonItemProps> = ({
  position,
  name,
  title,
  mainVisualUrl,
  showArrowIcon = true,
}) => {
  return (
    <TopPersonContainer>
      <TopPersonThumbnail src={mainVisualUrl} />
      <TopPersonInfo>
        <TopPersonPosition>{position}</TopPersonPosition>
        <TopPersonName>{name}</TopPersonName>
        <TopPersonTitle>{title}</TopPersonTitle>
        {showArrowIcon && (
          <TopPersonIconContainer>
            <ArrowIcon />
          </TopPersonIconContainer>
        )}
      </TopPersonInfo>
    </TopPersonContainer>
  );
};

const TopPersonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: ${ModuleWidth.SEMI_WIDE}px;
  margin: 0 auto;
`;

const TopPersonThumbnail = styled.div`
  width: 40%;
  ${StyleMixin.BACKGROUND_IMAGE_WITH_SRC};

  &::after {
    content: '';
    display: block;
    padding-bottom: ${AspectRatio.R_3_BY_4}%;
  }
`;

const TopPersonInfo = styled.div`
  width: 40%;
`;

const TopPersonPosition = styled.p`
  font-size: ${TextSize.SMALL}rem;
  ${Typography.Mixin.DISPLAY};
`;

const TopPersonName = styled.h3`
  margin-top: ${Spacing.NORMAL}px;
  font-size: ${TextSize.XXX_LARGE}rem;
  ${Typography.Mixin.DISPLAY};
`;

const TopPersonTitle = styled.p`
  margin-top: ${Spacing.NORMAL}px;
  font-size: ${TextSize.X_SMALL}rem;
  ${Typography.Mixin.DISPLAY};
`;

const TopPersonIconContainer = styled.div`
  width: ${Spacing.XX_LARGE}px;
  margin-top: ${Spacing.NORMAL}px;
  margin-left: auto;
`;
