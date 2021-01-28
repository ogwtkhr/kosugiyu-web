import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import {
  ModuleWidth,
  TextWeight,
  Spacing,
  Colors,
  TextSize,
  TypographyMixin,
  ScreenType,
} from '@/constants';
import { isUrl } from '@/util/string';

type ArticleInfoProps = {
  title: string;
  body: string;
};

export const ArticleInfo: React.FC<ArticleInfoProps> = ({ title, body }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Body>{isUrl(body) ? <Link href={body}>{body}</Link> : body}</Body>
    </Container>
  );
};

const Container = styled.div`
  max-width: ${ModuleWidth.ARTICLE}px;
  margin: ${Spacing.X_LARGE}px auto;
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
  margin-top: ${Spacing.NORMAL}px;
  color: ${Colors.UI_TEXT_WEAKEN};
  font-size: ${TextSize.SMALL}rem;
  font-weight: ${TextWeight.MEDIUM};
  white-space: pre-wrap;
`;

const Link = styled.a`
  ${TypographyMixin.LINK_SUB};
`;
