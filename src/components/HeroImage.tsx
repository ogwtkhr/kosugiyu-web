import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
// import media from 'styled-media-query';
// import { SPACING, TYPOGRAPHY, ScreenType } from '@/constants';
// import { IntersectionFadeIn } from '@/animations';

import mainVisual from '@/images/photos/top/hero_1.jpg';

export const HeroImage: React.FC = () => {
  return <Container style={{ backgroundImage: `url(${mainVisual})` }} />;
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: blue;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

// import image1 from '@/images/photos/top/hero_1.jpg';
// import image2 from '@/images/photos/top/hero_2.jpg';
// import image3 from '@/images/photos/top/hero_3.jpg';
// import image4 from '@/images/photos/top/hero_4.jpg';

// const images = [image1, image2, image3, image4];

// export const HeroImage: React.FC = () => {
//   const [current, setCurrent] = useState(0);
//   const foregroundImage = useMemo(() => {
//     return images[current];
//   }, [current]);
//   const backgroundImage = useMemo(() => {
//     const target = current >= images.length - 1 ? 0 : current + 1;
//     return images[target];
//   }, [current]);

//   const update = () => {
//     setTimeout(() => {
//       if (current >= images.length - 1) {
//         setCurrent(0);
//       } else {
//         setCurrent(current + 1);
//       }
//     }, 10);
//   };

//   return (
//     <Container>
//       <BackgroundSheet src={backgroundImage} />
//       <ForegroundSheet onFadeOut={update} src={foregroundImage} />
//     </Container>
//   );
// };

// const Container = styled.div`
//   position: relative;
//   width: 100%;
//   height: 100%;
//   overflow: hidden;
//   background-color: blue;
// `;

// type SheetProps = {
//   src: string;
//   onFadeOut?: VoidFunction;
// };

// const ForegroundSheet: React.FC<SheetProps> = ({ src, onFadeOut }) => {
//   const [isZoomOut, setIsZoomOut] = useState(false);
//   const [isFadeOut, setIsFadeOut] = useState(false);
//   useEffect(() => {
//     setIsZoomOut(false);
//     setIsFadeOut(false);

//     setTimeout(() => {
//       setIsZoomOut(true);
//     }, 10);

//     setTimeout(() => {
//       setIsFadeOut(true);
//     }, 2000);
//   }, [src]);

//   return (
//     <StyledForegroundSheet
//       isZoomOut={isZoomOut}
//       isFadeOut={isFadeOut}
//       onTransitionEnd={(e) => {
//         if (e.propertyName === 'transform') {
//           if (onFadeOut) onFadeOut();
//         }
//       }}
//       style={{ backgroundImage: `url(${src})` }}
//     />
//   );
// };

// const BackgroundSheet: React.FC<SheetProps> = ({ src }) => {
//   return <StyledBackgroundSheet style={{ backgroundImage: `url(${src})` }} />;
// };

// type StyledForegroundSheetProps = {
//   isZoomOut: boolean;
//   isFadeOut: boolean;
// };

// const BaseStyledSheet = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-repeat: no-repeat;
//   background-position: center;
//   background-size: cover;
// `;

// const StyledForegroundSheet = styled(BaseStyledSheet)<StyledForegroundSheetProps>`
//   transform: ${({ isZoomOut }): string => (isZoomOut ? 'scale(1)' : 'scale(1.05)')};
//   transition: ${({ isZoomOut, isFadeOut }): string =>
//     isZoomOut || isFadeOut ? 'transform 4s linear, opacity 2s ease' : ''};
//   opacity: ${({ isFadeOut }): number => (isFadeOut ? 0 : 1)};
// `;

// const StyledBackgroundSheet = styled(BaseStyledSheet)`
//   transform: scale(1.05);
// `;

// export default HeroImage;
