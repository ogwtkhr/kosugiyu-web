import React, { useMemo } from 'react';
import { graphql } from 'gatsby';
import dayjs from 'dayjs';

import { Query } from '@/types';
import { BaseLayout, Meta } from '@/layouts';
import styled from 'styled-components';
import { Colors, DateFormat } from '@/constants';
import media from 'styled-media-query';
import { useParallax } from '@/hooks';
import { stripTag } from '@/util/string';
import { TopPersonItem, Article, ArticleInfo } from '@/components';

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

  const [mainVisualRef, { top: parallaxSeed }] = useParallax<HTMLDivElement>({
    min: 0,
    max: 1000,
    coefficient: 0.2,
    direction: 'reverse',
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
    <BaseLayout useHeader>
      <Meta title={title} description={strippedBody} ogImage={mainVisual} />
      <Container>
        {/* <MainVisualContainer ref={mainVisualRef}>
          <MainVisual
            src={mainVisual}
            style={{
              transform: mainVisualTransformProperty,
            }}
          />
        </MainVisualContainer> */}
        <TopPersonItem
          title={title}
          position={personPosition}
          name={name}
          mainVisualUrl={mainVisual}
          showArrowIcon={false}
        />
        <Article body={data.microcmsPersons?.body || ''} />
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

// const iconMixin = css`
//   width: ${Spacing.X_LARGE}px;
//   height: ${Spacing.X_LARGE}px;
//   color: ${Colors.ABSTRACT_NAVY};
// `;

// const TwitterIcon = styled(Twitter)`
//   ${iconMixin};
// `;

// const FacebookIcon = styled(FacebookCircle)`
//   ${iconMixin};
//   margin-left: ${Spacing.NORMAL}px;
// `;

export default PersonsPage;
