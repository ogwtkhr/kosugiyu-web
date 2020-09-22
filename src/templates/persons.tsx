import React, { useMemo } from 'react';
import { graphql } from 'gatsby';
import dayjs from 'dayjs';
import { Twitter, FacebookCircle } from '@styled-icons/boxicons-logos';

import { Query } from '@/types';
import { BaseLayout, SEO } from '@/layouts';
import styled, { css } from 'styled-components';
import {
  ModuleWidth,
  TextWeight,
  Spacing,
  StyleMixin,
  AspectRatio,
  Colors,
  Typography,
  TextSize,
  ScreenType,
  LineHeight,
  ScreenValue,
  Layer,
  DateFormat,
} from '@/constants';
import media from 'styled-media-query';
import { useParallax } from '@/hooks';
import { stripTag } from '@/util/string';

type PersonsPageProps = {
  data: Pick<Query, 'microcmsPersons'>;
};

const PersonsPage: React.FC<PersonsPageProps> = ({ data }) => {
  const title = data.microcmsPersons?.title;
  const publishedAt = data.microcmsPersons?.publishedAt;
  const mainVisual = data.microcmsPersons?.mainVisual?.url;
  const writerName = data.microcmsPersons?.writer?.name;
  const body = data.microcmsPersons?.body;

  const [mainVisualRef, { top: parallaxSeed }] = useParallax<HTMLDivElement>({
    min: 0,
    max: 1000,
    coefficient: 0.2,
  });
  const strippedBody = useMemo(() => stripTag(body || '').slice(0, 200), [body]);
  const mainVisualTransformProperty = useMemo(() => `translateY(${parallaxSeed}px)`, [
    parallaxSeed,
  ]);
  const publishedDate = useMemo(() => dayjs(publishedAt).format(DateFormat.YEAR_MONTH_DATE_JP), [
    publishedAt,
  ]);

  if (!title || !publishedAt || !writerName || !mainVisual || !body)
    return <div>data not exists.</div>;
  return (
    <BaseLayout useHeader usePersonsHeader>
      <SEO title={title} description={strippedBody} />
      <Container>
        <MainVisualContainer ref={mainVisualRef}>
          <MainVisual
            src={mainVisual}
            style={{
              transform: mainVisualTransformProperty,
            }}
          />
        </MainVisualContainer>
        <TitleContaier>
          <Title>{title}</Title>
          <MetaInfoCotainer>
            <SocialIcons>
              <TwitterIcon />
              <FacebookIcon />
            </SocialIcons>
            <MetaInfo>
              <PublishedDate>{publishedDate}</PublishedDate>
              <WriterName>{writerName}</WriterName>
            </MetaInfo>
          </MetaInfoCotainer>
        </TitleContaier>
        <Article
          dangerouslySetInnerHTML={{
            __html: data.microcmsPersons?.body || '',
          }}
        />
      </Container>
    </BaseLayout>
  );
};

export const query = graphql`
  query($slug: String!) {
    microcmsPersons(slug: { eq: $slug }) {
      title
      body
      publishedAt
      writer {
        name
      }
      mainVisual {
        url
      }
    }
  }
`;

const Container = styled.div`
  background-color: ${Colors.UI_PAPER};
`;

const TitleContaier = styled.div`
  position: relative;
  z-index: ${Layer.BASE};
  max-width: ${ModuleWidth.ARTICLE}px;
  margin: -${Spacing.XX_LARGE * 4}px auto ${Spacing.XX_LARGE}px;
  padding: ${Spacing.XX_LARGE}px;
  border: solid 1px ${Colors.ABSTRACT_NAVY};
  background-color: ${Colors.ABSTRACT_WHITE};

  ${media.lessThan(ScreenType.MEDIUM)`
    margin: -${Spacing.XX_LARGE * 2}px ${Spacing.LARGE}px ${Spacing.LARGE}px;
    padding: ${Spacing.LARGE}px;
  `}
`;

const Title = styled.h2`
  ${Typography.Mixin.EXTENDED};
  color: ${Colors.ABSTRACT_NAVY};
  font-size: ${TextSize.X_LARGE}rem;
  font-weight: ${TextWeight.BOLD};
  line-height: ${LineHeight.NORMAL};

  ${media.lessThan(ScreenType.MEDIUM)`
    font-size: ${TextSize.LARGE}rem;
  `}
`;

const MetaInfoCotainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const iconMixin = css`
  width: ${Spacing.X_LARGE}px;
  height: ${Spacing.X_LARGE}px;
  color: ${Colors.ABSTRACT_NAVY};
`;

const TwitterIcon = styled(Twitter)`
  ${iconMixin};
`;

const FacebookIcon = styled(FacebookCircle)`
  ${iconMixin};
  margin-left: ${Spacing.NORMAL}px;
`;

const MetaInfo = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const PublishedDate = styled.p``;
const WriterName = styled.p`
  margin-left: ${Spacing.MIDDLE}px;
`;

const MainVisualContainer = styled.div`
  width: 100%;
  max-width: ${ScreenValue.LARGE}px;
  margin: 0 auto;

  ${media.greaterThan(ScreenType.LARGE)`
    margin-top: ${Spacing.XX_LARGE}px;
  `}
`;

const MainVisual = styled.div`
  width: 100%;
  height: 100%;
  ${StyleMixin.BACKGROUND_IMAGE_WITH_SRC};

  &::after {
    content: '';
    display: block;
    padding-bottom: ${AspectRatio.R_16_BY_9}%;
  }

  ${media.lessThan(ScreenType.MEDIUM)`
    &::after {
      padding-bottom: ${AspectRatio.R_1_BY_1}%;
    }
  `}
`;

const Article = styled.article`
  max-width: ${ModuleWidth.ARTICLE}px;
  margin: 0 auto;

  ${media.lessThan(ScreenType.MEDIUM)`
    margin: 0 ${Spacing.LARGE}px;
  `}

  & p {
    font-weight: ${TextWeight.NORMAL};
  }

  & strong {
    color: ${Colors.ABSTRACT_NAVY};
    font-weight: ${TextWeight.BOLD};
  }

  & img {
    display: block;
    width: 100%;
    margin-top: ${Spacing.X_LARGE}px;

    ${media.lessThan(ScreenType.MEDIUM)`
      margin-left: -${Spacing.LARGE}px;
      margin-right: -${Spacing.LARGE}px;
      width: calc(100% + ${Spacing.LARGE * 2}px);
    `}
  }
`;

export default PersonsPage;
