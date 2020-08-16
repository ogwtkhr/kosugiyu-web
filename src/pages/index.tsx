import React from 'react';
// import { graphql, useStaticQuery } from 'gatsby';
// import GatsbyImage, { FluidObject } from 'gatsby-image';
import styled from 'styled-components';
import media from 'styled-media-query';
import { rgba } from 'polished';

import { BaseLayout, SEO } from '@/layouts';
import { TopModule } from '@/modules';

const URL_TWITTER = 'https://twitter.com/kosugiyu';

const IndexPage: React.FC = () => {
  return (
    <BaseLayout>
      <SEO />
      <TopModule />

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

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default IndexPage;
