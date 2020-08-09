import React from 'react';
// import { Link, graphql, useStaticQuery } from 'gatsby';

import { BaseLayout, ModuleContainer, SEO, HeroImage } from '@/layouts';
import {
  ConceptModule,
  UseCaseModule,
  AccessModule,
  FaqModule,
  ScheduleModule,
  ContactModule,
  AboutModule,
} from '@/modules';

const IndexPage: React.FC = () => {
  return (
    <BaseLayout>
      <SEO title="トップ" />
      <HeroImage />
      <ModuleContainer>
        <ConceptModule />
        <UseCaseModule />
        <AccessModule />
        <ScheduleModule />
        <FaqModule />
        <AboutModule />
        <ContactModule />
      </ModuleContainer>
    </BaseLayout>
  );
};

export default IndexPage;
