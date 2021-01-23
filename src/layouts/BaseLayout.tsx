import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import { Footer } from './Footer';
import { GlobalStyle } from './GlobalStyle';
import 'intersection-observer';
import 'reset.css';

import { SiteTitleQuery } from '@/types';
import { Menu } from '@/components';
import { Colors } from '@/constants';
import Header from './Header';
import Loading from './Loading';

type BaseLayoutProps = {
  useHeader?: boolean;
  useFooter?: boolean;
  showMenu?: boolean;
};

export const BaseLayout: React.FC<BaseLayoutProps> = ({
  useHeader = true,
  useFooter = true,
  showMenu = true,
  children,
}) => {
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
      {useFooter && <Footer />}
      <Menu isTriggerShow={showMenu} />
      <Loading />
    </>
  );
};

const Main = styled.main`
  background-color: ${Colors.UI_PAPER};
`;

export default BaseLayout;
