import React from 'react';
// import { graphql, useStaticQuery } from 'gatsby';
// import GatsbyImage, { FluidObject } from 'gatsby-image';
// import styled from 'styled-components';
// import media from 'styled-media-query';
// import { rgba } from 'polished';

import { BaseLayout, SEO } from '@/layouts';
import { TopModule, IntroModule } from '@/modules';

const IndexPage: React.FC = () => {
  return (
    <BaseLayout>
      <SEO />
      <TopModule />
      <IntroModule />
    </BaseLayout>
  );
};

// const ABSTRACT_BLACK = '#000000';
// const ABSTRACT_WHITE = '#ffffff';
// const SEMANTIC_MAIN = rgba(ABSTRACT_BLACK, 0.75);
// const SEMANTIC_WEAKEN = rgba(ABSTRACT_BLACK, 0.55);
// const BLAND_GRAY = '#343534';

// const getSpacingUnit = (value: number): string => `${value * 8}px`;

// const COLOR = {
//   ABSTRACT_BLACK,
//   ABSTRACT_WHITE,
//   BLAND_GRAY,
//   SEMANTIC_MAIN,
//   SEMANTIC_WEAKEN,
//   UI_TEXT_NORMAL: SEMANTIC_MAIN,
//   UI_TEXT_WEAKEN: SEMANTIC_WEAKEN,
//   UI_TEXT_WITH_DARK_BACKGROUND: ABSTRACT_WHITE,
// };

export default IndexPage;
