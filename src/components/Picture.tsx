import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { AllImageFileQuery } from '@/types';
import Img, { FluidObject } from 'gatsby-image';

type PictureProps = {
  relativePath: string;
  alt?: string;
  style?: React.CSSProperties;
  className?: string;
};

export const Picture: React.FC<PictureProps> = ({ relativePath, alt, style, className }) => {
  const data = useStaticQuery<AllImageFileQuery>(graphql`
    query allImageFile {
      desktopImages: allFile(filter: { ext: { regex: "/(png|jpg)/" } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(maxWidth: 2000, quality: 90) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      }
      mobileImages: allFile(
        filter: { ext: { regex: "/(png|jpg)/" }, relativePath: { regex: "/sp_/" } }
      ) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(maxWidth: 1000, quality: 90) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      }
    }
  `);

  const addPrefixForRelativePath = (relativePath: string, prefix = 'sp_') => {
    const splitPathArray = relativePath.split('/');
    const lastIndex = splitPathArray.length - 1;
    splitPathArray[lastIndex] = `${prefix}${splitPathArray[lastIndex]}`;
    return splitPathArray.join('/');
  };

  const desktopImageRelativePath = relativePath;
  const mobileImageRelativePath = addPrefixForRelativePath(relativePath);

  const desktopImages = data.desktopImages.edges.find(
    (n) => n.node.relativePath === desktopImageRelativePath,
  )?.node.childImageSharp?.fluid;
  const mobileImages = data.mobileImages.edges.find(
    (n) => n.node.relativePath === mobileImageRelativePath,
  )?.node.childImageSharp?.fluid;

  const imageSources: FluidObject[] = (mobileImages
    ? [
        mobileImages,
        {
          ...desktopImages,
          media: `(min-width: 1000px)`,
        },
      ]
    : desktopImages) as FluidObject[];

  return (
    <>
      {imageSources ? (
        <Img
          fluid={imageSources}
          fadeIn={false}
          loading="eager"
          style={{
            width: '100%',
            height: '100%',
            ...style,
          }}
          imgStyle={{
            objectFit: 'cover',
            objectPosition: '50% 50%',
          }}
          className={className}
          alt={alt}
          onLoad={() => {
            console.log('load');
          }}
        />
      ) : (
        <>image not found.</>
      )}
    </>
  );
};

export default Picture;
