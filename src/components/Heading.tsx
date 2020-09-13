// import React from 'react';
import styled from 'styled-components';
import { Spacing, Typography } from '@/constants';

type HeadingProps = {
  children: string;
};

// const Heading: React.FC<HeadingProps> = ({ children }) => {
//   return <h2>{children}</h2>;
// };

export const Heading = styled.h2<HeadingProps>`
  ${Typography.Mixin.DISPLAY}
  font-size: 3rem;
`;

export const HeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: ${Spacing.XXX_LARGE}px 0;
`;

export default Heading;
