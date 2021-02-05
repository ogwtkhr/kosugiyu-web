import React from 'react';
import { usePageInfo } from '@/hooks';
import { PageId } from '@/constants';
import { Picture } from '@/atoms';
import styled from 'styled-components';
import media from 'styled-media-query';

import { BaseLayout, Meta } from '@/layouts';

const NotFoundPage: React.FC = () => {
  const { title, description } = usePageInfo({ id: PageId.NOT_FOUND });
  return (
    <BaseLayout>
      <Meta title={title} description={description} />
      <Hero>
        <Picture relativePath="illustrations/intro/story_4.png" />
      </Hero>
    </BaseLayout>
  );
};

const Hero = styled.div`
  width: 300px;
`;

export default NotFoundPage;
