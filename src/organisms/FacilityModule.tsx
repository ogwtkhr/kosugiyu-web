import React from 'react';
import {
  GoogleMap,
  FacilityNavigator,
  InformationRow,
  InformationUnit,
  InformationGroupRow,
  InformationGroup,
  InformationContentRow,
  InformationContent,
  InformationItem,
  InformationContentDashLine,
  InformationNormalText,
} from '@/molecules';
import styled from 'styled-components';
import media from 'styled-media-query';
import { ScreenType, BigSpacing, Spacing } from '@/constants';

export const FacilityModule: React.FC = () => {
  return (
    <Container>
      <InformationRow>
        <InformationUnit title="営業時間">
          <InformationGroup>
            <InformationContentRow>
              <InformationContent title="平日" />
              <InformationContent flex={1} verticalAlign="center">
                <InformationItem title="午後" body="15:30" />
                <InformationContentDashLine />
                <InformationItem title="深夜" body="1:45" />
              </InformationContent>
            </InformationContentRow>
            <InformationContentRow>
              <InformationContent title="土・日曜" />
              <InformationContent flex={1} verticalAlign="center">
                <InformationItem title="午前" body="8:00" />
                <InformationContentDashLine />
                <InformationItem title="深夜" body="1:45" />
              </InformationContent>
            </InformationContentRow>
            <InformationContentRow>
              <InformationNormalText>最終受付1:30、木曜定休</InformationNormalText>
            </InformationContentRow>
          </InformationGroup>
        </InformationUnit>

        <InformationUnit title="入浴料金">
          <InformationGroup>
            <InformationContentRow>
              <InformationContent flex={1} collapseOnVerySmallScreen>
                <InformationItem title="大人" price={470} />
                <InformationItem title="中人（小学生）" price={180} />
                <InformationItem title="小人（0〜5歳）" price={80} />
              </InformationContent>
            </InformationContentRow>
            <InformationContentRow>
              <InformationContent flex={1}>
                <InformationItem
                  title="共通入浴券（10枚）"
                  price={4400}
                  supple="1回につき30円お得"
                />
              </InformationContent>
            </InformationContentRow>
          </InformationGroup>
        </InformationUnit>
      </InformationRow>

      <InformationRow>
        <InformationUnit title="サービス">
          <InformationGroupRow>
            <InformationGroup title="貸出タオル">
              <InformationContentRow>
                <InformationContent flex={1} collapseOnVerySmallScreen>
                  <InformationItem title="フェイスタオル" body="無料" supple="（2枚目〜50円）" />
                  <InformationItem title="バスタオル" price={80} supple="（IKEUCHI ORGANIC）" />
                </InformationContent>
              </InformationContentRow>
            </InformationGroup>

            <InformationGroup title="その他設備">
              <InformationContentRow>
                <InformationContent flex={1} collapseOnVerySmallScreen>
                  <InformationItem title="ドライヤー" price={20} supple="（3分）" />
                  <InformationItem title="マッサージ機" price={100} supple="（10分）" />
                  <InformationItem title="Wi-Fi" body="無料" />
                </InformationContent>
              </InformationContentRow>
            </InformationGroup>
          </InformationGroupRow>

          <InformationGroupRow>
            <InformationGroup title="アメニティ">
              <InformationContentRow fix={false}>
                <InformationNormalText>
                  シャンプー、ボディーソープ、コンディショナー、洗顔、クレンジング、化粧水、乳液、ボディクリームなど完備
                </InformationNormalText>
              </InformationContentRow>
            </InformationGroup>
          </InformationGroupRow>
        </InformationUnit>
      </InformationRow>

      <FacilityNavigatorInformationRow>
        <InformationUnit title="施設紹介">
          <FacilityNavigator />
        </InformationUnit>
      </FacilityNavigatorInformationRow>

      <InformationRow>
        <InformationUnit title="アクセス">
          <InformationGroupRow>
            <InformationGroup>
              <InformationContentRow fix={false}>
                <InformationNormalText>
                  高円寺駅北口から純情商店街・庚申通り商店街を経由し徒歩5分
                  <br />
                  〒166-0002 杉並区高円寺北3-32-2 / 03-3337-6198
                </InformationNormalText>
              </InformationContentRow>
            </InformationGroup>
          </InformationGroupRow>
        </InformationUnit>
      </InformationRow>
      <GoogleMap />
    </Container>
  );
};

const Container = styled.section``;

const FacilityNavigatorInformationRow = styled(InformationRow)`
  margin-top: 200px;
  margin-bottom: 200px;
  ${media.lessThan(ScreenType.MEDIUM)`
    margin-top: ${BigSpacing.X_SMALL}px;
    margin-bottom: ${Spacing.XXX_LARGE}px;
  `}
`;
