import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import { useStaticQuery, graphql } from 'gatsby';
import GatsbyImage, { FluidObject } from 'gatsby-image';

import { Module } from '@/layouts';
import { UseCaseImagesQuery } from '@/types';
import {
  STRUCTURE_SPACING,
  SPACING,
  TYPOGRAPHY,
  SCREEN_TYPE,
  BIG_SPACING,
  RELATIVE_SPACING,
} from '@/constants';
import { IntersectionFadeIn } from '@/animations';

export const UseCaseModule: React.FC = () => {
  const data: UseCaseImagesQuery = useStaticQuery(graphql`
    query UseCaseImages {
      useCase1FImage: file(relativePath: { eq: "usecase_1f.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      useCase2FImage: file(relativePath: { eq: "usecase_2f.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Module size="large" withSpHorizontalSpacing={false}>
      <Container>
        <TextContainer>
          <Heading>1Fについての見出し</Heading>
          <MainText>
            1Fについての本文。1Fについての本文。1Fについての本文。1Fについての本文。1Fについての本文。
          </MainText>
        </TextContainer>
        <ImageContainer>
          <Image fluid={data?.useCase1FImage?.childImageSharp?.fluid as FluidObject} />
        </ImageContainer>
      </Container>
      <Container>
        <TextContainer layout="right">
          <Heading>2Fについての見出し</Heading>
          <MainText>
            2Fについての本文。2Fについての本文。2Fについての本文。2Fについての本文。2Fについての本文。
          </MainText>
        </TextContainer>
        <ImageContainer layout="right">
          <Image fluid={data?.useCase2FImage?.childImageSharp?.fluid as FluidObject} />
        </ImageContainer>
      </Container>
      <Container>
        <TextContainer>
          <Heading>3Fについての見出し</Heading>
          <MainText>
            3Fについての本文。3Fについての本文。3Fについての本文。3Fについての本文。3Fについての本文。
          </MainText>
        </TextContainer>
        <ImageContainer>
          <Image fluid={data?.useCase1FImage?.childImageSharp?.fluid as FluidObject} />
        </ImageContainer>
      </Container>
    </Module>
  );
};

const Image = styled(GatsbyImage)`
  ${media.lessThan(SCREEN_TYPE.MEDIUM)`
    width: 800px;
    left: 50%;
    transform: translateX(-50%);
  `}
  ${media.lessThan(SCREEN_TYPE.SMALL)`
    width: 500px;
  `}
`;

type ImageContainerProps = {
  layout?: 'left' | 'right';
};

const ImageContainer = styled.div<ImageContainerProps>`
  max-width: ${STRUCTURE_SPACING.X_LARGE}px;
  ${({ layout }): string => (layout === 'right' ? 'margin-right' : 'margin-left')}: auto;
  overflow: hidden;
`;

type TextContainerProps = {
  layout?: 'left' | 'right';
};

// ブレイクポイント共通化
const TextContainer = styled.div<TextContainerProps>`
  ${media.greaterThan(SCREEN_TYPE.MEDIUM)`
    position: absolute;
    z-index: 1;
    top: 0;
  `}
  ${media.lessThan(SCREEN_TYPE.MEDIUM)`
    padding: 0 ${RELATIVE_SPACING.NORMAL}vw;
  `}
  ${({ layout }): string => (layout === 'right' ? 'right' : 'left')}: 0;
`;

const Heading = styled.h3`
  margin-bottom: ${SPACING.NORMAL}px;
  font-size: ${TYPOGRAPHY.TEXT_SIZE.X_LARGE}rem;
`;

const MainText = styled.p`
  max-width: ${STRUCTURE_SPACING.SMALL}px;
`;

const StyledContainer = styled.div`
  position: relative;
  margin-bottom: ${SPACING.XXX_LARGE}px;
`;

const Container: React.FC = ({ children }) => (
  <IntersectionFadeIn>
    <StyledContainer>{children}</StyledContainer>
  </IntersectionFadeIn>
);

export default UseCaseModule;
