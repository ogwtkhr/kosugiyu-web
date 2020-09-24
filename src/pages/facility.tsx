import React, { useState } from 'react';
import { BaseLayout, Meta } from '@/layouts';
import { usePageInfo } from '@/hooks';
import { FacilityLogo, BusinessLogo, Picture, GoogleMap } from '@/components';
import styled from 'styled-components';
import { ChevronUp, ChevronDown } from '@styled-icons/bootstrap';
import {
  AspectRatio,
  Colors,
  LineHeight,
  ScreenType,
  Spacing,
  TextSize,
  TextWeight,
  TypeFace,
  TypeStyle,
  Typography,
} from '@/constants';
import media from 'styled-media-query';
import { Shadow } from '@/constants/shadow';

type FacilityInfo = {
  title: string;
  description: string;
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
    title: '玄関',
    description:
      '昭和8年の創業時から変わらない、神社仏閣を思わせる宮造りの木造建築。中央のカーブを描いた唐破風（からはふ）屋根は、関東大震災の復興シンボルとして当時の銭湯建築で流行しました。唐破風の下に垂れた木彫りの鯉は「懸魚（げぎょ）」と呼ばれ、火に弱い木造寺院を火災から守るお守りとして取り付けています。',
    position: {
      x: -110,
      y: -110,
    },
  },
];

const businessInfo: BusinessInfo[] = [
  {
    title: '無料サービス',
    description:
      'シャンプー、ボディーソープ、コンディショナー、洗顔、クレンジング、化粧水、乳液、ボディクリームなどアメニティ完備',
  },
  {
    title: 'レンタル',
    description: 'タオル: 無料（2枚目〜30円）\\n今治タオル: 50円（IKEUCHI ORGANIC）',
  },
  {
    title: 'その他',
    description: 'ドライヤー: 3分20円\\nマッサージ機: 10分100円\\nWi-Fi: FREE\\nランナー大歓迎',
  },
  {
    title: '営業時間',
    description:
      '平日: 15:30〜深夜1:45（最終受付 1:30）\\n土・日曜: 8:00〜深夜1:45（最終受付 1:30）\\n定休日: 木曜日',
  },
  {
    title: '入浴料金',
    description:
      '大人: 470円\\n中人: 180円（小学生）\\n小人: 80円（0〜5歳）\\n共通入浴券: 4400円（10枚。1回につき30円お得）',
  },
];

const getTextBreakFragment = (str: string): JSX.Element[] => {
  const array = str.split(/\\n/);
  return array.map((textFragment, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <React.Fragment key={index}>
      {textFragment}
      {index < array.length - 1 && <br />}
    </React.Fragment>
  ));
};

const FacilityPage: React.FC = () => {
  const { title: pageTitle, description: pageDescription } = usePageInfo({ id: 'facility' });
  const [currentIndex, setCurrentIndex] = useState(0);
  const { title, description, position } = facilityInfos[currentIndex];
  return (
    <>
      <BaseLayout>
        <Meta title={pageTitle} description={pageDescription} />
        <FacilityModule>
          <FacilityView>
            <BigImageContainer
              style={{
                top: `${position.y}vw`,
                left: `${position.x}vw`,
              }}
            >
              <Picture relativePath="illustrations/facility/all_facilities.jpg" />
            </BigImageContainer>
            <DescriptionContainer>
              <DescriptionTitle>{title}</DescriptionTitle>
              <DescriptionBody>{description}</DescriptionBody>
              <DescriptionPhoto />
            </DescriptionContainer>
            <ModuleHeading>
              <FacilityLogo />
            </ModuleHeading>
          </FacilityView>
        </FacilityModule>
        <BuissinessModule>
          <ModuleHeading>
            <BusinessLogo />
          </ModuleHeading>
          <BusinessContents>
            {businessInfo.map(({ title, description }) => {
              return (
                <BusinessContent key={title}>
                  <BusinessTitle>{title}</BusinessTitle>
                  <p>{getTextBreakFragment(description)}</p>
                </BusinessContent>
              );
            })}
          </BusinessContents>
          <GoogleMap />
        </BuissinessModule>
      </BaseLayout>
    </>
  );
};
const FacilityModule = styled.section``;

const DescriptionContainer = styled.div`
  padding: ${Spacing.X_LARGE}px;
  position: absolute;
  right: 5vw;
  bottom: 5vw;
  width: 600px;
  background-color: ${Colors.ABSTRACT_WHITE};
  /* box-shadow: ${Shadow.GRAY}; */
`;

const DescriptionTitle = styled.h3`
  ${Typography.Mixin.EXTENDED};
  font-weight: ${TextWeight.BOLD};
  font-size: ${TextSize.X_LARGE}rem;
`;

const DescriptionBody = styled.p`
  ${Typography.Mixin.EXTENDED};
  font-size: ${TextSize.SMALL}rem;
`;

const DescriptionPhoto = styled.div`
  top: -150px;
  right: -${Spacing.XX_LARGE}px;
  position: absolute;
  width: 300px;
  background-color: gray;
  /* box-shadow: ${Shadow.GRAY}; */

  &::after {
    content: '';
    display: block;
    padding-bottom: ${AspectRatio.R_4_BY_3}%;
  }
`;

const FacilityView = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;

  &::after {
    content: '';
    display: block;
    padding-bottom: 60%;

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

const ModuleHeading = styled.div`
  width: 60px;
  height: 200px;
  position: absolute;
  top: ${Spacing.XX_LARGE}px;
  left: ${Spacing.XX_LARGE}px;
  /* mix-blend-mode: difference; */
`;

const UpButton = styled(ChevronUp)`
  position: absolute;
`;
const DownButton = styled(ChevronUp)`
  position: absolute;
`;

const BuissinessModule = styled.section`
  position: relative;
`;

const BusinessContents = styled.ul`
  max-width: 800px;
  margin: 0 auto;
`;

const BusinessContent = styled.li`
  margin: ${Spacing.XX_LARGE}px;
`;

const BusinessTitle = styled.h3`
  ${Typography.Mixin.EXTENDED};
  font-weight: ${TextWeight.BOLD};
  font-size: ${TextSize.LARGE}rem;
`;
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   top: 0;
//   left: 0;
//   transition: 1s ease;
// `;

export default FacilityPage;
