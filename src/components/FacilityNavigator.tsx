import React, { useState } from 'react';
import { BaseLayout, Meta } from '@/layouts';
import { usePageInfo } from '@/hooks';
import { Picture, GoogleMap, RippleCircle, CommonTitle, UnderLineText } from '@/components';
import styled from 'styled-components';

import { getTextBreakFragment } from '@/util/jsx';
import { AspectRatio, Colors, ScreenType, Spacing, TextSize, Typography } from '@/constants';
import media from 'styled-media-query';
import { Shadow } from '@/constants/shadow';
import { rgba } from 'polished';

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

export const FacilityNavigator: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { title, description, position, hide, zoom = 1 } = facilityInfos[currentIndex];
  return (
    <Container>
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
          <FacilityInfoControls>
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
          </FacilityInfoControls>
        </DescriptionContainer>
      </FacilityView>
    </Container>
  );
};

const Container = styled.div``;

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

const UpButton = styled.div`
  cursor: pointer;
  /* filter: drop-shadow(${`0 ${Spacing.SMALL}px 2px ${rgba(Colors.ABSTRACT_BLACK, 0.6)}`}); */
`;

const DownButton = styled.div`
  cursor: pointer;
  // filter: drop-shadow(${`0 ${Spacing.SMALL}px 2px ${rgba(Colors.ABSTRACT_BLACK, 0.6)}`});
`;

const BusinessModule = styled.section`
  position: relative;
`;

const WindowContainer = styled.div`
  position: fixed;
  width: 800px;
  top: 100px;
  left: 100px;
`;
