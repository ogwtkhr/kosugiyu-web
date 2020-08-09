import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import styled from 'styled-components';
import { Plus, Minus } from 'styled-icons/boxicons-regular';
import { Module } from '@/layouts';

import { FaqListQuery } from '@/types';
import { SPACING, LINE, ANIMATION, OPACITY } from '@/constants';
import { IntersectionFadeIn } from '@/animations';

type FaqItem = {
  id: number;
  answer: string;
  question: string;
};

type FaqList = FaqItem[];

export const FaqModule: React.FC = () => {
  const data: FaqListQuery = useStaticQuery(graphql`
    query FaqList {
      settingYaml {
        moduleInfo {
          faq {
            faqList {
              id
              question
              answer
            }
          }
        }
      }
    }
  `);

  const faqListBase = data.settingYaml?.moduleInfo?.faq?.faqList;

  const [currentFaqId, setCurrentFaqId] = useState<number | null>(null);

  const faqList: FaqList = faqListBase ? (faqListBase as FaqList) : [];
  return (
    <Module title="よくある質問">
      <IntersectionFadeIn>
        <div>
          {faqList.map(({ id, question, answer }) => {
            const isOpen = currentFaqId === id;
            return (
              <Expand key={id}>
                <ExpandTitle onClick={(): void => setCurrentFaqId(isOpen ? null : id)}>
                  <FlexItem shrink={1}>{question}</FlexItem>
                  <FlexItem shrink={0}>
                    <IconContainer>
                      {isOpen ? (
                        <Minus iconVerticalAlign="top" />
                      ) : (
                        <Plus iconVerticalAlign="top" />
                      )}
                    </IconContainer>
                  </FlexItem>
                </ExpandTitle>
                {isOpen && <ExpandContent>{answer}</ExpandContent>}
              </Expand>
            );
          })}
        </div>
      </IntersectionFadeIn>
    </Module>
  );
};

const Expand = styled.dl`
  border-bottom: ${LINE.SHORT_HAND.NORMAL};

  &:first-child {
    border-top: ${LINE.SHORT_HAND.NORMAL};
  }
`;

const IconContainer = styled.div`
  width: ${SPACING.X_LARGE}px;
  height: ${SPACING.X_LARGE}px;
`;

const ExpandTitle = styled.dt`
  display: flex;
  justify-content: space-between;
  padding: ${SPACING.LARGE}px;
  transition: opacity ${ANIMATION.HOVER_TRANSITION_NORMAL};
  cursor: pointer;

  &:hover {
    opacity: ${OPACITY.HOVER_NORMAL};
  }
`;

type FlexItemProps = {
  shrink: number;
};

const FlexItem = styled.div<FlexItemProps>`
  display: flex;
  flex-shrink: ${({ shrink }): number => shrink};
  align-items: center;
`;

const ExpandContent = styled.dd`
  padding: ${SPACING.LARGE}px;
`;

export default FaqModule;
