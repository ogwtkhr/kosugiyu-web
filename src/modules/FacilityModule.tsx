import React from 'react';
import { GoogleMap, UnderLineText, FacilityNavigator } from '@/components';
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

const Container = styled.section``;

const InformationRow = styled.div`
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

const InformationUnit = styled.section`
  flex: 1;

  ${media.lessThan(ScreenType.MEDIUM)`
    & + & {
       margin-top: ${BigSpacing.X_SMALL}px;
    }
  `}
`;

const InformationHeading = styled.h3``;

const InformationContainerRow = styled.div`
  display: flex;
  ${media.lessThan(ScreenType.MEDIUM)`
    display: block;
  `}
`;

const InformationContainer = styled.div`
  margin: ${Spacing.XX_LARGE}px 0;
  flex: 1;
`;

type InformationContentRowProps = { fix?: boolean };

const InformationContentRow = styled.div<InformationContentRowProps>`
  display: flex;
  max-width: ${({ fix = true }) => (fix ? '400px' : '')};
  align-items: center;

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

const InformationContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: top;
  justify-content: flex-start;
  flex: ${({ flex }: { flex?: number }) => (flex ? flex : '')};

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

const InformationDescriptionList = styled.dl`
  & + & {
    margin-left: ${Spacing.X_LARGE}px;
  }
`;

const InformationDescriptionTerm = styled.dt`
  ${Typography.Mixin.DISPLAY};
  line-height: ${LineHeight.MONOLITHIC};
  color: ${Colors.UI_TEXT_SUB};
  margin-bottom: ${Spacing.NORMAL}px;
  font-size: ${TextSize.XX_SMALL}rem;
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

const InformationContentDashLine = styled.hr`
  display: block;
  margin: 0 ${Spacing.LARGE}px;
  width: ${Spacing.X_LARGE}px;
  height: 1px;
  background-color: ${Colors.UI_LINE_NORMAL};
`;

const InformationNormalText = styled.p`
  ${Typography.Mixin.DISPLAY};
  font-size: ${TextSize.NORMAL}rem;
  letter-spacing: ${LetterSpacing.SEMI_WIDE}em;

  ${media.lessThan(ScreenType.MEDIUM)`
  font-size: ${TextSize.SMALL}rem;
  `}
`;

export const FacilityModule: React.FC = () => {
  return (
    <Container>
      <InformationRow>
        <InformationUnit>
          <InformationHeading>
            <UnderLineText>営業時間</UnderLineText>
          </InformationHeading>
          <InformationContainer>
            <InformationContentRow>
              <InformationContent>
                <InformationContentHeading>平日</InformationContentHeading>
              </InformationContent>
              <InformationContent flex={1}>
                <InformationDescriptionList>
                  <InformationDescriptionTerm>午後</InformationDescriptionTerm>
                  <InformationDescriptionDetail>15:30</InformationDescriptionDetail>
                </InformationDescriptionList>
                <InformationContentDashLine />
                <InformationDescriptionList>
                  <InformationDescriptionTerm>深夜</InformationDescriptionTerm>
                  <InformationDescriptionDetail>1:45</InformationDescriptionDetail>
                </InformationDescriptionList>
              </InformationContent>
            </InformationContentRow>
            <InformationContentRow>
              <InformationContent>
                <InformationContentHeading>土・日曜</InformationContentHeading>
              </InformationContent>
              <InformationContent flex={1}>
                <InformationDescriptionList>
                  <InformationDescriptionTerm>午前</InformationDescriptionTerm>
                  <InformationDescriptionDetail>8:00</InformationDescriptionDetail>
                </InformationDescriptionList>
                <InformationContentDashLine />
                <InformationDescriptionList>
                  <InformationDescriptionTerm>深夜</InformationDescriptionTerm>
                  <InformationDescriptionDetail>1:45</InformationDescriptionDetail>
                </InformationDescriptionList>
              </InformationContent>
            </InformationContentRow>
            <InformationContentRow>
              <InformationNormalText>最終受付1:30、木曜定休</InformationNormalText>
            </InformationContentRow>
          </InformationContainer>
        </InformationUnit>

        <InformationUnit>
          <InformationHeading>
            <UnderLineText>入浴料金</UnderLineText>
          </InformationHeading>
          <InformationContainer>
            <InformationContentRow>
              <InformationContent flex={1}>
                <InformationDescriptionList>
                  <InformationDescriptionTerm>大人</InformationDescriptionTerm>
                  <InformationDescriptionDetail>
                    470<InformationDescriptionDetailSupple>円</InformationDescriptionDetailSupple>
                  </InformationDescriptionDetail>
                </InformationDescriptionList>
                <InformationDescriptionList>
                  <InformationDescriptionTerm>中人（小学生）</InformationDescriptionTerm>
                  <InformationDescriptionDetail>
                    180<InformationDescriptionDetailSupple>円</InformationDescriptionDetailSupple>
                  </InformationDescriptionDetail>
                </InformationDescriptionList>
                <InformationDescriptionList>
                  <InformationDescriptionTerm>小人（0〜5歳）</InformationDescriptionTerm>
                  <InformationDescriptionDetail>
                    80<InformationDescriptionDetailSupple>円</InformationDescriptionDetailSupple>
                  </InformationDescriptionDetail>
                </InformationDescriptionList>
              </InformationContent>
            </InformationContentRow>
            <InformationContentRow>
              <InformationContent flex={1}>
                <InformationDescriptionList>
                  <InformationDescriptionTerm>共通入浴券（10枚）</InformationDescriptionTerm>
                  <InformationDescriptionDetail>
                    <div>
                      4,400
                      <InformationDescriptionDetailSupple>円</InformationDescriptionDetailSupple>
                    </div>
                    <InformationDescriptionSupple>1回につき30円お得</InformationDescriptionSupple>
                  </InformationDescriptionDetail>
                </InformationDescriptionList>
              </InformationContent>
            </InformationContentRow>
          </InformationContainer>
        </InformationUnit>
      </InformationRow>
      <InformationRow>
        <InformationUnit>
          <InformationHeading>
            <UnderLineText>施設紹介</UnderLineText>
          </InformationHeading>
          <FacilityNavigator />
        </InformationUnit>
      </InformationRow>
      <InformationRow>
        <InformationUnit>
          <InformationHeading>
            <UnderLineText>サービス</UnderLineText>
          </InformationHeading>
          <InformationContainerRow>
            <InformationContainer>
              <InformationContentRow>
                <InformationContent>
                  <InformationContentHeading>貸出タオル</InformationContentHeading>
                </InformationContent>
              </InformationContentRow>
              <InformationContentRow>
                <InformationContent flex={1}>
                  <InformationDescriptionList>
                    <InformationDescriptionTerm>フェイスタオル</InformationDescriptionTerm>
                    <InformationDescriptionDetail>
                      <div>無料</div>
                      <InformationDescriptionSupple>（2枚目〜50円）</InformationDescriptionSupple>
                    </InformationDescriptionDetail>
                  </InformationDescriptionList>
                  <InformationDescriptionList>
                    <InformationDescriptionTerm>バスタオル</InformationDescriptionTerm>
                    <InformationDescriptionDetail>
                      <div>
                        180
                        <InformationDescriptionDetailSupple>円</InformationDescriptionDetailSupple>
                      </div>
                      <InformationDescriptionSupple>
                        （IKEUCHI ORGANIC）
                      </InformationDescriptionSupple>
                    </InformationDescriptionDetail>
                  </InformationDescriptionList>
                </InformationContent>
              </InformationContentRow>
            </InformationContainer>

            <InformationContainer>
              <InformationContentRow>
                <InformationContent>
                  <InformationContentHeading>その他設備</InformationContentHeading>
                </InformationContent>
              </InformationContentRow>
              <InformationContentRow>
                <InformationContent flex={1}>
                  <InformationDescriptionList>
                    <InformationDescriptionTerm>ドライヤー</InformationDescriptionTerm>
                    <InformationDescriptionDetail>
                      <div>
                        20
                        <InformationDescriptionDetailSupple>円</InformationDescriptionDetailSupple>
                      </div>
                      <InformationDescriptionSupple>（3分）</InformationDescriptionSupple>
                    </InformationDescriptionDetail>
                  </InformationDescriptionList>
                  <InformationDescriptionList>
                    <InformationDescriptionTerm>マッサージ機</InformationDescriptionTerm>
                    <InformationDescriptionDetail>
                      <div>
                        100
                        <InformationDescriptionDetailSupple>円</InformationDescriptionDetailSupple>
                      </div>
                      <InformationDescriptionSupple>（10分）</InformationDescriptionSupple>
                    </InformationDescriptionDetail>
                  </InformationDescriptionList>
                  <InformationDescriptionList>
                    <InformationDescriptionTerm>Wi-Fi</InformationDescriptionTerm>
                    <InformationDescriptionDetail>
                      <div>無料</div>
                    </InformationDescriptionDetail>
                  </InformationDescriptionList>
                </InformationContent>
              </InformationContentRow>
            </InformationContainer>
          </InformationContainerRow>

          <InformationContainerRow>
            <InformationContainer>
              <InformationContentRow>
                <InformationContent>
                  <InformationContentHeading>アメニティ</InformationContentHeading>
                </InformationContent>
              </InformationContentRow>
              <InformationContentRow fix={false}>
                <InformationNormalText>
                  シャンプー、ボディーソープ、コンディショナー、洗顔、クレンジング、化粧水、乳液、ボディクリームなど完備
                </InformationNormalText>
              </InformationContentRow>
            </InformationContainer>
          </InformationContainerRow>
        </InformationUnit>
      </InformationRow>
      <InformationRow>
        <InformationUnit>
          <InformationHeading>
            <UnderLineText>アクセス</UnderLineText>
          </InformationHeading>
          <InformationContainerRow>
            <InformationContainer>
              <InformationContentRow fix={false}>
                <InformationNormalText>
                  高円寺駅北口から純情商店街・更新通り商店街を経由し徒歩5分
                  <br />
                  〒166-0002 杉並区高円寺北3-32-2 / 03-3337-6198
                </InformationNormalText>
              </InformationContentRow>
            </InformationContainer>
          </InformationContainerRow>
        </InformationUnit>
      </InformationRow>
      <GoogleMap />
    </Container>
  );
};
