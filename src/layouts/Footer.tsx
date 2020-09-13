import React from 'react';
import styled from 'styled-components';
import { Typography, Spacing } from '@/constants';

export const Footer: React.FC = () => (
  <StyledFooter>copyright {new Date().getFullYear()} 小杉湯</StyledFooter>
);

const StyledFooter = styled.footer`
  padding: ${Spacing.XXX_LARGE}px;
  ${Typography.MIXIN.SUB}
  text-align: center;
`;

export default Footer;
