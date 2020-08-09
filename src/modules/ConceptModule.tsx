import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import { Module } from '@/layouts';
import { IntersectionFadeIn } from '@/animations';
import { SPACING, TYPOGRAPHY, SCREEN_TYPE } from '@/constants';

export const ConceptModule: React.FC = () => {
  return (
    <Module>
      <IntersectionFadeIn>
        <ConceptTextContainer>
          <Paragraph>くらしに、あたたかな余白を。</Paragraph>
          <Paragraph>
            湯が、日々のとなりに在るということ。
            <br />
            そこで満たされ、そして、空っぽになるということ。
          </Paragraph>
          <Paragraph>
            お風呂で汗を流し、最高の一杯を頂くこと。
            <br />
            しっかり食べること、ゆっくり休むこと、じっくり働くこと。
          </Paragraph>
          <Paragraph>
            ひとりで寛いでもいい、みんなで楽しんでもいい。
            <br />
            銭湯という“源”から、あたたかな余白が
            <br />
            あふれるように広がっていく。
          </Paragraph>
          <Paragraph>
            さあ、銭湯という場を、あなたのくらしに。
            <br />
            あたらしい時を、そのとなりに。
          </Paragraph>
          <Paragraph>
            さあ、銭湯という場を、あなたのくらしに。
            <br />
            あたらしい時を、そのとなりに。
          </Paragraph>
          <Paragraph>小杉湯 となり</Paragraph>
        </ConceptTextContainer>
      </IntersectionFadeIn>
    </Module>
  );
};

const Paragraph: React.FC = ({ children }) => <StyledParagraph>{children}</StyledParagraph>;

const StyledParagraph = styled.p`
  margin-bottom: ${SPACING.XX_LARGE}px;
  line-height: ${TYPOGRAPHY.LINE_HEIGHT.THICK};
  text-align: center;
  ${media.greaterThan(SCREEN_TYPE.MEDIUM)`
    font-size: 1.8rem;
  `}
  ${media.lessThan(SCREEN_TYPE.MEDIUM)`
    font-size: 1.5rem;
  `}
`;

const ConceptTextContainer = styled.section``;

export default ConceptModule;
