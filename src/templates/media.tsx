import React, { useMemo } from 'react';
import { graphql, Link } from 'gatsby';
import dayjs from 'dayjs';

import { Query } from '@/types';
import { BaseLayout, Meta } from '@/layouts';
import styled from 'styled-components';
import {
  BigSpacing,
  DateFormat,
  ScreenType,
  Spacing,
  ModuleWidth,
  AspectRatio,
  StyleMixin,
  getResponsiveOffsetMixin,
} from '@/constants';
import media from 'styled-media-query';
import { stripTag } from '@/util/string';
import { Article, MicroCMSImage, MediaLogo } from '@/atoms';
import { ReverseParallax, ParallaxBasePosition } from '@/effects';
import { MediaPickupArticleItem, ArticleInfo } from '@/molecules';

type MediaPageProps = {
  data: Pick<Query, 'microcmsMedia'>;
};

const MediaPage: React.FC<MediaPageProps> = ({ data }) => {
  const title = data.microcmsMedia?.title || '';
  const name = data.microcmsMedia?.name || '';
  const position = data.microcmsMedia?.position || '';
  const publishedAt = data.microcmsMedia?.publishedAt || '';
  const mainVisual = data.microcmsMedia?.mainVisual?.url || '';
  const lastVisual = data.microcmsMedia?.lastVisual?.url || '';
  const body = data.microcmsMedia?.body || '';
  const credit = data.microcmsMedia?.credit || '';

  const strippedBody = useMemo(() => stripTag(body || '').slice(0, 200), [body]);

  const publishDate = useMemo(() => dayjs(publishedAt).format(DateFormat.YEAR_MONTH_DATE_JP), [
    publishedAt,
  ]);

  if (!title || !publishedAt || !mainVisual || !body) return <div>data not exists.</div>;
  return (
    <BaseLayout useHeader>
      <Meta title={title} description={strippedBody} ogImage={mainVisual} />
      <Container>
        <MediaLogoContainer>
          <Link to="/media">
            <MediaLogo />
          </Link>
        </MediaLogoContainer>
        <PickupItemContainer>
          <MediaPickupArticleItem
            title={title}
            position={position}
            name={name}
            mainVisualUrl={mainVisual}
            showArrowIcon={false}
            subInformation={{
              twitter: true,
              facebook: true,
              publishDate,
            }}
            parallaxBasePosition={ParallaxBasePosition.TOP}
          />
        </PickupItemContainer>
        <ArticleContainer>
          <Article body={data.microcmsMedia?.body || ''} />
        </ArticleContainer>
      </Container>
      {credit && <ArticleInfo title="クレジット" body={credit} />}

      <LastVisualContainer>
        <ReverseParallax zoom={1.1} fillLayout basePosition="center">
          <MicroCMSImage
            src={lastVisual}
            options={{
              height: 1000,
              aspectRatio: AspectRatio.PLATINUM_HORIZONTAL,
            }}
            optionsSmallScreen={{
              height: 240,
              aspectRatio: AspectRatio.R_4_BY_3,
            }}
          />
        </ReverseParallax>
      </LastVisualContainer>
    </BaseLayout>
  );
};

export const query = graphql`
  query($slug: String!) {
    microcmsMedia(slug: { eq: $slug }) {
      title
      position
      name
      body
      credit
      publishedAt
      mainVisual {
        url
      }
      lastVisual {
        url
      }
    }
  }
`;

const Container = styled.div`
  position: relative;
  padding-top: 50px;
`;

const PickupItemContainer = styled.div`
  ${getResponsiveOffsetMixin({
    maxWidth: ModuleWidth.SEMI_WIDE,
    margin: Spacing.XXX_LARGE,
    marginSmall: 0,
  })}
`;

const MediaLogoContainer = styled.div`
  ${StyleMixin.HOVER_EFFECT.NORMAL};
  position: absolute;
  z-index: 1;
  top: 0;
  left: 50%;
  width: 250px;
  height: 127px;
  transform: translateX(-50%);

  ${media.lessThan(ScreenType.MEDIUM)`
    left: ${Spacing.X_LARGE}px;
    width: 170px;
    height: 86px;
    transform: none;
  `}
`;

const ArticleContainer = styled.div`
  margin: ${BigSpacing.SMALL}px 0;

  ${media.lessThan(ScreenType.MEDIUM)`
    margin: ${BigSpacing.X_SMALL}px 0;
  `}
`;

const LastVisualContainer = styled.div`
  width: 100%;
  max-width: ${ModuleWidth.SEMI_WIDE}px;
  margin: ${Spacing.XXX_LARGE}px auto;
  overflow: hidden;
`;

export default MediaPage;
