import React from 'react';
import styled, { css } from 'styled-components';
import { Spacing, ScreenType, SizeType } from '@/constants';
import media from 'styled-media-query';
import {
  ArchiveArticleItem,
  ArchiveArticleItemProps,
  ArchiveArticleItemDirection,
} from './ArchiveArticleItem';

const GUTTER_NORMAL = Spacing.XX_LARGE;
const GUTTER_SMALL = Spacing.XX_LARGE;

type ArchiveArticleGroupProps = {
  children: (ArchiveArticleItemProps | undefined)[];
};

export const ArchiveArticleGroup: React.FC<ArchiveArticleGroupProps> = ({ children }) => {
  const [
    article1,
    article2,
    article3,
    article4,
    article5,
    article6,
    article7,
    article8,
    article9,
    article10,
    article11,
  ] = children;
  if (!article1) return <div />;
  return (
    <ArchiveArticleGroupContainer>
      <ArticleSubGroupType1 list={[article1, article2, article3]} />
      {article4 && (
        <>
          {article5 && article6 ? (
            <ArticleSubGroupType2 list={[article4, article5, article6]} />
          ) : (
            <ArticleSubGroupType1 list={[article4, article5, article6]} />
          )}
        </>
      )}
      {article7 && (
        <>
          {article7 && article8 && article9 && article10 ? (
            <ArticleSubGroupType3 list={[article7, article8, article9, article10, article11]} />
          ) : (
            <ArticleSubGroupType1 list={[article7, article8, article9]} />
          )}
        </>
      )}
    </ArchiveArticleGroupContainer>
  );
};

type MaybeArchiveArticleItemProps = ArchiveArticleItemProps | undefined;

// 1〜3用
type ArticleSubGroupType1Props = {
  list: [ArchiveArticleItemProps, MaybeArchiveArticleItemProps, MaybeArchiveArticleItemProps];
};
const ArticleSubGroupType1: React.FC<ArticleSubGroupType1Props> = ({ list }) => {
  const [first, second, third] = list;
  return (
    <ArchiveArticleGroupGrid columns={2} collapseOnSmallScreen>
      {first && (
        <ArchiveArticleGroupGridItem columnStart={1} columnEnd={2} rowStart={1} rowEnd={2}>
          <ArchiveArticleGroupItem>{first}</ArchiveArticleGroupItem>
        </ArchiveArticleGroupGridItem>
      )}
      <ArchiveArticleGroupGridItem columnStart={2} columnEnd={3} rowStart={1} rowEnd={2}>
        {second && (
          <ArchiveArticleGroupItem
            textSize={SizeType.SMALL}
            direction={ArchiveArticleItemDirection.HORIZONTAL}
            enableTextSizingOnSmallScreen
          >
            {second}
          </ArchiveArticleGroupItem>
        )}
        {third && (
          <ArchiveArticleGroupItem
            textSize={SizeType.SMALL}
            direction={ArchiveArticleItemDirection.HORIZONTAL}
            enableTextSizingOnSmallScreen
          >
            {third}
          </ArchiveArticleGroupItem>
        )}
      </ArchiveArticleGroupGridItem>
    </ArchiveArticleGroupGrid>
  );
};

// 3つ並列
type ArticleSubGroupType2Props = {
  list: [ArchiveArticleItemProps, ArchiveArticleItemProps, ArchiveArticleItemProps];
};
const ArticleSubGroupType2: React.FC<ArticleSubGroupType2Props> = ({ list }) => {
  const [first, second, third] = list;
  return (
    <ArchiveArticleGroupGrid columns={3} collapseOnSmallScreen>
      <ArchiveArticleGroupGridItem columnStart={1} columnEnd={2} rowStart={1} rowEnd={2}>
        <ArchiveArticleGroupItem>{first}</ArchiveArticleGroupItem>
      </ArchiveArticleGroupGridItem>
      <ArchiveArticleGroupGridItem columnStart={2} columnEnd={3} rowStart={1} rowEnd={2}>
        <ArchiveArticleGroupItem>{second}</ArchiveArticleGroupItem>
      </ArchiveArticleGroupGridItem>
      <ArchiveArticleGroupGridItem columnStart={3} columnEnd={4} rowStart={1} rowEnd={2}>
        <ArchiveArticleGroupItem>{third}</ArchiveArticleGroupItem>
      </ArchiveArticleGroupGridItem>
    </ArchiveArticleGroupGrid>
  );
};

// 4〜5用
type ArticleSubGroupType3Props = {
  list: [
    ArchiveArticleItemProps,
    ArchiveArticleItemProps,
    ArchiveArticleItemProps,
    ArchiveArticleItemProps,
    MaybeArchiveArticleItemProps,
  ];
};
const ArticleSubGroupType3: React.FC<ArticleSubGroupType3Props> = ({ list }) => {
  const [first, second, third, fourth, fifth] = list;
  return (
    <ArchiveArticleGroupGrid columns={fifth ? 2 : 1} collapseOnSmallScreen>
      <ArchiveArticleGroupGridItem columnStart={1} columnEnd={2} rowStart={1} rowEnd={2}>
        <ArchiveArticleGroupGrid columns={2}>
          <ArchiveArticleGroupGridItem
            columnStart={1}
            columnEnd={2}
            rowStart={1}
            rowEnd={2}
            disableVerticalGutterSmallScreen
          >
            <ArchiveArticleGroupItem textSize={SizeType.SMALL} enableTextSizingOnSmallScreen>
              {first}
            </ArchiveArticleGroupItem>
          </ArchiveArticleGroupGridItem>
          <ArchiveArticleGroupGridItem
            columnStart={2}
            columnEnd={3}
            rowStart={1}
            rowEnd={2}
            disableVerticalGutterSmallScreen
          >
            <ArchiveArticleGroupItem textSize={SizeType.SMALL} enableTextSizingOnSmallScreen>
              {second}
            </ArchiveArticleGroupItem>
          </ArchiveArticleGroupGridItem>
          <ArchiveArticleGroupGridItem
            columnStart={1}
            columnEnd={2}
            rowStart={2}
            rowEnd={3}
            disableVerticalGutterSmallScreen
          >
            <ArchiveArticleGroupItem textSize={SizeType.SMALL} enableTextSizingOnSmallScreen>
              {third}
            </ArchiveArticleGroupItem>
          </ArchiveArticleGroupGridItem>
          <ArchiveArticleGroupGridItem
            columnStart={2}
            columnEnd={3}
            rowStart={2}
            rowEnd={3}
            disableVerticalGutterSmallScreen
          >
            <ArchiveArticleGroupItem textSize={SizeType.SMALL} enableTextSizingOnSmallScreen>
              {fourth}
            </ArchiveArticleGroupItem>
          </ArchiveArticleGroupGridItem>
        </ArchiveArticleGroupGrid>
      </ArchiveArticleGroupGridItem>
      {fifth && (
        <ArchiveArticleGroupGridItem columnStart={2} columnEnd={3} rowStart={1} rowEnd={2}>
          <ArchiveArticleGroupItem>{fifth}</ArchiveArticleGroupItem>
        </ArchiveArticleGroupGridItem>
      )}
    </ArchiveArticleGroupGrid>
  );
};

const verticalGutterFragment = css`
  & + & {
    margin-top: ${GUTTER_NORMAL}px;
    ${media.lessThan(ScreenType.MEDIUM)`
      margin-top: ${GUTTER_SMALL}px;
    `}
  }
`;

const ArchiveArticleGroupContainer = styled.div`
  ${verticalGutterFragment};
`;

type ArchiveArticleGroupGridProps = {
  columns: number;
  collapseOnSmallScreen?: boolean;
};

const ArchiveArticleGroupGrid = styled.div<ArchiveArticleGroupGridProps>`
  display: grid;
  grid-column-gap: ${GUTTER_NORMAL}px;
  grid-row-gap: ${GUTTER_NORMAL}px;
  grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr);`};
  ${media.lessThan(ScreenType.MEDIUM)`
    grid-column-gap: ${GUTTER_SMALL}px;
    grid-row-gap: ${GUTTER_SMALL}px;
  `}
  ${verticalGutterFragment};

  ${({ collapseOnSmallScreen }) =>
    collapseOnSmallScreen
      ? css`
          ${media.lessThan(ScreenType.MEDIUM)`
            display: block;
          `}
        `
      : ''}
`;

type ArchiveArticleGroupGridItemProps = {
  rowStart: number;
  rowEnd: number;
  columnStart: number;
  columnEnd: number;
  disableVerticalGutterSmallScreen?: boolean;
};

const ArchiveArticleGroupGridItem = styled.div<ArchiveArticleGroupGridItemProps>`
  ${({ rowStart, rowEnd, columnStart, columnEnd }) => css`
    grid-row: ${rowStart} / ${rowEnd};
    grid-column: ${columnStart} / ${columnEnd};
  `}

  ${({ disableVerticalGutterSmallScreen }) =>
    !disableVerticalGutterSmallScreen
      ? css`
          ${media.lessThan(ScreenType.MEDIUM)`
            margin-top: ${Spacing.LARGE}px;
          `}
        `
      : ''}
`;

type ArchiveArticleGroupItemProps = {
  children: ArchiveArticleItemProps;
} & Pick<ArchiveArticleItemProps, 'textSize' | 'direction' | 'enableTextSizingOnSmallScreen'>;

const ArchiveArticleGroupItem: React.FC<ArchiveArticleGroupItemProps> = ({
  textSize,
  direction,
  enableTextSizingOnSmallScreen,
  children,
}) => (
  <ArchiveArticleGroupItemContainer>
    <ArchiveArticleItem
      textSize={textSize}
      direction={direction}
      enableTextSizingOnSmallScreen={enableTextSizingOnSmallScreen}
      {...children}
    />
  </ArchiveArticleGroupItemContainer>
);

const ArchiveArticleGroupItemContainer = styled.div`
  ${verticalGutterFragment};
`;
