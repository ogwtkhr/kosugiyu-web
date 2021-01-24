import React, { useMemo } from 'react';
import { graphql } from 'gatsby';
import dayjs from 'dayjs';

import { Query } from '@/types';
import { BaseLayout, Meta } from '@/layouts';
import styled from 'styled-components';
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
  Layer,
  DateFormat,
} from '@/constants';
import media from 'styled-media-query';
import { stripTag } from '@/util/string';
import { Article, ArticleInfo } from '@/components';
import { TwitterTweetButton, FacebookShareButton } from '@/components/SocialButton';
import { ReverseParallax, ParallaxBasePosition } from '@/effects';

type ArchivePageProps = {
  data: Pick<Query, 'microcmsArchive'>;
};

const ArchivePage: React.FC<ArchivePageProps> = ({ data }) => {
  const title = data.microcmsArchive?.title;
  const publishedAt = data.microcmsArchive?.publishedAt;
  const mainVisual = data.microcmsArchive?.mainVisual?.url;
  const writerName = data.microcmsArchive?.writer?.name;
  const body = data.microcmsArchive?.body;

  const strippedBody = useMemo(() => stripTag(body || '').slice(0, 200), [body]);
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
          <TitleInner>
            <Title>{title}</Title>
            <MetaInfoContainer>
              <MetaInfo>
                <PublishedDate>{publishedDate}</PublishedDate>
              </MetaInfo>
            </MetaInfoContainer>
          </TitleInner>
          <SocialIcons>
            <SocialIcon>
              <TwitterTweetButton />
            </SocialIcon>
            <SocialIcon>
              <FacebookShareButton />
            </SocialIcon>
          </SocialIcons>
        </TitleContainer>
        <MainVisualContainer>
          <ReverseParallax basePosition={ParallaxBasePosition.TOP} zoom={1.1} min={0} max={1000}>
            <MainVisual src={mainVisual} />
          </ReverseParallax>
        </MainVisualContainer>
        <ArticleContainer>
          <Article body={data.microcmsArchive?.body || ''} />
        </ArticleContainer>
        <InfoList>
          {data.microcmsArchive?.info?.map(
            (item) =>
              item?.head &&
              item?.body && (
                <InfoListItem>
                  <ArticleInfo title={item.head} body={item.body}></ArticleInfo>
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
  display: flex;
  margin: ${Spacing.XXX_LARGE}px auto;
  justify-content: space-between;
  position: relative;
  z-index: ${Layer.BASE};
  max-width: ${ModuleWidth.MIDDLE}px;

  ${media.lessThan(ScreenType.MEDIUM)`
    display: block;
    margin: 0;
    padding: 0 ${Spacing.LARGE}px ${Spacing.LARGE}px;
  `}
`;

const TitleInner = styled.div``;

const Title = styled.h2`
  ${Typography.Mixin.DISPLAY};
  font-size: ${TextSize.X_LARGE}rem;
  font-weight: ${TextWeight.BOLD};
  line-height: ${LineHeight.NORMAL};

  ${media.lessThan(ScreenType.MEDIUM)`
    font-size: ${TextSize.LARGE}rem;
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

const SocialIcon = styled.div`
  width: 28px;
  & + & {
    margin-left: ${Spacing.NORMAL}px;
  }
`;

const MetaInfo = styled.div``;

const PublishedDate = styled.p`
  ${Typography.Mixin.DISPLAY};
  font-size: ${TextSize.SMALL}rem;
  color: ${Colors.UI_TEXT_SUB};
`;

const MainVisualContainer = styled.div`
  width: 100%;
  max-width: ${ModuleWidth.MIDDLE}px;
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
    padding-bottom: ${AspectRatio.PLATINUM_HORIZONTAL}%;
  }

  ${media.lessThan(ScreenType.MEDIUM)`
    &::after {
      /* padding-bottom: ${AspectRatio.R_1_BY_1}%; */
      padding-bottom: 70%;
    }
  `}
`;

const ArticleContainer = styled.div`
  margin: ${Spacing.XX_LARGE}px 0;

  ${media.lessThan(ScreenType.MEDIUM)`
    margin: ${Spacing.LARGE}px 0;
  `}
`;

const InfoList = styled.ul``;

const InfoListItem = styled.li`
  &:not(:first-child) {
    margin-top: ${Spacing.NORMAL}px;
  }
`;

export default ArchivePage;
