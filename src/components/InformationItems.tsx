import React from 'react';
import { UnderLineText, FacilityLayers } from '@/components';
import styled from 'styled-components';

import {
  Colors,
  LineHeight,
  LetterSpacing,
  ModuleWidth,
  ScreenType,
  Spacing,
  TextSize,
  Typography,
  BigSpacing,
  getResponsiveOffsetMixin,
} from '@/constants';
import media from 'styled-media-query';

type TitleInjectable = { title?: string };

export const InformationRow = styled.div`
  display: flex;
  margin-top: ${BigSpacing.NORMAL}px;
  margin-bottom: ${BigSpacing.NORMAL}px;
  ${getResponsiveOffsetMixin({
    maxWidth: ModuleWidth.MIDDLE,
    margin: Spacing.XXX_LARGE,
    marginSmall: Spacing.LARGE,
  })};

  ${media.lessThan(ScreenType.MEDIUM)`
    display: block;
    margin-top: ${BigSpacing.X_SMALL}px;
    margin-bottom: ${Spacing.XXX_LARGE}px;
  `}
`;

export const InformationUnit: React.FC<TitleInjectable> = ({ title, children }) => (
  <InformationUnitContainer>
    {title && (
      <InformationHeading>
        <UnderLineText>{title}</UnderLineText>
      </InformationHeading>
    )}
    {children}
  </InformationUnitContainer>
);

const InformationUnitContainer = styled.section`
  flex: 1;

  ${media.lessThan(ScreenType.MEDIUM)`
    & + & {
       margin-top: ${BigSpacing.X_SMALL}px;
    }
  `}
`;

const InformationHeading = styled.h3`
  position: relative;
  z-index: ${FacilityLayers.OVER_BIG_IMAGE};
`;

export const InformationGroupRow = styled.div`
  display: flex;
  ${media.lessThan(ScreenType.MEDIUM)`
    display: block;
  `}
`;

export const InformationGroup: React.FC<TitleInjectable> = ({ title, children }) => (
  <InformationGroupContainer>
    {title && (
      <InformationContentRow>
        <InformationContent title={title} />
      </InformationContentRow>
    )}
    {children}
  </InformationGroupContainer>
);

const InformationGroupContainer = styled.div`
  position: relative;
  z-index: ${FacilityLayers.OVER_BIG_IMAGE};
  flex: 1;
  margin: ${Spacing.XX_LARGE}px 0;
`;

type InformationContentRowProps = { fix?: boolean };

export const InformationContentRow = styled.div<InformationContentRowProps>`
  display: flex;
  align-items: center;
  max-width: ${({ fix = true }) => (fix ? '400px' : '')};

  & + & {
    margin-top: ${Spacing.XX_LARGE}px;
  }

  ${media.lessThan(ScreenType.MEDIUM)`
    display: block;
    & + & {
      margin-top: ${Spacing.X_LARGE}px;
    }
  `}
`;

type InformationContentProps = {
  flex?: number;
};

export const InformationContent: React.FC<InformationContentProps & TitleInjectable> = ({
  title,
  flex,
  children,
}) => (
  <InformationContentContainer flex={flex}>
    {title && <InformationContentHeading>{title}</InformationContentHeading>}
    {children}
  </InformationContentContainer>
);

const InformationContentContainer = styled.div<InformationContentProps>`
  display: flex;
  flex: ${({ flex }: { flex?: number }) => (flex ? flex : '')};
  align-items: center;

  ${media.lessThan(ScreenType.MEDIUM)`
    & + & {
      margin-top: ${Spacing.NORMAL}px;
    };
  `};
`;

const InformationContentHeading = styled.h4`
  ${Typography.Mixin.DISPLAY};
  width: 140px;
  font-size: ${TextSize.LARGE}rem;

  ${media.lessThan(ScreenType.MEDIUM)`
    font-size: ${TextSize.NORMAL}rem;
  `};
`;

type InformationItemProps = {
  title: string;
  body?: string;
  price?: number;
  supple?: string;
};

export const InformationItem: React.FC<InformationItemProps> = ({ title, body, price, supple }) => (
  <InformationDescriptionList>
    <InformationDescriptionTerm>{title}</InformationDescriptionTerm>
    <InformationDescriptionDetail>
      {body}
      {price && (
        <div>
          {price.toLocaleString()}
          <InformationDescriptionDetailSupple>円</InformationDescriptionDetailSupple>
        </div>
      )}
      {supple && <InformationDescriptionSupple>{supple}</InformationDescriptionSupple>}
    </InformationDescriptionDetail>
  </InformationDescriptionList>
);

const InformationDescriptionList = styled.dl`
  & + & {
    margin-left: ${Spacing.X_LARGE}px;
  }
`;

const InformationDescriptionTerm = styled.dt`
  ${Typography.Mixin.DISPLAY};
  margin-bottom: ${Spacing.NORMAL}px;
  color: ${Colors.UI_TEXT_SUB};
  font-size: ${TextSize.XX_SMALL}rem;
  line-height: ${LineHeight.MONOLITHIC};
`;

const InformationDescriptionDetail = styled.dd`
  ${Typography.Mixin.DISPLAY};
  font-size: ${TextSize.XX_LARGE}rem;
  line-height: ${LineHeight.MONOLITHIC};
`;

const InformationDescriptionSupple = styled.p`
  margin-top: ${Spacing.NORMAL}px;
  font-size: ${({ size }: { size?: TextSize }) => size || TextSize.SMALL}rem;
  letter-spacing: ${LetterSpacing.SEMI_WIDE}em;
`;

const InformationDescriptionDetailSupple = styled.small`
  font-size: ${TextSize.SMALL}rem;
`;

export const InformationContentDashLine = styled.hr`
  display: block;
  width: ${Spacing.X_LARGE}px;
  height: 1px;
  margin: 0 ${Spacing.LARGE}px;
  background-color: ${Colors.UI_LINE_NORMAL};
`;

export const InformationNormalText = styled.p`
  ${Typography.Mixin.DISPLAY};
  font-size: ${TextSize.NORMAL}rem;
  letter-spacing: ${LetterSpacing.SEMI_WIDE}em;

  ${media.lessThan(ScreenType.MEDIUM)`
  font-size: ${TextSize.SMALL}rem;
  `}
`;
