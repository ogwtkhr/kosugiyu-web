import React from 'react';
// import styled from 'styled-components';
import loadable from '@loadable/component';
import { Module } from '@/layouts';
import { IntersectionFadeIn } from '@/animations';

// 通常importだとgatsby build時にエラーになる
const Calendar = loadable(() => import('../components/Calendar'));

export const ScheduleModule: React.FC = () => {
  return (
    <Module title="スケジュール">
      <IntersectionFadeIn>
        <Calendar />
      </IntersectionFadeIn>
    </Module>
  );
};

export default ScheduleModule;
