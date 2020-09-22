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
import Header from './Header';

type BaseLayoutProps = {
  useHeader?: boolean;
};

export const BaseLayout: React.FC<BaseLayoutProps> = ({ useHeader, children }) => {
  const data = useStaticQuery<SiteTitleQuery>(graphql`
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
      {useHeader && <Header siteTitle={data.site?.siteMetadata?.title || ''} />}
      <GlobalStyle />
      <Main>{children}</Main>
      <Footer />
      <Menu />
    </>
  );
};

const Main = styled.main``;

export default BaseLayout;
