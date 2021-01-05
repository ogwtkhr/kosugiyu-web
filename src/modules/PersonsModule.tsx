import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { AllMicrocmsPersonsQuery } from '@/types';
import styled from 'styled-components';
import {
  StyleMixin,
  AspectRatio,
  Typography,
  TextSize,
  TextWeight,
  LineHeight,
  LetterSpacing,
  Colors,
  Spacing,
  BigSpacing,
  ModuleWidth,
  ScreenType,
} from '@/constants';
import { ArrowIcon } from '@/components';
import media from 'styled-media-query';

import headingImage from '@/images/photos/persons/persons_heading.jpg';

type PersonsModuleProps = {
  useTitle?: boolean;
  enableTopEmphasis?: boolean;
};

export const PersonsModule: React.FC<PersonsModuleProps> = ({ useTitle, enableTopEmphasis }) => {
  const data = useStaticQuery<AllMicrocmsPersonsQuery>(graphql`
    query allMicrocmsPersons {
      allMicrocmsPersons {
        nodes {
          id
          position
          title
          name
          slug
          mainVisual {
            url
          }
        }
      }
    }
  `);

  const [topPerson, ...persons] = data.allMicrocmsPersons.nodes;

  const topPersonSlug = topPerson?.slug || '';
  const topPersonPosition = topPerson?.position || '';
  const topPersonName = topPerson?.name || '';
  const topPersonTitle = topPerson?.title || '';
  const topPersonMainVisualUrl = topPerson?.mainVisual?.url || '';

  return (
    <Container>
      {useTitle && (
        <PersonsHeading>
          <PersonsHeadingMain>
            <PersonsHeadingTitle>
              <PersonsHeadingTitleSub>日常の中の非日常を届ける</PersonsHeadingTitleSub>
              <PersonsHeadingTitleMain>ケノ日のハレ</PersonsHeadingTitleMain>
            </PersonsHeadingTitle>
            <PersonsHeadingBodyCopy>
              親譲りの無鉄砲で小供の時から損ばかりして居る。小学校に居る時分学校の二階から飛び降りて一週間程腰を抜かした事がある。なぜそんな無闇(むやみ)をしたと聞く人があるかも知れぬ。別段深い理由でもない。
            </PersonsHeadingBodyCopy>
          </PersonsHeadingMain>
          <PersonsHeadingImage src={headingImage} />
        </PersonsHeading>
      )}

      <PersonLink to={`/persons/${topPersonSlug}`}>
        <TopPersonContainer>
          <TopPersonThumbnail src={topPersonMainVisualUrl} />
          <TopPersonInfo>
            <TopPersonPosition>{topPersonPosition}</TopPersonPosition>
            <TopPersonName>{topPersonName}</TopPersonName>
            <TopPersonTitle>{topPersonTitle}</TopPersonTitle>
            <TopPersonIconContainer>
              <ArrowIcon />
            </TopPersonIconContainer>
          </TopPersonInfo>
        </TopPersonContainer>
      </PersonLink>
      <PersonListContainer>
        <PersonList>
          {persons.map((person) => {
            const slug = person.slug || '';
            const position = person.position || '';
            const name = person.name || '';
            const mainVisualUrl = person?.mainVisual?.url || '';
            return (
              <PersonListItem key={person.slug}>
                <PersonItem
                  slug={slug}
                  position={position}
                  name={name}
                  mainVisualUrl={mainVisualUrl}
                />
              </PersonListItem>
            );
          })}
        </PersonList>
      </PersonListContainer>
    </Container>
  );
};

const PersonsHeading = styled.div`
  display: flex;
  height: 600px;
`;

const PersonsHeadingImage = styled.div`
  flex: 1;
  ${StyleMixin.BACKGROUND_IMAGE_WITH_SRC};
`;

const PersonsHeadingMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30%;
  padding: 0 ${Spacing.XX_LARGE}px;
`;

const PersonsHeadingTitle = styled.div`
  display: flex;
`;

const PersonsHeadingTitleMain = styled.h1`
  ${Typography.Mixin.DISPLAY};
  ${Typography.Mixin.VERTICAL_WRITING};
  font-size: ${TextSize.X_LARGE}rem;
`;

const PersonsHeadingTitleSub = styled.p`
  ${Typography.Mixin.DISPLAY};
  ${Typography.Mixin.VERTICAL_WRITING};
  margin-top: ${Spacing.XX_LARGE}px;
  font-size: ${TextSize.X_SMALL}rem;
`;

const PersonsHeadingBodyCopy = styled.p`
  ${Typography.Mixin.DISPLAY};
  font-size: ${TextSize.SMALL}rem;
`;

const Container = styled.div`
  width: 100%;
  background-color: ${Colors.UI_PAPER};
`;

type PersonItemProps = {
  slug: string;
  position: string;
  name: string;
  mainVisualUrl: string;
};

const PersonItem: React.FC<PersonItemProps> = ({ slug, position, name, mainVisualUrl }) => {
  // const formattedPublishedAt = useMemo(
  //   () => dayjs(publishedAt).format(DateFormat.YEAR_MONTH_DATE_JP),
  //   [publishedAt],
  // );

  return (
    <PersonLink to={`/persons/${slug}`}>
      <PersonThumbnailContainer>
        <PersonThumbnail src={mainVisualUrl} />
        <PersonInfo>
          <PersonPosition>{position}</PersonPosition>
          <PersonNameContainer>
            <PersonName>{name}</PersonName>
            <PersonIconContainer>
              <ArrowIcon />
            </PersonIconContainer>
          </PersonNameContainer>
        </PersonInfo>
      </PersonThumbnailContainer>
    </PersonLink>
  );
};

const TopPersonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: ${ModuleWidth.SEMI_WIDE}px;
  margin: ${BigSpacing.LARGE}px auto;
`;

const TopPersonThumbnail = styled.div`
  width: 40%;
  ${StyleMixin.BACKGROUND_IMAGE_WITH_SRC};

  &::after {
    content: '';
    display: block;
    padding-bottom: ${AspectRatio.R_3_BY_4}%;
  }
`;

const TopPersonInfo = styled.div`
  width: 40%;
`;

const TopPersonPosition = styled.p`
  font-size: ${TextSize.SMALL}rem;
  ${Typography.Mixin.DISPLAY};
`;

const TopPersonName = styled.h3`
  margin-top: ${Spacing.NORMAL}px;
  font-size: ${TextSize.X_LARGE}rem;
  ${Typography.Mixin.DISPLAY};
`;

const TopPersonTitle = styled.p`
  margin-top: ${Spacing.NORMAL}px;
  font-size: ${TextSize.X_SMALL}rem;
  ${Typography.Mixin.DISPLAY};
`;

const TopPersonIconContainer = styled.div`
  width: ${Spacing.XX_LARGE}px;
  margin-top: ${Spacing.NORMAL}px;
  margin-left: auto;
`;

const PersonLink = styled(Link)`
  display: block;
  text-decoration: none;
  ${StyleMixin.HOVER_EFFECT.NORMAL};
`;

const PersonListContainer = styled.div`
  margin: ${BigSpacing.LARGE}px auto;
  max-width: ${ModuleWidth.MIDDLE}px;
`;

const PersonList = styled.ul`
  display: grid;
  grid-gap: ${BigSpacing.XX_SMALL}px;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
  overflow: hidden;

  ${media.lessThan(ScreenType.MEDIUM)`
    /* grid-template-columns: repeat(2, 1fr); */
  `}
`;

const PersonListItem = styled.li``;

const PersonInfo = styled.div`
  margin-top: ${Spacing.NORMAL}px;
`;

const PersonPosition = styled.p`
  font-size: ${TextSize.X_SMALL}rem;
  ${Typography.Mixin.DISPLAY};
`;

const PersonNameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PersonName = styled.h3`
  color: ${Colors.ABSTRACT_BLACK};
  font-size: ${TextSize.LARGE}rem;
  line-height: ${LineHeight.NORMAL};
  text-decoration: none;
  ${Typography.Mixin.DISPLAY};

  /* ${media.lessThan(ScreenType.MEDIUM)`
    font-size: ${TextSize.NORMAL}rem;
  `} */
`;

const PersonIconContainer = styled.div`
  width: ${Spacing.XX_LARGE}px;
`;

const PersonThumbnailContainer = styled.div``;

const PersonThumbnail = styled.div`
  width: 100%;
  ${StyleMixin.BACKGROUND_IMAGE_WITH_SRC}

  &::after {
    content: '';
    display: block;
    padding-bottom: ${AspectRatio.SILVER_VERTICAL}%;
  }

  ${media.lessThan(ScreenType.MEDIUM)`
    width: auto;
    position: static;
  `}
`;

export default PersonsModule;
