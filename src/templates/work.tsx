/*
import React from 'react';
import { Link, graphql } from 'gatsby';

import { WorksYamlQuery } from '../../types/graphql-types';

import Layout from '../layout/layout';
import SEO from '../layout/seo';

type WorkPageProps = {
  data: WorksYamlQuery;
};

const WorkPage: React.FC<WorkPageProps> = ({ data }) => {
  return (
    <Layout>
      <SEO title="Work" />
      <h1>{data.worksYaml?.title}</h1>
      <p>{data.worksYaml?.description}</p>
      <p>
        {data.worksYaml?.year} - {data.worksYaml?.category}
      </p>
      <Link to="/">Go to home</Link>
    </Layout>
  );
};

export const query = graphql`
  query WorksYaml($slug: String!) {
    worksYaml(slug: { eq: $slug }) {
      title
      description
      year
      category
    }
  }
`;

export default WorkPage;
*/
