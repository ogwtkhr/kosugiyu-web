import React from 'react';
import styled from 'styled-components';

export const HeroImage: React.FC = () => {
  return (
    <Container>
      <BaseLayer>
        <div>ヒーローイメージ</div>
      </BaseLayer>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 80vh;
`;

const BaseLayer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export default HeroImage;
