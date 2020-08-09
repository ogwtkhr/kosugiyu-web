import React from 'react';
import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import { Module } from '@/layouts';
import { GoogleMap } from '@/components';
import { SCREEN_TYPE, SPACING, COLORS } from '@/constants';
import { IntersectionFadeIn } from '@/animations';

export const AccessModule: React.FC = () => {
  return (
    <Module title="アクセス・営業案内">
      <IntersectionFadeIn>
        <MainText>
          〒166-0002 東京都杉並区高円寺北3丁目32−16−2
          <br />
          JR中央線「高円寺」駅 徒歩5分
        </MainText>
        <GoogleMap />
        <List>
          <ListLabel>営業時間</ListLabel>
          <ListContent>
            15時〜25時（ラストオーダー24時）
            <br />
            ※日曜のみ9時〜25時（ラストオーダー24時）
          </ListContent>
        </List>
        <List>
          <ListLabel>定休日</ListLabel>
          <ListContent>毎週木曜日</ListContent>
        </List>
      </IntersectionFadeIn>
    </Module>
  );
};

const baseTextStyle = css`
  margin-bottom: ${SPACING.XX_LARGE}px;
  text-align: center;
`;

const MainText = styled.p`
  ${baseTextStyle}
`;

const ListLabel = styled.dt`
  ${media.greaterThan(SCREEN_TYPE.MEDIUM)`
    display: inline-block;
    width: 200px;
  `}
  ${media.lessThan(SCREEN_TYPE.MEDIUM)`
    width: 100%;
  `}
  margin-bottom: ${SPACING.NORMAL}px;
  padding: ${SPACING.SMALL}px ${SPACING.X_LARGE}px;
  background-color: ${COLORS.UI_BASE};
  color: ${COLORS.UI_TEXT_DARK_BACKGROUND};
`;

const ListContent = styled.dd``;

const List = styled.dl`
  margin-top: ${SPACING.XX_LARGE}px;
  ${baseTextStyle}
`;

export default AccessModule;
