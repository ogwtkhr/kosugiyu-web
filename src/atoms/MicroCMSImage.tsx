import React from 'react';
import styled, { css } from 'styled-components';
import { ScreenValue, AspectRatio, ScreenType } from '@/constants';
import BaseImgix, {
  Picture,
  Source as BaseSource,
  PublicConfigAPI,
  SharedImigixAndSourceProps,
} from 'react-imgix';
import media from 'styled-media-query';

// ImgixをStyledComponentでラップするとフォールバック警告が出るがスルーする
PublicConfigAPI.disableWarning('fallbackImage');

type Options = {
  aspectRatio?: number;
} & Omit<SharedImigixAndSourceProps, 'src'>;

type MicroCMSImageProps = {
  src: string;
  options?: Options;
  optionsSmallScreen?: Options;
};

export const MicroCMSImage: React.FC<MicroCMSImageProps> = ({
  src,
  options: optionsNormalScreen,
  optionsSmallScreen,
}) => {
  const isArtDirection = !!optionsSmallScreen && !!optionsNormalScreen;
  return (
    <Container
      aspectRatioNormalScreen={optionsNormalScreen?.aspectRatio}
      aspectRatioSmallScreen={optionsSmallScreen?.aspectRatio}
    >
      {isArtDirection ? (
        <Picture>
          <Source
            src={src}
            {...optionsNormalScreen}
            htmlAttributes={{ media: `(min-width: ${ScreenValue.MEDIUM}px)` }}
          />
          <Imgix src={src} {...optionsSmallScreen} />
        </Picture>
      ) : (
        <Imgix src={src} {...optionsNormalScreen} />
      )}
    </Container>
  );
};

type ContainerProps = {
  aspectRatioNormalScreen?: number;
  aspectRatioSmallScreen?: number;
};

const Container = styled.div<ContainerProps>`
  position: relative;
  overflow: hidden;
  &::after {
    content: '';
    display: block;
    padding-bottom: ${({ aspectRatioNormalScreen }) =>
      aspectRatioNormalScreen || AspectRatio.R_4_BY_3}%;
  }
  ${media.lessThan<ContainerProps>(ScreenType.MEDIUM)`
    &::after {
      padding-bottom:${({ aspectRatioSmallScreen, aspectRatioNormalScreen }) =>
        aspectRatioSmallScreen || aspectRatioNormalScreen || AspectRatio.R_4_BY_3}%
    }
  `}
`;

const innerStyle = css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Source = styled(BaseSource)`
  ${innerStyle}
`;

const Imgix = styled(BaseImgix)`
  ${innerStyle}
`;
