import React from 'react';
import styled, { css } from 'styled-components';
import { Spacing, ScreenType, SizeType } from '@/constants';
import media from 'styled-media-query';
import { ArticleItem, ArticleItemProps, ArticleItemDirection } from './ArticleItem';

const GUTTER_NORMAL = Spacing.XX_LARGE;
const GUTTER_SMALL = Spacing.LARGE;

type ArticleGroupProps = {
  children: (ArticleItemProps | undefined)[];
};

export const ArticleGroup: React.FC<ArticleGroupProps> = ({ children }) => {
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
    <ArticleGroupContainer>
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
    </ArticleGroupContainer>
  );
};

type MaybeArticleItemProps = ArticleItemProps | undefined;

// 1〜3用
type ArticleSubGroupType1Props = {
  list: [ArticleItemProps, MaybeArticleItemProps, MaybeArticleItemProps];
};
const ArticleSubGroupType1: React.FC<ArticleSubGroupType1Props> = ({ list }) => {
  const [first, second, third] = list;
  return (
    <ArticleGroupGrid columns={2} collapseOnSmallScreen>
      {first && (
        <ArticleGroupGridItem columnStart={1} columnEnd={2} rowStart={1} rowEnd={2}>
          <ArticleGroupItem>{first}</ArticleGroupItem>
        </ArticleGroupGridItem>
      )}
      <ArticleGroupGridItem columnStart={2} columnEnd={3} rowStart={1} rowEnd={2}>
        {second && (
          <ArticleGroupItem
            textSize={SizeType.SMALL}
            direction={ArticleItemDirection.HORIZONTAL}
            enableTextSizingOnSmallScreen
          >
            {second}
          </ArticleGroupItem>
        )}
        {third && (
          <ArticleGroupItem
            textSize={SizeType.SMALL}
            direction={ArticleItemDirection.HORIZONTAL}
            enableTextSizingOnSmallScreen
          >
            {third}
          </ArticleGroupItem>
        )}
      </ArticleGroupGridItem>
    </ArticleGroupGrid>
  );
};

// 3つ並列
type ArticleSubGroupType2Props = {
  list: [ArticleItemProps, ArticleItemProps, ArticleItemProps];
};
const ArticleSubGroupType2: React.FC<ArticleSubGroupType2Props> = ({ list }) => {
  const [first, second, third] = list;
  return (
    <ArticleGroupGrid columns={3} collapseOnSmallScreen>
      <ArticleGroupGridItem columnStart={1} columnEnd={2} rowStart={1} rowEnd={2}>
        <ArticleGroupItem>{first}</ArticleGroupItem>
      </ArticleGroupGridItem>
      <ArticleGroupGridItem columnStart={2} columnEnd={3} rowStart={1} rowEnd={2}>
        <ArticleGroupItem>{second}</ArticleGroupItem>
      </ArticleGroupGridItem>
      <ArticleGroupGridItem columnStart={3} columnEnd={4} rowStart={1} rowEnd={2}>
        <ArticleGroupItem>{third}</ArticleGroupItem>
      </ArticleGroupGridItem>
    </ArticleGroupGrid>
  );
};

// 4〜5用
type ArticleSubGroupType3Props = {
  list: [
    ArticleItemProps,
    ArticleItemProps,
    ArticleItemProps,
    ArticleItemProps,
    MaybeArticleItemProps,
  ];
};
const ArticleSubGroupType3: React.FC<ArticleSubGroupType3Props> = ({ list }) => {
  const [first, second, third, fourth, fifth] = list;
  return (
    <ArticleGroupGrid columns={fifth ? 2 : 1} collapseOnSmallScreen>
      <ArticleGroupGridItem columnStart={1} columnEnd={2} rowStart={1} rowEnd={2}>
        <ArticleGroupGrid columns={2}>
          <ArticleGroupGridItem
            columnStart={1}
            columnEnd={2}
            rowStart={1}
            rowEnd={2}
            disableVerticalGutterSmallScreen
          >
            <ArticleGroupItem textSize={SizeType.SMALL} enableTextSizingOnSmallScreen>
              {first}
            </ArticleGroupItem>
          </ArticleGroupGridItem>
          <ArticleGroupGridItem
            columnStart={2}
            columnEnd={3}
            rowStart={1}
            rowEnd={2}
            disableVerticalGutterSmallScreen
          >
            <ArticleGroupItem textSize={SizeType.SMALL} enableTextSizingOnSmallScreen>
              {second}
            </ArticleGroupItem>
          </ArticleGroupGridItem>
          <ArticleGroupGridItem
            columnStart={1}
            columnEnd={2}
            rowStart={2}
            rowEnd={3}
            disableVerticalGutterSmallScreen
          >
            <ArticleGroupItem textSize={SizeType.SMALL} enableTextSizingOnSmallScreen>
              {third}
            </ArticleGroupItem>
          </ArticleGroupGridItem>
          <ArticleGroupGridItem
            columnStart={2}
            columnEnd={3}
            rowStart={2}
            rowEnd={3}
            disableVerticalGutterSmallScreen
          >
            <ArticleGroupItem textSize={SizeType.SMALL} enableTextSizingOnSmallScreen>
              {fourth}
            </ArticleGroupItem>
          </ArticleGroupGridItem>
        </ArticleGroupGrid>
      </ArticleGroupGridItem>
      {fifth && (
        <ArticleGroupGridItem columnStart={2} columnEnd={3} rowStart={1} rowEnd={2}>
          <ArticleGroupItem>{fifth}</ArticleGroupItem>
        </ArticleGroupGridItem>
      )}
    </ArticleGroupGrid>
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

const ArticleGroupContainer = styled.div`
  ${verticalGutterFragment};
`;

type ArticleGroupGridProps = {
  columns: number;
  collapseOnSmallScreen?: boolean;
};

const ArticleGroupGrid = styled.div<ArticleGroupGridProps>`
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

type ArticleGroupGridItemProps = {
  rowStart: number;
  rowEnd: number;
  columnStart: number;
  columnEnd: number;
  disableVerticalGutterSmallScreen?: boolean;
};

const ArticleGroupGridItem = styled.div<ArticleGroupGridItemProps>`
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

type ArticleGroupItemProps = {
  children: ArticleItemProps;
} & Pick<ArticleItemProps, 'textSize' | 'direction' | 'enableTextSizingOnSmallScreen'>;

const ArticleGroupItem: React.FC<ArticleGroupItemProps> = ({
  textSize,
  direction,
  enableTextSizingOnSmallScreen,
  children,
}) => (
  <ArticleGroupItemContainer>
    <ArticleItem
      textSize={textSize}
      direction={direction}
      enableTextSizingOnSmallScreen={enableTextSizingOnSmallScreen}
      {...children}
    />
  </ArticleGroupItemContainer>
);

const ArticleGroupItemContainer = styled.div`
  ${verticalGutterFragment};
`;
