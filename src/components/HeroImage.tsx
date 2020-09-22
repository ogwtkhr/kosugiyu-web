import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { Picture } from '@/components';
import { Colors, StyleMixin } from '@/constants';
import { getRandom } from '@/util/number';

export const HeroImage: React.FC = () => {
  return (
    <Container>
      <Picture relativePath={`photos/top/hero_${getRandom(1, 1)}.jpg`} />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: ${Colors.UI_OBJECT_PLAEHOLDER};
  ${StyleMixin.BACKGROUND_IMAGE}
`;
