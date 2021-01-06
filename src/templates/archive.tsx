import React, { useMemo } from 'react';
import { graphql } from 'gatsby';
import dayjs from 'dayjs';
import { Twitter, FacebookCircle } from '@styled-icons/boxicons-logos';

import { Query } from '@/types';
import { BaseLayout, Meta } from '@/layouts';
import styled, { css } from 'styled-components';
import {
  ModuleWidth,
  TextWeight,
  Spacing,
  StyleMixin,
  AspectRatio,
  Colors,
  Typography,
  TextSize,
  ScreenType,
  LineHeight,
  ScreenValue,
  Layer,
  DateFormat,
} from '@/constants';
import media from 'styled-media-query';
import { useParallax } from '@/hooks';
import { stripTag } from '@/util/string';

type ArchivePageProps = {
  data: Pick<Query, 'microcmsArchive'>;
};

const ArchivePage: React.FC<ArchivePageProps> = ({ data }) => {
  const title = data.microcmsArchive?.title;
  const publishedAt = data.microcmsArchive?.publishedAt;
  const mainVisual = data.microcmsArchive?.mainVisual?.url;
  const writerName = data.microcmsArchive?.writer?.name;
  const body = data.microcmsArchive?.body;

  const [mainVisualRef, { top: parallaxSeed }] = useParallax<HTMLDivElement>({
    min: 0,
    max: 1000,
    coefficient: 0.2,
    direction: 'reverse',
  });
  const strippedBody = useMemo(() => stripTag(body || '').slice(0, 200), [body]);
  const mainVisualTransformProperty = useMemo(() => `translateY(${parallaxSeed}px)`, [
    parallaxSeed,
  ]);
  const publishedDate = useMemo(() => dayjs(publishedAt).format(DateFormat.YEAR_MONTH_DATE_JP), [
    publishedAt,
  ]);

  if (!title || !publishedAt || !writerName || !mainVisual || !body)
    return <div>data not exists.</div>;
  return (
    <BaseLayout useHeader>
      <Meta title={title} description={strippedBody} ogImage={mainVisual} />
      <Container>
        <TitleContainer>
          <Title>{title}</Title>
          <MetaInfoContainer>
            {/* <SocialIcons>
              <TwitterIcon />
              <FacebookIcon />
            </SocialIcons> */}
            <MetaInfo>
              <PublishedDate>{publishedDate}</PublishedDate>
              {/* <WriterName>{writerName}</WriterName> */}
            </MetaInfo>
          </MetaInfoContainer>
        </TitleContainer>
        <MainVisualContainer ref={mainVisualRef}>
          <MainVisual
            src={mainVisual}
            style={{
              transform: mainVisualTransformProperty,
            }}
          />
        </MainVisualContainer>
        <Article
          dangerouslySetInnerHTML={{
            __html: data.microcmsArchive?.body || '',
          }}
        />
        <InfoList>
          {data.microcmsArchive?.info?.map(
            (item) =>
              item?.head &&
              item?.body && (
                <InfoListItem>
                  <InfoItem>
                    <InfoItemHead>{item.head}</InfoItemHead>
                    <InfoItemBody>{item.body}</InfoItemBody>
                  </InfoItem>
                </InfoListItem>
              ),
          )}
        </InfoList>
      </Container>
    </BaseLayout>
  );
};

export const query = graphql`
  query($slug: String!) {
    microcmsArchive(slug: { eq: $slug }) {
      title
      body
      publishedAt
      writer {
        name
      }
      mainVisual {
        url
      }
      info {
        fieldId
        head
        body
      }
    }
  }
`;

const Container = styled.div`
  background-color: ${Colors.UI_PAPER};
`;

const TitleContainer = styled.div`
  max-width: ${ModuleWidth.ARTICLE}px;
  margin: ${Spacing.XXX_LARGE}px auto;
  position: relative;
  z-index: ${Layer.BASE};
  max-width: ${ModuleWidth.ARTICLE}px;
  /* margin: -${Spacing.XX_LARGE * 4}px auto ${Spacing.XX_LARGE}px; */
  /* padding: ${Spacing.XX_LARGE}px; */
  /* background-color: ${Colors.ABSTRACT_WHITE}; */

  ${media.lessThan(ScreenType.MEDIUM)`
    margin: 0;
    padding: ${Spacing.LARGE}px;
  `}
`;

const Title = styled.h2`
  ${Typography.Mixin.DISPLAY};
  font-size: ${TextSize.X_LARGE}rem;
  font-weight: ${TextWeight.BOLD};
  line-height: ${LineHeight.NORMAL};

  ${media.lessThan(ScreenType.MEDIUM)`
    font-size: 2.4rem;
  `}
`;

const MetaInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${media.lessThan(ScreenType.MEDIUM)`
    display: block;
  `}
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  ${media.lessThan(ScreenType.MEDIUM)`
    justify-content: flex-end;
  `}
`;

const iconMixin = css`
  width: ${Spacing.X_LARGE}px;
  height: ${Spacing.X_LARGE}px;
  color: ${Colors.ABSTRACT_NAVY};
`;

// const TwitterIcon = styled(Twitter)`
//   ${iconMixin};
// `;

// const FacebookIcon = styled(FacebookCircle)`
//   ${iconMixin};
//   margin-left: ${Spacing.NORMAL}px;
// `;

const MetaInfo = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const PublishedDate = styled.p`
  ${Typography.Mixin.DISPLAY};
  font-size: ${TextSize.SMALL}rem;
  color: ${Colors.UI_TEXT_SUB};
`;

const MainVisualContainer = styled.div`
  width: 100%;
  max-width: ${ModuleWidth.WIDE}px;
  margin: 0 auto;
  overflow: hidden;

  ${media.greaterThan(ScreenType.LARGE)`
  `}
`;

const MainVisual = styled.div`
  width: 100%;
  height: 100%;
  ${StyleMixin.BACKGROUND_IMAGE_WITH_SRC};

  &::after {
    content: '';
    display: block;
    /* padding-bottom: ${AspectRatio.R_16_BY_9}%; */
    padding-bottom: 30%;
  }

  ${media.lessThan(ScreenType.MEDIUM)`
    &::after {
      /* padding-bottom: ${AspectRatio.R_1_BY_1}%; */
      padding-bottom: 70%;
    }
  `}
`;

const Article = styled.article`
  max-width: ${ModuleWidth.ARTICLE}px;
  margin: 0 auto;

  ${media.lessThan(ScreenType.MEDIUM)`
    margin: 0 ${Spacing.LARGE}px;
  `}

  & p {
    font-weight: ${TextWeight.NORMAL};
  }

  & strong {
    color: ${Colors.ABSTRACT_NAVY};
    font-weight: ${TextWeight.BOLD};
  }

  & img {
    display: block;
    width: 100%;
    margin-top: ${Spacing.X_LARGE}px;

    ${media.lessThan(ScreenType.MEDIUM)`
      margin-left: -${Spacing.LARGE}px;
      margin-right: -${Spacing.LARGE}px;
      width: calc(100% + ${Spacing.LARGE * 2}px);
    `}
  }
`;

const InfoList = styled.ul`
  margin: ${Spacing.LARGE}px auto 0;
  max-width: ${ModuleWidth.ARTICLE}px;

  ${media.lessThan(ScreenType.MEDIUM)`
    margin: 0;
    padding: ${Spacing.LARGE}px;
  `}
`;

const InfoListItem = styled.li`
  &:not(:first-child) {
    margin-top: ${Spacing.NORMAL}px;
  }
`;

const InfoItem = styled.dl``;

const InfoItemHead = styled.dt`
  display: inline-block;
  border-bottom: solid 1px ${Colors.ABSTRACT_GRAY};
  color: ${Colors.ABSTRACT_GRAY};
  font-size: ${TextSize.SMALL}rem;
`;

const InfoItemBody = styled.dd`
  color: ${Colors.ABSTRACT_STRONG_GRAY};
`;

export default ArchivePage;
