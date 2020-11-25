import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { Picture, ScrollLine } from '@/components';
import { Colors, Spacing, StyleMixin, TextSize, TypeFace } from '@/constants';
import { getRandom } from '@/util/number';

export const HeroImage: React.FC = () => {
  return (
    <Container>
      <Picture relativePath={`photos/top/hero_${getRandom(1, 1)}.jpg`} />

      <ScrollLineContainer>
        <ScrollLineMessage>SCROLL</ScrollLineMessage>
        <ScrollLine />
      </ScrollLineContainer>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: ${Colors.UI_OBJECT_PLACEHOLDER};
  ${StyleMixin.BACKGROUND_IMAGE}
`;

const ScrollLineContainer = styled.div`
  display: flex;
  position: absolute;
  right: ${Spacing.XXX_LARGE}px;
  bottom: 0;
  align-items: center;
`;

const ScrollLineMessage = styled.p`
  margin-right: ${Spacing.X_LARGE}px;
  color: ${Colors.UI_TEXT_DARK_BACKGROUND};
  font-family: ${TypeFace.SANS_SERIF};
  font-size: ${TextSize.XXX_SMALL}rem;
`;
