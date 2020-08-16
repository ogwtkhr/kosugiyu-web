import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import GatsbyImage, { FluidObject } from 'gatsby-image';
import styled from 'styled-components';
import media from 'styled-media-query';
import { rgba } from 'polished';
import { Twitter } from 'styled-icons/boxicons-logos';

import { BaseLayout, SEO } from '@/layouts';
import { Logo, GoogleMap } from '@/components';

const URL_TWITTER = 'https://twitter.com/kosugiyu';

const IndexPage: React.FC = () => {
  return (
    <BaseLayout>
      <SEO />
      <HeaderLogo>
        <Logo />
      </HeaderLogo>
      <SnsIcons>
        <SnsLink href={URL_TWITTER} target="_blank" rel="noopener noreferrer">
          <Twitter />
        </SnsLink>
      </SnsIcons>
      <HeroImage>
        <HeroImageInner>test</HeroImageInner>
      </HeroImage>
      <Notice>
        <NoticeHeader>今後の営業について</NoticeHeader>
        <p>
          新型コロナウイルス感染防止対策として、ソーシャルディスタンスを確保するため、当面の間、会員に限定しての営業とさせていただきます。
          <br />
          会員の募集や今後の営業につきましては、随時
          <a href={URL_TWITTER} target="_blank" rel="noopener noreferrer">
            公式Twitter
          </a>
          などでお知らせいたします。
        </p>
      </Notice>

      <MainTextContainer>
        <NormalModule>
          <NormalHeading>小杉湯となりについて</NormalHeading>
          <MainTextBody>
            2020年3月16日、銭湯のあるくらしをコンセプトにした、「小杉湯となり」がオープンしました。
          </MainTextBody>
          <MainTextBody>
            場所は、杉並区・高円寺にある銭湯「小杉湯」のとなり。銭湯が街のお風呂であるように、街に開かれたもう一つの家のような場所です。
          </MainTextBody>
          <MainTextBody>
            いつもより大きな風呂に入ったあとに、手づくりのご飯を食べたり、仕事をした後にくつろいだり。自分の家に大きな台所や書斎がなくても、ここに来れば、くらしの余白を感じられる場所を目指しています。
          </MainTextBody>
          <MainTextBody>
            また、銭湯や高円寺がはじめての方にも、その魅力を伝えていく拠点になればと考えています。
          </MainTextBody>
        </NormalModule>
        <NormalModule heading="アクセス">
          <AccessTextBody>
            〒166-0002 東京都杉並区高円寺北3丁目32−16−2
            <br />
            JR中央線「高円寺」駅 徒歩5分
          </AccessTextBody>
        </NormalModule>
      </MainTextContainer>

      <MapContainer>
        <GoogleMap />
      </MapContainer>
      <FlexContainer>
        <Button
          href="https://docs.google.com/forms/d/e/1FAIpQLSfjxLjnxQisMgAS-sHCZKoWDC9Bk_gcqviljuTE8NkNvX94Jg/viewform"
          target="_blank"
        >
          お問い合わせ
        </Button>
      </FlexContainer>
    </BaseLayout>
  );
};

const ABSTRACT_BLACK = '#000000';
const ABSTRACT_WHITE = '#ffffff';
const SEMANTIC_MAIN = rgba(ABSTRACT_BLACK, 0.75);
const SEMANTIC_WEAKEN = rgba(ABSTRACT_BLACK, 0.55);
const BLAND_GRAY = '#343534';

const getSpacingUnit = (value: number): string => `${value * 8}px`;

const COLOR = {
  ABSTRACT_BLACK,
  ABSTRACT_WHITE,
  BLAND_GRAY,
  SEMANTIC_MAIN,
  SEMANTIC_WEAKEN,
  UI_TEXT_NORMAL: SEMANTIC_MAIN,
  UI_TEXT_WEAKEN: SEMANTIC_WEAKEN,
  UI_TEXT_WITH_DARK_BACKGROUND: ABSTRACT_WHITE,
};

const LAYER = {
  BASE: 1,
  OVER: 2,
};

const SCREEN_BREAK_POINT = '880px';
const CONTENT_MAX_WIDTH = '480px';

const NormalModule: React.FC<{
  heading?: string;
  body?: string;
}> = ({ heading, body, children }) => (
  <StyledModule>
    {heading && <NormalHeading>{heading}</NormalHeading>}
    {body && <MainTextBody>{body}</MainTextBody>}
    {children}
  </StyledModule>
);

const ListModuleTitle = styled.dt`
  font-weight: bold;
`;

const NormalList = styled.ul``;

const NormalListItem = styled.li``;

const Notice = styled.article`
  max-width: ${CONTENT_MAX_WIDTH};
  margin: 0 auto 56px;
  padding: 16px;
  color: #de1b1b;

  & a {
    &:link,
    &:visited {
      color: #de1b1b;
    }
  }
`;

const NoticeHeader = styled.h2`
  margin-bottom: 16px;
  font-size: 2rem;
  font-weight: 500;
  text-align: center;
`;

const StyledModule = styled.div`
  margin-bottom: ${getSpacingUnit(5)};
  color: ${COLOR.UI_TEXT_WEAKEN};
`;

const InlineImageContainer = styled.div`
  margin-bottom: ${getSpacingUnit(5)};
  overflow: hidden;
  border-radius: 10px;
`;

const NormalHeading = styled.h2`
  margin-bottom: ${getSpacingUnit(4)};
  color: ${COLOR.UI_TEXT_NORMAL};
  font-size: 2.4rem;
  text-align: center;
`;

const MainTextBody = styled.p`
  margin-bottom: ${getSpacingUnit(2)};
`;

const AccessTextBody = styled.p`
  margin-bottom: ${getSpacingUnit(2)};
  color: ${COLOR.UI_TEXT_WEAKEN};
  text-align: center;
  white-space: pre-wrap;
`;

const MainTextContainer = styled.article`
  max-width: ${CONTENT_MAX_WIDTH};
  margin: 0 auto;
  padding: 0 ${getSpacingUnit(2)};
`;

const Button = styled.a`
  display: block;
  width: 240px;
  padding: ${getSpacingUnit(1)};
  transition: 0.5s ease;
  border: solid 2px ${COLOR.SEMANTIC_WEAKEN};
  color: ${COLOR.UI_TEXT_NORMAL};
  font-weight: bold;
  text-align: center;
  text-decoration: none;

  &:hover {
    background-color: ${COLOR.SEMANTIC_MAIN};
    color: ${COLOR.UI_TEXT_WITH_DARK_BACKGROUND};
  }
`;

const HeroImage = styled.div`
  position: relative;
  z-index: ${LAYER.BASE};
  overflow: hidden;
`;

const HeroImageInner = styled.div`
  max-width: 670px;
  margin: 0 auto;
  padding: ${getSpacingUnit(10)} 0;
  ${media.lessThan(SCREEN_BREAK_POINT)`
    position: relative;
    margin-top: 200px;
    margin-left: 0;
    margin-right: 0;
    width: 500px;
    left: 50%;
    transform: translateX(-50%);
  `}
`;

const HeaderLogo = styled.h1`
  position: absolute;
  z-index: ${LAYER.OVER};
  top: 36px;
  left: 36px;
  width: 120px;
  height: 142px;
  ${media.lessThan(SCREEN_BREAK_POINT)`
    top: ${getSpacingUnit(10)};
    left: 50%;
    transform: translateX(-50%);
  `}
`;

const SnsIcons = styled.h1`
  position: absolute;
  z-index: ${LAYER.OVER};
  top: 16px;
  right: 16px;
  width: auto;
  height: 40px;
`;

const SnsLink = styled.a`
  display: block;
  width: 40px;
  height: 40px;
  transition: opacity 0.5s ease;
  opacity: 1;

  &:link,
  &:visited {
    color: ${COLOR.BLAND_GRAY};
  }

  &:hover {
    opacity: 0.8;
  }

  ${media.lessThan(SCREEN_BREAK_POINT)`
    width: 32px;
    height: 32px;
  `}
`;

const MapContainer = styled.section`
  margin-bottom: ${getSpacingUnit(6)};
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default IndexPage;
