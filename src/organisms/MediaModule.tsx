import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { AllMicrocmsMediaQuery } from '@/types';
import styled, { css } from 'styled-components';
import {
  StyleMixin,
  Spacing,
  BigSpacing,
  ModuleWidth,
  ScreenType,
  ModuleHeight,
  Colors,
} from '@/constants';
import { Picture, Button, ButtonContainer, MediaLogo, MediaTagLine } from '@/atoms';
import { MediaArticleItem, MediaPickupArticleItem } from '@/molecules';
import media from 'styled-media-query';
import { ReverseParallax, ParallaxBasePosition, IntersectionFadeIn } from '@/effects';
import { orderBy } from 'lodash';

type MediaModuleProps = {
  useTitle?: boolean;
  summaryMode?: boolean;
  summaryMax?: number;
  enableTopEmphasis?: boolean;
  withVerticalMargin?: boolean;
};

export const MediaModule: React.FC<MediaModuleProps> = ({
  useTitle,
  summaryMode,
  summaryMax = 3,
  enableTopEmphasis = true,
  withVerticalMargin,
}) => {
  const data = useStaticQuery<AllMicrocmsMediaQuery>(graphql`
    query allMicrocmsMedia {
      allMicrocmsMedia {
        nodes {
          id
          position
          title
          name
          slug
          isComingSoon
          publishDate
          publishedAt
          mainVisual {
            url
          }
        }
      }
    }
  `);

  const baseArticles = data.allMicrocmsMedia.nodes;
  const [topArticle, ...restMedia] = baseArticles;
  const articles = enableTopEmphasis ? restMedia : baseArticles;
  const summarizedArticles = orderBy(
    (summaryMode ? articles.slice(0, summaryMax) : articles).map((article) => {
      const slug = article.slug || '';
      const position = article.position || '';
      const name = article.name || '';
      const mainVisualUrl = article?.mainVisual?.url || '';
      const isComingSoon = article.isComingSoon;
      const publishDate = article.publishDate || article.publishedAt || '';
      return {
        slug,
        position,
        name,
        mainVisualUrl,
        publishDate,
        isComingSoon: !!isComingSoon,
      };
    }),
    'publishDate',
    // TODO: タイミングを見計らってdescに
    'asc',
  );

  const topArticleSlug = topArticle?.slug || '';
  const topArticlePosition = topArticle?.position || '';
  const topArticleName = topArticle?.name || '';
  const topArticleTitle = topArticle?.title || '';
  const topArticleMainVisualUrl = topArticle?.mainVisual?.url || '';
  const isSummaryView = summaryMode && articles.length > summaryMax;

  return (
    <>
      {useTitle && (
        <MediaTitleContainer>
          <MediaTitleInner>
            <MediaTitleLogoArea>
              <MediaTitleLogo>
                <MediaLogo />
              </MediaTitleLogo>
              <MediaTitleTagLine>
                <MediaTagLine />
              </MediaTitleTagLine>
            </MediaTitleLogoArea>
            <MediaTitleImage>
              <ReverseParallax
                zoom={1.1}
                zoomSmall={1.7}
                basePosition={ParallaxBasePosition.TOP}
                fillLayout
              >
                <Picture relativePath="photos/media/hero.jpg" />
              </ReverseParallax>
            </MediaTitleImage>
          </MediaTitleInner>
        </MediaTitleContainer>
      )}
      <Container withVerticalMargin={withVerticalMargin}>
        {enableTopEmphasis && (
          <TopPersonContainer>
            <PersonLink to={`/media/${topArticleSlug}`}>
              <MediaPickupArticleItem
                position={topArticlePosition}
                name={topArticleName}
                title={topArticleTitle}
                mainVisualUrl={topArticleMainVisualUrl}
              />
            </PersonLink>
          </TopPersonContainer>
        )}

        <MediaArticleListContainer>
          {summaryMode && (
            <>
              <MediaSummaryTitleLogo>
                <IntersectionFadeIn fillLayout slideIn>
                  <MediaLogo />
                </IntersectionFadeIn>
              </MediaSummaryTitleLogo>
              <MediaSummaryTitleTagLine>
                <IntersectionFadeIn fillLayout slideIn>
                  <MediaTagLine />
                </IntersectionFadeIn>
              </MediaSummaryTitleTagLine>
            </>
          )}
          <MediaArticleList under2={summarizedArticles.length <= 2} withTitle={summaryMode}>
            {summarizedArticles.map(({ slug, position, name, mainVisualUrl, isComingSoon }) => {
              return (
                <MediaArticleListItem key={slug}>
                  {!isComingSoon ? (
                    <PersonLink to={`/media/${slug}`}>
                      <MediaArticleItem
                        position={position}
                        name={name}
                        mainVisualUrl={mainVisualUrl}
                      />
                    </PersonLink>
                  ) : (
                    <MediaArticleItem
                      position={position}
                      name={name}
                      mainVisualUrl={mainVisualUrl}
                      isComingSoon={isComingSoon}
                    />
                  )}
                </MediaArticleListItem>
              );
            })}
          </MediaArticleList>
        </MediaArticleListContainer>
        {isSummaryView && (
          <ButtonContainer>
            <Button to="/media">さらに読む</Button>
          </ButtonContainer>
        )}
      </Container>
    </>
  );
};

type ContainerProps = Pick<MediaModuleProps, 'withVerticalMargin'>;
const Container = styled.div<ContainerProps>`
  position: relative;
  max-width: ${ModuleWidth.MIDDLE}px;
  margin: ${({ withVerticalMargin }) =>
    `${withVerticalMargin ? BigSpacing.NORMAL : 0}px auto ${BigSpacing.NORMAL}px`};

  ${media.lessThan<ContainerProps>(ScreenType.MEDIUM)`
    margin: ${({ withVerticalMargin }) =>
      `${withVerticalMargin ? Spacing.XXX_LARGE : 0}px auto ${
        withVerticalMargin ? Spacing.X_LARGE : 0
      }px`};
  `}
`;

const MediaTitleContainer = styled.div``;

const MediaTitleInner = styled.div`
  display: flex;
  position: relative;
  max-width: ${ModuleWidth.WIDE}px;
  height: ${ModuleHeight.HERO_NORMAL_SCREEN}px;
  margin: 0 auto;
  ${media.lessThan(ScreenType.MEDIUM)`
    height: 388px;
  `}
`;

const MediaTitleLogoArea = styled.div`
  position: relative;
  z-index: 1;
  width: 40%;
  ${media.lessThan(ScreenType.MEDIUM)`
    width: 25%;
  `}
`;

const MediaTitleLogo = styled.div`
  position: absolute;
  top: 138px;
  right: -135px;
  width: 447px;
  height: 227px;

  ${media.lessThan(ScreenType.MEDIUM)`
    top: 22px;
    right: -178px;
    width: 250px;
    height: 127px;
  `}
`;

const MediaTitleTagLine = styled.div`
  position: absolute;
  top: 337px;
  right: 251px;
  width: 168px;
  height: 126px;

  ${media.lessThan(ScreenType.MEDIUM)`
    top: 173px;
    right: -25px;
    width: 98px;
    height: 70px;
  `}
`;

const MediaTitleImage = styled.div`
  width: 60%;
  overflow: hidden;
  ${media.lessThan(ScreenType.MEDIUM)`
    padding-top: 68px;
    width: 75%;
  `}
`;

const MediaSummaryTitleLogo = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 300px;
  height: 152px;

  ${media.lessThan(ScreenType.MEDIUM)`
    top: 12px;
    left: 10px;
    width: 212px;
    height: 107px;
  `}
`;

const MediaSummaryTitleTagLine = styled.div`
  position: absolute;
  top: 199px;
  left: 0;
  width: 97px;
  height: 72px;

  ${media.lessThan(ScreenType.MEDIUM)`
    top: 28px;
    left: auto;
    right: 16px;
    width: 88px;
    height: 63px;
  `}
`;

const PersonLink = styled(Link)`
  display: block;
  color: ${Colors.UI_TEXT_MAIN};
  text-decoration: none;
  ${StyleMixin.HOVER_EFFECT.NORMAL};
`;

const TopPersonContainer = styled.div`
  margin: ${BigSpacing.LARGE}px auto;
  ${media.lessThan(ScreenType.MEDIUM)`
    margin: ${BigSpacing.X_SMALL}px 0 ${BigSpacing.XX_SMALL}px;
  `}
`;

const MediaArticleListContainer = styled.div`
  display: flex;
`;

type MediaArticleListProps = {
  under2?: boolean;
  withTitle?: boolean;
};

const MediaArticleList = styled.ul<MediaArticleListProps>`
  display: grid;
  grid-gap: ${BigSpacing.XX_SMALL}px;
  grid-template-columns: repeat(3, 1fr);
  flex: 1;
  margin-top: ${({ withTitle }) => (withTitle ? 122 : 0)}px;
  margin-right: auto;
  margin-bottom: 0;
  /* TODO いまいちなので分離したい */
  margin-left: ${({ withTitle }) => (withTitle ? '146px' : 'auto')};
  overflow: hidden;

  ${({ under2 }) =>
    under2
      ? css`
          grid-template-columns: repeat(2, 1fr);
          grid-gap: ${BigSpacing.SMALL}px;
          max-width: 600px;
        `
      : ''}

  ${media.lessThan<MediaArticleListProps>(ScreenType.MEDIUM)`
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${Spacing.XX_LARGE}px ${Spacing.LARGE}px;
    margin-top: ${({ withTitle }) => (withTitle ? 110 : 0)}px;
    margin-left: ${Spacing.X_LARGE}px;
    margin-right: ${Spacing.X_LARGE}px;
  `}
`;

const MediaArticleListItem = styled.li``;

export default MediaModule;
