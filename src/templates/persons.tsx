import React from 'react';
import { Link, graphql } from 'gatsby';

import { Query } from '@/types';

// import Layout from '../layout/layout';
// import SEO from '../layout/seo';

type PersonsPageProps = {
  data: Pick<Query, 'microcmsPersons'>;
};

const PersonsPage: React.FC<PersonsPageProps> = ({ data }) => {
  console.log(data.microcmsPersons?.title);
  return (
    // <Layout>
    //   <SEO title="Work" />
    //   <h1>{data.worksYaml?.title}</h1>
    //   <p>{data.worksYaml?.description}</p>
    //   <p>
    //     {data.worksYaml?.year} - {data.worksYaml?.category}
    //   </p>
    //   <Link to="/">Go to home</Link>
    // </Layout>
    <div>hoge</div>
  );
};

export const query = graphql`
  query($slug: String!) {
    microcmsPersons(slug: { eq: $slug }) {
      title
    }
  }
`;

export default PersonsPage;
