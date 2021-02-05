import React from 'react';
import styled from 'styled-components';

import { Footer } from './Footer';
import { GlobalStyle } from './GlobalStyle';
import 'intersection-observer';
import 'reset.css';

import { Menu } from '@/molecules';
import { Colors } from '@/constants';
import { Header } from '@/layouts/Header';
import { Loading } from '@/layouts/Loading';
import { useBaseMetaInfo } from '@/hooks';

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
  const { title } = useBaseMetaInfo();

  return (
    <>
      {useHeader && <Header siteTitle={title} />}
      <GlobalStyle />
      <Main>{children}</Main>
      {useFooter && <Footer />}
      <Menu isTriggerShow={showMenu} />
      <Loading />
    </>
  );
};

const Main = styled.main`
  overflow: hidden;
  background-color: ${Colors.UI_PAPER};
`;

export default BaseLayout;
