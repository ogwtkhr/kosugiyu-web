import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { AllMicrocmsPersonsQuery } from '@/types';
// import styled from 'styled-components';
// import media from 'styled-media-query';

export const PersonsModule: React.FC = () => {
  const data = useStaticQuery<AllMicrocmsPersonsQuery>(graphql`
    query allMicrocmsPersons {
      allMicrocmsPersons(sort: { fields: [createdAt], order: DESC }) {
        nodes {
          id
          title
          body
          slug
        }
      }
    }
  `);
  return (
    <>
      {data.allMicrocmsPersons.nodes.map((entry) => (
        <div>{entry?.slug}</div>
      ))}
    </>
  );
};

export default PersonsModule;
