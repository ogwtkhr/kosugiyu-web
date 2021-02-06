import React from 'react';
import { usePageInfo } from '@/hooks';
import { PageId, BigSpacing, TextSize, Spacing, ScreenType, TypographyMixin } from '@/constants';
import { Picture, Button, ButtonContainer } from '@/atoms';
import styled from 'styled-components';
import media from 'styled-media-query';

import { BaseLayout, Meta } from '@/layouts';

const NotFoundPage: React.FC = () => {
  const { title, description } = usePageInfo({ id: PageId.NOT_FOUND });
  return (
    <BaseLayout>
      <Meta title={title} description={description} />
      <Title>
        お探しのページは
        <BreakOnlySmallScreen />
        見つかりませんでした
      </Title>
      <Hero>
        <Picture relativePath="illustrations/intro/story_4.png" />
      </Hero>
      <ButtonContainer>
        <Button to="/" showArrow>
          小杉湯トップ
        </Button>
      </ButtonContainer>
    </BaseLayout>
  );
};

const Title = styled.h2`
  ${TypographyMixin.DISPLAY};
  margin: ${BigSpacing.X_SMALL}px auto;
  padding-right: ${Spacing.LARGE}px;
  padding-left: ${Spacing.LARGE}px;
  font-size: ${TextSize.LARGE}rem;
  text-align: center;

  ${media.lessThan(ScreenType.MEDIUM)`
    margin: ${Spacing.LARGE}px auto;
  `}
`;

const Hero = styled.div`
  width: 300px;
  margin: ${BigSpacing.SMALL}px auto;

  ${media.lessThan(ScreenType.MEDIUM)`
    width: 240px;
    margin: ${BigSpacing.XX_SMALL}px auto;
  `}
`;

const BreakOnlySmallScreen = styled.br`
  ${media.greaterThan(ScreenType.MEDIUM)`
    display: none;
  `}
`;

export default NotFoundPage;
