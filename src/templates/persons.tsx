import React, { useMemo } from 'react';
import { graphql } from 'gatsby';
import dayjs from 'dayjs';

import { Query } from '@/types';
import { BaseLayout, Meta } from '@/layouts';
import styled from 'styled-components';
import { BigSpacing, Colors, DateFormat, ScreenType, Spacing } from '@/constants';
import media from 'styled-media-query';
import { stripTag } from '@/util/string';
import { TopPersonItem, Article, ArticleInfo } from '@/components';
import { ParallaxBasePosition } from '@/effects';

type PersonsPageProps = {
  data: Pick<Query, 'microcmsPersons'>;
};

const PersonsPage: React.FC<PersonsPageProps> = ({ data }) => {
  const title = data.microcmsPersons?.title || '';
  const name = data.microcmsPersons?.name || '';
  const personPosition = data.microcmsPersons?.position || '';
  const publishedAt = data.microcmsPersons?.publishedAt || '';
  const mainVisual = data.microcmsPersons?.mainVisual?.url || '';
  const writerName = data.microcmsPersons?.writer?.name || '';
  const body = data.microcmsPersons?.body || '';
  const credit = data.microcmsPersons?.credit || '';

  const strippedBody = useMemo(() => stripTag(body || '').slice(0, 200), [body]);

  const publishedDate = useMemo(() => dayjs(publishedAt).format(DateFormat.YEAR_MONTH_DATE_JP), [
    publishedAt,
  ]);

  if (!title || !publishedAt || !writerName || !mainVisual || !body)
    return <div>data not exists.</div>;
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
          parallaxBasePosition={ParallaxBasePosition.TOP}
        />
        <ArticleContainer>
          <Article body={data.microcmsPersons?.body || ''} />
        </ArticleContainer>
      </Container>
      <ArticleInfo title="クレジット" body={credit} />
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

const ArticleContainer = styled.div`
  margin: ${BigSpacing.SMALL}px 0;

  ${media.lessThan(ScreenType.MEDIUM)`
    margin: ${Spacing.LARGE}px 0;
  `}
`;

export default PersonsPage;
