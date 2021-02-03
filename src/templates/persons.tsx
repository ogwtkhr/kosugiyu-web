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
  AspectRatio,
  StyleMixin,
  ModuleWidth,
} from '@/constants';
import media from 'styled-media-query';
import { stripTag } from '@/util/string';
import { TopPersonItem, Article, ArticleInfo } from '@/components';
import { ReverseParallax, ParallaxBasePosition } from '@/effects';

type PersonsPageProps = {
  data: Pick<Query, 'microcmsPersons'>;
};

const PersonsPage: React.FC<PersonsPageProps> = ({ data }) => {
  const title = data.microcmsPersons?.title || '';
  const name = data.microcmsPersons?.name || '';
  const personPosition = data.microcmsPersons?.position || '';
  const publishedAt = data.microcmsPersons?.publishedAt || '';
  const mainVisual = data.microcmsPersons?.mainVisual?.url || '';
  const lastVisual = data.microcmsPersons?.lastVisual?.url || '';
  const body = data.microcmsPersons?.body || '';
  const credit = data.microcmsPersons?.credit || '';

  console.log(data.microcmsPersons);

  const strippedBody = useMemo(() => stripTag(body || '').slice(0, 200), [body]);

  console.log(publishedAt);

  const publishDate = useMemo(() => dayjs(publishedAt).format(DateFormat.YEAR_MONTH_DATE_JP), [
    publishedAt,
  ]);

  if (!title || !publishedAt || !mainVisual || !body) return <div>data not exists.</div>;
  return (
    <BaseLayout useHeader>
      <Meta title={title} description={strippedBody} ogImage={mainVisual} />
      <Container>
        <TopPersonItem
          title={title}
          position={personPosition}
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
          <Article body={data.microcmsPersons?.body || ''} />
        </ArticleContainer>
      </Container>
      <ArticleInfo title="クレジット" body={credit} />
      <LastVisualContainer>
        <ReverseParallax zoom={1.1} fillLayout basePosition="center">
          <LastVisual src={lastVisual} />
        </ReverseParallax>
      </LastVisualContainer>
    </BaseLayout>
  );
};

export const query = graphql`
  query($slug: String!) {
    microcmsPersons(slug: { eq: $slug }) {
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
    margin: ${Spacing.XX_LARGE}px 0;
  `}
`;

const LastVisualContainer = styled.div`
  width: 100%;
  max-width: ${ModuleWidth.SEMI_WIDE}px;
  margin: ${Spacing.XXX_LARGE}px auto;
  overflow: hidden;
`;

const LastVisual = styled.div`
  ${StyleMixin.BACKGROUND_IMAGE_WITH_SRC};

  &::after {
    content: '';
    display: block;
    padding-bottom: ${AspectRatio.PLATINUM_HORIZONTAL}%;
  }
`;

export default PersonsPage;
