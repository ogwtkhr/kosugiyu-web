import React, { useMemo } from 'react';
import { graphql } from 'gatsby';
import dayjs from 'dayjs';

import { Query } from '@/types';
import { BaseLayout, Meta } from '@/layouts';
import styled from 'styled-components';
import {
  BigSpacing,
  Colors,
  DateFormat,
  ScreenType,
  Spacing,
  ModuleWidth,
  AspectRatio,
} from '@/constants';
import media from 'styled-media-query';
import { stripTag } from '@/util/string';
import { MediaPickupArticleItem, Article, ArticleInfo, MicroCMSImage } from '@/components';
import { ReverseParallax, ParallaxBasePosition } from '@/effects';

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
  background-color: ${Colors.UI_PAPER};
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
