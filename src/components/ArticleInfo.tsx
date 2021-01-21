import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import { ModuleWidth, TextWeight, Spacing, Colors, TextSize, ScreenType } from '@/constants';

type ArticleInfoProps = {
  title: string;
  body: string;
};

export const ArticleInfo: React.FC<ArticleInfoProps> = ({ title, body }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Body>{body}</Body>
    </Container>
  );
};

const Container = styled.div`
  max-width: ${ModuleWidth.ARTICLE}px;
  margin: ${Spacing.LARGE}px auto;
  ${media.lessThan(ScreenType.MEDIUM)`
  margin: ${Spacing.LARGE}px;
`};
`;

const Title = styled.div`
  color: ${Colors.UI_TEXT_WEAKEN};
  font-size: ${TextSize.NORMAL}rem;
  font-weight: ${TextWeight.MEDIUM};
`;

const Body = styled.div`
  margin-top: ${Spacing.LARGE}px;
  color: ${Colors.UI_TEXT_WEAKEN};
  font-size: ${TextSize.SMALL}rem;
  font-weight: ${TextWeight.MEDIUM};
  white-space: pre-wrap;
`;
