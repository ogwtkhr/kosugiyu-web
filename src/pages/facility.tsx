import React from 'react';
import { BaseLayout, Meta } from '@/layouts';
import { usePageInfo } from '@/hooks';
import { CommonTitle } from '@/molecules';
import { PageId } from '@/constants';
import { FacilityModule } from '@/organisms';

const FacilityPage: React.FC = () => {
  const { title, description, ogImage } = usePageInfo({ id: PageId.FACILITY });

  return (
    <>
      <BaseLayout>
        <Meta title={title} description={description} ogImage={ogImage} />
        <CommonTitle title="営業・\n施設案内" imagePath="photos/facility/hero.jpg" />
        <FacilityModule />
      </BaseLayout>
    </>
  );
};

export default FacilityPage;
