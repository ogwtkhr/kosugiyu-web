import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Query } from '@/types';
// import GatsbyImage, { FluidObject } from 'gatsby-image';
// import styled from 'styled-components';
// import media from 'styled-media-query';
// import { rgba } from 'polished';

import { BaseLayout, SEO } from '@/layouts';
import { TopModule, IntroModule } from '@/modules';

const IndexPage: React.FC = () => {
  const data: Query = useStaticQuery(graphql`
    {
      allMicrocmsPersons(sort: { fields: [createdAt], order: DESC }) {
        nodes {
          id
          title
          body
          slug
        }
      }
    }
  `);
  return (
    <>
      {/* {data.allMicrocmsPersons.nodes.map((entry) => (
        <div>{entry?.slug}</div>
      ))} */}

      <BaseLayout>
        <SEO />
        <TopModule />
        <IntroModule />
      </BaseLayout>
    </>
  );
};

export default IndexPage;
