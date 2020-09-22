import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { AllMicrocmsPersonsQuery } from '@/types';
import styled from 'styled-components';
import { StyleMixin, AspectRatio, TextSize, Typography, TextWeight } from '@/constants';
// import media from 'styled-media-query';

type PersonsModuleProps = {
  useTitle?: boolean;
};

export const PersonsModule: React.FC<PersonsModuleProps> = ({ useTitle }) => {
  const data = useStaticQuery<AllMicrocmsPersonsQuery>(graphql`
    query allMicrocmsPersons {
      allMicrocmsPersons(sort: { fields: [createdAt], order: DESC }) {
        nodes {
          id
          title
          slug
          mainVisual {
            url
          }
        }
      }
    }
  `);
  return (
    <>
      {useTitle && <h2>小杉湯と人</h2>}
      <ArticleList>
        {data.allMicrocmsPersons.nodes.map((entry) => {
          const slug = entry.slug || '';
          const title = entry.title || '';
          const mainVisualUrl = entry?.mainVisual?.url || '';
          return (
            <ArticleListItem key={slug}>
              <ArticleItem>
                <Link to={`/persons/${slug}`}>
                  <ArticleTitle>{title}</ArticleTitle>
                  <ArticleThumbnail src={mainVisualUrl} />
                </Link>
              </ArticleItem>
            </ArticleListItem>
          );
        })}
      </ArticleList>
    </>
  );
};

const ArticleList = styled.ul``;

const ArticleListItem = styled.li``;

const ArticleItem = styled.article``;

const ArticleTitle = styled.h3`
  ${Typography.Mixin.EXTENDED};
  font-weight: ${TextWeight.BOLD};
  font-size: ${TextSize.LARGE}rem;
  text-decoration: none;
`;

const ArticleThumbnail = styled.div`
  width: 80%;
  max-width: 800px;
  ${StyleMixin.BACKGROUND_IMAGE_WITH_SRC}

  &::after {
    content: '';
    display: block;
    padding-bottom: ${AspectRatio.R_4_BY_3}%;
  }
`;

export default PersonsModule;
