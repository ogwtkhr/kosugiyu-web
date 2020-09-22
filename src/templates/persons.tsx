import React from 'react';
import { Link, graphql } from 'gatsby';

import { Query } from '@/types';
import { BaseLayout, SEO } from '@/layouts';
import styled from 'styled-components';
import { ModuleWidth, TextWeight, Spacing } from '@/constants';

type PersonsPageProps = {
  data: Pick<Query, 'microcmsPersons'>;
};

const PersonsPage: React.FC<PersonsPageProps> = ({ data }) => {
  const title = data.microcmsPersons?.title;
  const publishedAt = data.microcmsPersons?.publishedAt;
  const mainVisual = data.microcmsPersons?.mainVisual;
  const body = data.microcmsPersons?.body;

  if (!title || !publishedAt || !mainVisual || !body) return <div>data not exists.</div>;
  return (
    <BaseLayout useHeader>
      <SEO title={title} />
      <Article
        dangerouslySetInnerHTML={{
          __html: data.microcmsPersons?.body || '',
        }}
      />
    </BaseLayout>
  );
};

export const query = graphql`
  query($slug: String!) {
    microcmsPersons(slug: { eq: $slug }) {
      title
      body
      publishedAt
      mainVisual {
        url
      }
    }
  }
`;

const MainVisual = styled.div`
  /* backg */
`;

const Article = styled.article`
  max-width: ${ModuleWidth.ARTICLE}px;
  margin: 0 auto;

  & p {
    font-weight: ${TextWeight.NORMAL};
  }

  & strong {
    font-weight: ${TextWeight.BOLD};
  }

  & img {
    display: block;
    width: 100%;
    margin: ${Spacing.LARGE}px 0;
  }
`;

export default PersonsPage;
