import React, { useState } from 'react';
import { BaseLayout, Meta } from '@/layouts';
import { usePageInfo } from '@/hooks';
import { Picture, GoogleMap, RippleCircle, CommonTitle, UnderLineText } from '@/components';
import styled from 'styled-components';
import { ChevronUp, ChevronDown } from '@styled-icons/bootstrap';

import { getTextBreakFragment } from '@/util/jsx';
import {
  AspectRatio,
  Colors,
  LineHeight,
  LetterSpacing,
  ModuleWidth,
  ModuleWidthWithUnit,
  ScreenType,
  Spacing,
  TextSize,
  TextWeight,
  Typography,
} from '@/constants';
import media from 'styled-media-query';
import { Shadow } from '@/constants/shadow';
import { rgba } from 'polished';

type FacilityInfo = {
  title: string;
  description: string;
  hide?: boolean;
  zoom?: number;
  position: {
    x: number;
    y: number;
  };
};

type BusinessInfo = {
  title: string;
  description: string;
};

const facilityInfos: FacilityInfo[] = [
  {
    title: '外観',
    description:
      '昭和8年の創業時から変わらない、神社仏閣を思わせる宮造りの木造建築。中央のカーブを描いた唐破風（からはふ）屋根は、関東大震災の復興シンボルとして当時の銭湯建築で流行しました。唐破風の下に垂れた木彫りの鯉は「懸魚（げぎょ）」と呼ばれ、火に弱い木造寺院を火災から守るお守りとして取り付けています。',
    zoom: 0.3,
    position: {
      x: -70,
      y: -60,
    },
  },
  {
    title: '玄関',
    description:
      '風にふんわり揺らいで玄関を彩るのは、鯉ののれん。布絵作家の市川正美さんが、懸魚の鯉をモチーフに絞りや藍染の着物の生地を使って作ったものです。玄関の広々した壁は「小杉湯玄関ギャラリー」として、数ヶ月おきに多様なアーティストの作品が展示されます。ぜひ、お風呂に入る前に立ち止まってご覧ください。',
    position: {
      x: -100,
      y: -110,
    },
  },
  {
    title: '番台',
    description:
      'フロント形式の番台です。大学生から80代まで様々な年代のスタッフが温かくお迎えします。入浴料金の精算、ドリンクの販売、両替など、何かお困りのことがあれば、番台に何でもお声がけください。脱衣所の小窓から声をかけてもらうこともできるので、服を脱いだ後はそちらから。脱衣所や待合室で展示しているグッズもこちらでお買い求めいただけます。',
    position: {
      x: -100,
      y: -90,
    },
  },
  // {
  //   title: '水飲み場',
  //   description:
  //     '浄水器「自然回帰水」を通した地下水の水飲み場。お風呂あがりや、お風呂に入る前の水分補給に。水飲み場の上には木彫りの欄間があります。これは玄関だった頃の名残で、表からも反対側からも楽しめる両面彫りが施されています。どんな柄に見えるか、ぜひ想像してみてください。足下の棚には、小杉湯オリジナル商品や小杉湯と縁のある生産者・企業さんの商品が陳列されています。気になった商品があれば、番台に。',
  //   position: {
  //     x: -110,
  //     y: -90,
  //   },
  // },
  {
    title: '脱衣所',
    description:
      '番台脇の女湯男湯の引き戸を開くと、途端に天井が高くなり開放的な雰囲気に。角材で格子状に区切った格天井と、白い漆喰壁が造る日本的な空間です。鏡のようにピカピカなヒノキ材の床は、素足で歩くと気持ちがいい滑らかさ。',
    position: {
      x: -70,
      y: -80,
    },
  },
  // {
  //   title: '洗面台',
  //   description:
  //     '化粧水、乳液、綿棒、アウトバストリートメントなど、お風呂上がりに必要な基本のアメニティはすべて用意しています。ナノイー搭載のドライヤーも。',
  //   position: {
  //     x: -60,
  //     y: -70,
  //   },
  // },
  // {
  //   title: 'メイクカウンター',
  //   description:
  //     '女湯脱衣所の隅には、メイク用の机が設けられています。自然光や電球色など色味が変わるLEDライト付きの鏡も自由に利用できます。',
  //   position: {
  //     x: -70,
  //     y: -70,
  //   },
  // },
  {
    title: '外観',
    description:
      '昭和8年の創業時から変わらない、神社仏閣を思わせる宮造りの木造建築。中央のカーブを描いた唐破風（からはふ）屋根は、関東大震災の復興シンボルとして当時の銭湯建築で流行しました。唐破風の下に垂れた木彫りの鯉は「懸魚（げぎょ）」と呼ばれ、火に弱い木造寺院を火災から守るお守りとして取り付けています。',
    position: {
      x: -30,
      y: -30,
    },
  },
  {
    title: '浴室',
    description:
      '手前に洗面台、奥には4つの浴槽、高い天井、壁には富士山の壁画という銭湯の典型のような浴室です。白いタイルで構成された浴室は明るく清潔感があり、朝から昼にかけては高い天井の窓から光がサンサンと入り込んで湯面を照らします。洗い場にはシャンプー、コンディショナー、ボディソープ、クレンジング、洗顔料など必要なアメニティは全て揃っています。',
    position: {
      x: -30,
      y: -30,
    },
  },
  // {
  //   title: '変わり湯',
  //   description:
  //     'よもぎ、ゆず、ヒバなど天然素材を使ったお湯を日替わりで楽しむことができます。廃棄せざるを得ない果物などをお風呂に入れて生産者を応援する「もったいない風呂」を、あつ湯とジェットバスで定期的に実施しています。',
  //   position: {
  //     x: -70,
  //     y: -70,
  //   },
  // },
  // {
  //   title: 'ジェットバス（42度）',
  //   description:
  //     '3種類のジェットバスが体の疲れを癒します。リラックスバスで体全体の疲れをほぐし、ジェットエステでコリをピンポイントで刺激するのがオススメです。ハーブや温泉地のお湯など、お風呂は週ごとに変わります。。',
  //   position: {
  //     x: -70,
  //     y: -70,
  //   },
  // },
  // {
  //   title: '水風呂（16~19度）',
  //   description:
  //     'あつ湯との交互浴が楽しめる水風呂。肌触りの柔らかい掛け流しの地下水を、地下90mから汲み上げています。陶器の吐水口は小杉湯女将の手作り。',
  //   position: {
  //     x: -70,
  //     y: -70,
  //   },
  // },
  // {
  //   title: '壁画',
  //   description:
  //     '銭湯絵師・丸山清人さんによる壁画。男湯には「三浦半島からみた富士山」、女湯には「西伊豆からみた富士山」がそれぞれ描かれています。',
  //   position: {
  //     x: -70,
  //     y: -70,
  //   },
  // },
  {
    title: '待合室兼ギャラリー',
    description:
      'お風呂あがりに漫画や絵本を読みながらゆったりできる待合室です。壁は毎月展示が変わるギャラリーになっていて、様々な作品を月替わりで楽しむことができます。',
    position: {
      x: -120,
      y: -90,
    },
  },
  // {
  //   title: 'アイス',
  //   description:
  //     'ブラックモンブランやカバさんアイスなど、コンビニでは購入できないアイスを楽しめます。アイスケース上の棚では、小杉湯オリジナル商品や、コラボグッズを販売中。お会計は番台で。',
  //   position: {
  //     x: -70,
  //     y: -70,
  //   },
  // },
  {
    title: 'コインランドリー',
    description:
      '6台の乾燥機と洗濯機が並びます。10kgまで洗える洗濯乾燥機もあるのでお布団も洗えます。お風呂に入る前に洗濯機に入れて、お風呂上がりに回収するのもあり。女湯側には女性専用のコインランドリーがあり、午後18時以降は、女性脱衣所側の入口からのみご利用いただけます。',
    hide: true,
    position: {
      x: -100,
      y: -90,
    },
  },
  {
    title: '小杉湯となり',
    description:
      '「銭湯のあるくらし」をコンセプトに、 2020年３月にオープンした「小杉湯となり」。お風呂あがりにくつろいだり、 食事をしたり、 本を読んだり仕事をしたりす、 大人から子どもまで 思い思いの過ごし方ができる場所です。2020年８月現在は、新型コロナウイルス感染予防の観点より、会員制のセカンドハウスとして運営中です。',
    hide: true,
    position: {
      x: -70,
      y: -70,
    },
  },
];

// const businessInfo: BusinessInfo[] = [
//   {
//     title: '無料サービス',
//     description:
//       'シャンプー、ボディーソープ、コンディショナー、洗顔、クレンジング、化粧水、乳液、ボディクリームなどアメニティ完備',
//   },
//   {
//     title: 'レンタル',
//     description: 'タオル: 無料（2枚目〜30円）\\n今治タオル: 50円（IKEUCHI ORGANIC）',
//   },
//   {
//     title: 'その他',
//     description: 'ドライヤー: 3分20円\\nマッサージ機: 10分100円\\nWi-Fi: FREE\\nランナー大歓迎',
//   },
//   {
//     title: '営業時間',
//     description:
//       '平日: 15:30〜深夜1:45（最終受付 1:30）\\n土・日曜: 8:00〜深夜1:45（最終受付 1:30）\\n定休日: 木曜日',
//   },
//   {
//     title: '入浴料金',
//     description:
//       '大人: 470円\\n中人: 180円（小学生）\\n小人: 80円（0〜5歳）\\n共通入浴券: 4400円（10枚。1回につき30円お得）',
//   },
// ];

const InformationRow = styled.div`
  display: flex;
  max-width: ${ModuleWidth.SEMI_WIDE}px;
  margin: ${Spacing.XXX_LARGE}px auto;
  ${media.lessThan(ModuleWidthWithUnit.SEMI_WIDE)`
    margin-left: ${Spacing.X_LARGE}px;
    margin-right: ${Spacing.X_LARGE}px;
  `}
`;

const InformationUnit = styled.section`
  flex: 1;
`;

const InformationHeading = styled.h3``;

const InformationContainerRow = styled.div`
  display: flex;
`;

const InformationContainer = styled.div`
  margin: ${Spacing.XX_LARGE}px 0;
  flex: 1;
`;

const InformationContentRow = styled.div`
  display: flex;
  max-width: ${({ fix = true }: { fix?: boolean }) => (fix ? '400px' : '')};
  align-items: center;
  & + & {
    margin-top: ${Spacing.XX_LARGE}px;
  }
`;

const InformationContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  flex: ${({ flex }: { flex?: number }) => (flex ? flex : '')};
`;

const InformationContentHeading = styled.h4`
  ${Typography.Mixin.DISPLAY};
  width: 140px;
  font-size: ${TextSize.LARGE}rem;
`;

const InformationDescriptionList = styled.dl``;

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
`;

const FacilityModule = styled.section``;

const DescriptionContainer = styled.div`
  position: absolute;
  right: 5vw;
  bottom: 5vw;
  width: 600px;
  padding: ${Spacing.X_LARGE}px ${Spacing.XXX_LARGE}px;
  transition: 1s ease;
  border: solid 2px ${Colors.UI_LINE_NORMAL};
  background-color: ${Colors.ABSTRACT_WHITE};
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

const FacilityView = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;

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
  width: 200vw;
  height: 155vw;
  top: 0;
  left: 0;
  transition: 1s ease;
`;

const FacilityInfoControls = styled.div`
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
  text-shadow: ${`0 ${Spacing.SMALL}px ${Spacing.X_LARGE}px ${rgba(Colors.ABSTRACT_BLACK, 0.6)}`};
  font-size: 2rem;
`;

const IndicatorCurrent = styled.span`
  font-size: 4rem;
`;

const UpButton = styled(ChevronUp)`
  cursor: pointer;
  /* filter: drop-shadow(${`0 ${Spacing.SMALL}px 2px ${rgba(Colors.ABSTRACT_BLACK, 0.6)}`}); */
`;

const DownButton = styled(ChevronDown)`
  cursor: pointer;
  // filter: drop-shadow(${`0 ${Spacing.SMALL}px 2px ${rgba(Colors.ABSTRACT_BLACK, 0.6)}`});
`;

const OverWindow = styled.div``;

const BusinessModule = styled.section`
  position: relative;
`;

const WindowContainer = styled.div`
  position: fixed;
  width: 800px;
  top: 100px;
  left: 100px;
`;

const FacilityPage: React.FC = () => {
  const { title: pageTitle, description: pageDescription } = usePageInfo({ id: 'facility' });
  const [currentIndex, setCurrentIndex] = useState(0);
  const { title, description, position, hide, zoom = 1 } = facilityInfos[currentIndex];
  return (
    <>
      <BaseLayout>
        <Meta title={pageTitle} description={pageDescription} />

        <CommonTitle title="営業・施設案内" imagePath="photos/facility/hero.jpg" />
        <InformationRow>
          <InformationUnit>
            <InformationHeading>
              <UnderLineText textSize={TextSize.X_LARGE}>営業時間</UnderLineText>
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
              <UnderLineText textSize={TextSize.X_LARGE}>入浴料金</UnderLineText>
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
            <FacilityModule>
              <FacilityView>
                <BigImageContainer
                  style={{
                    top: `${position.y}vw`,
                    left: `${position.x}vw`,
                    transform: `scale(${zoom})`,
                    visibility: hide ? 'hidden' : 'visible',
                  }}
                >
                  <Picture relativePath="illustrations/facility/all_facilities.jpg" />
                </BigImageContainer>

                {currentIndex === 2 && (
                  <RippleCircle
                    style={{
                      top: '33vw',
                      left: '40vw',
                    }}
                  />
                )}
                <DescriptionContainer>
                  <DescriptionTitle>{title}</DescriptionTitle>
                  <DescriptionBody>{description}</DescriptionBody>
                  <DescriptionPhoto>
                    <Picture relativePath={'photos/facility/facility_photo_1.jpg'} />
                  </DescriptionPhoto>
                  {/* <FacilityInfoControls>
                <UpButton
                  color={Colors.ABSTRACT_WHITE}
                  onClick={() => {
                    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
                  }}
                />
                <Indicator>
                  <IndicatorCurrent>{currentIndex + 1}</IndicatorCurrent>/{facilityInfos.length}
                </Indicator>
                <DownButton
                  color={Colors.ABSTRACT_WHITE}
                  onClick={() => {
                    if (currentIndex < facilityInfos.length - 1) setCurrentIndex(currentIndex + 1);
                  }}
                />
              </FacilityInfoControls> */}
                </DescriptionContainer>
              </FacilityView>
            </FacilityModule>
          </InformationUnit>
        </InformationRow>

        <InformationRow>
          <InformationUnit>
            <InformationHeading>
              <UnderLineText textSize={TextSize.X_LARGE}>サービス</UnderLineText>
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
                          <InformationDescriptionDetailSupple>
                            円
                          </InformationDescriptionDetailSupple>
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
                          <InformationDescriptionDetailSupple>
                            円
                          </InformationDescriptionDetailSupple>
                        </div>
                        <InformationDescriptionSupple>（3分）</InformationDescriptionSupple>
                      </InformationDescriptionDetail>
                    </InformationDescriptionList>
                    <InformationDescriptionList>
                      <InformationDescriptionTerm>マッサージ機</InformationDescriptionTerm>
                      <InformationDescriptionDetail>
                        <div>
                          100
                          <InformationDescriptionDetailSupple>
                            円
                          </InformationDescriptionDetailSupple>
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
              <UnderLineText textSize={TextSize.X_LARGE}>アクセス</UnderLineText>
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

        <BusinessModule>
          <GoogleMap />
        </BusinessModule>
        <OverWindow></OverWindow>
      </BaseLayout>
    </>
  );
};

export default FacilityPage;
