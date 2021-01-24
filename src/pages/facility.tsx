import React from 'react';
import { BaseLayout, Meta } from '@/layouts';
import { usePageInfo } from '@/hooks';
import { CommonTitle } from '@/components';
import { FacilityModule } from '@/modules';

const FacilityPage: React.FC = () => {
  const { title: pageTitle, description: pageDescription } = usePageInfo({ id: 'facility' });

  return (
    <>
      <BaseLayout>
        <Meta title={pageTitle} description={pageDescription} />
        <CommonTitle title="営業・\n施設案内" imagePath="photos/facility/hero.jpg" />
        <FacilityModule />
      </BaseLayout>
    </>
  );
};

export default FacilityPage;
