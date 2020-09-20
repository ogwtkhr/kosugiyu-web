/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import { Footer } from './Footer';
import { GlobalStyle } from './GlobalStyle';
import 'intersection-observer';
import 'reset.css';

import { SiteTitleQuery } from '@/types';
import { Menu } from '@/components';

export const BaseLayout: React.FC = ({ children }) => {
  const data: SiteTitleQuery = useStaticQuery(graphql`
    query SiteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <GlobalStyle />
      <Main>{children}</Main>
      <Footer />
      <Menu />
    </>
  );
};

const Main = styled.main``;

export default BaseLayout;
