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
  TypographyMixin,
  TextSize,
  ScreenType,
  LineHeight,
  Layer,
  DateFormat,
  getResponsiveOffsetMixin,
} from '@/constants';
import media from 'styled-media-query';
import { stripTag } from '@/util/string';
import { Article, ArticleInfo, MicroCMSImage } from '@/components';
import { TwitterTweetButton, FacebookShareButton } from '@/components/SocialButton';

type ArchivePageProps = {
  data: Pick<Query, 'microcmsArchive'>;
};

const ArchivePage: React.FC<ArchivePageProps> = ({ data }) => {
  const title = data.microcmsArchive?.title;
  const publishDate = data.microcmsArchive?.publishDate || data.microcmsArchive?.publishedAt;
  const mainVisual = data.microcmsArchive?.mainVisual?.url;
  const body = data.microcmsArchive?.body || '';
  const info = data.microcmsArchive?.info;

  const strippedBody = useMemo(() => stripTag(body || '').slice(0, 200), [body]);
  const publishedDate = useMemo(() => dayjs(publishDate).format(DateFormat.YEAR_MONTH_DATE_JP), [
    publishDate,
  ]);

  if (!title || !publishDate || !mainVisual || !body) return <div>data not exists.</div>;
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
              <SocialButtons>
                <SocialButton>
                  <TwitterTweetButton shape="circle" />
                </SocialButton>
                <SocialButton>
                  <FacebookShareButton shape="circle" />
                </SocialButton>
              </SocialButtons>
            </MetaInfoContainer>
          </TitleInner>
        </TitleContainer>
        <MainVisualContainer>
          <MicroCMSImage
            src={mainVisual}
            options={{
              height: 600,
              aspectRatio: AspectRatio.PLATINUM_HORIZONTAL,
            }}
            optionsSmallScreen={{
              height: 300,
              aspectRatio: AspectRatio.R_4_BY_3,
            }}
          />
        </MainVisualContainer>
        <ArticleContainer>
          <Article body={data.microcmsArchive?.body || ''} />
        </ArticleContainer>
        {info && info.length > 0 && (
          <ArticleInfo title="詳細情報">
            {data.microcmsArchive?.info?.map((item, index) => (
              <div key={index}>
                {/* TODO */}
                {item?.head && item?.body && (
                  <div>
                    <span>{item.head}</span>：<span>{item.body}</span>
                  </div>
                )}
              </div>
            ))}
          </ArticleInfo>
        )}
      </Container>
    </BaseLayout>
  );
};

export const query = graphql`
  query($slug: String!) {
    microcmsArchive(slug: { eq: $slug }) {
      title
      body
      publishDate
      publishedAt
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
  position: relative;
  z-index: ${Layer.BASE};
  justify-content: space-between;
  margin-top: ${Spacing.XXX_LARGE}px;
  margin-bottom: ${Spacing.XXX_LARGE}px;

  ${media.lessThan(ScreenType.MEDIUM)`
    margin-top: ${Spacing.LARGE}px;
    margin-bottom: ${Spacing.LARGE}px;
  `}

  ${getResponsiveOffsetMixin({
    maxWidth: ModuleWidth.MIDDLE,
    margin: Spacing.XXX_LARGE,
    marginSmall: Spacing.LARGE,
  })};
`;

const TitleInner = styled.div`
  width: 100%;
`;

const Title = styled.h2`
  ${TypographyMixin.DISPLAY};
  font-size: ${TextSize.X_LARGE}rem;
  font-weight: ${TextWeight.BOLD};
  line-height: ${LineHeight.NORMAL};

  ${media.lessThan(ScreenType.MEDIUM)`
    font-size: ${TextSize.LARGE}rem;
  `}
`;

const MetaInfoContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: ${Spacing.LARGE}px;
`;

const SocialButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  ${media.lessThan(ScreenType.MEDIUM)`
    justify-content: flex-end;
  `}
`;

const SocialButton = styled.div`
  width: 28px;
  & + & {
    margin-left: ${Spacing.NORMAL}px;
  }
`;

const MetaInfo = styled.div``;

const PublishedDate = styled.p`
  ${TypographyMixin.DISPLAY};
  color: ${Colors.UI_TEXT_SUB};
  font-size: ${TextSize.SMALL}rem;
`;

const MainVisualContainer = styled.div`
  width: 100%;
  max-width: ${ModuleWidth.MIDDLE}px;
  margin: 0 auto;
  overflow: hidden;
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
