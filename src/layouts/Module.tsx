import React from 'react';
import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { Heading, HeadingContainer } from '@/components';
import { SCREEN_TYPE, RELATIVE_SPACING } from '@/constants';

type SizeType = 'large' | 'normal' | 'small';

type ModuleProps = {
  title?: string;
  size?: SizeType;
  withSpHorizontalSpacing?: boolean;
};

export const Module: React.FC<ModuleProps> = ({
  title,
  size = 'normal',
  withSpHorizontalSpacing = true,
  children,
}) => {
  return (
    <StyledModule size={size} withSpHorizontalSpacing={withSpHorizontalSpacing}>
      {title ? (
        <HeadingContainer>
          <Heading>{title}</Heading>
        </HeadingContainer>
      ) : (
        ''
      )}
      {children}
    </StyledModule>
  );
};

type StyledModuleProps = {
  size?: SizeType;
  withSpHorizontalSpacing?: boolean;
};

const basePaddingValue = `${RELATIVE_SPACING.NORMAL}vh ${RELATIVE_SPACING.NORMAL}vw`;

const basePaddingWithSpNoPadding = css`
  padding: ${basePaddingValue};
  ${media.lessThan(SCREEN_TYPE.MEDIUM)`
    padding: ${RELATIVE_SPACING.NORMAL}vh 0;
  `}
`;

const StyledModule = styled.section<StyledModuleProps>`
  max-width: ${({ size }): string => (size === 'large' ? '1300px' : '1100px')};
  margin: 0 auto;
  padding: ${basePaddingValue};
  ${({ withSpHorizontalSpacing }): string =>
    withSpHorizontalSpacing
      ? css`
          padding: ${basePaddingValue};
        `
      : basePaddingWithSpNoPadding};
  scroll-snap-align: start;
  /* height: 100vh; */
`;

export const ModuleContainer = styled.section`
  /* height: 100vh; */
  overflow: auto;
  scroll-snap-type: y proximity;
`;

export default Module;
