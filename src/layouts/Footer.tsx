import React from 'react';
import styled from 'styled-components';
import { TYPOGRAPHY, SPACING } from '@/constants';

export const Footer: React.FC = () => (
  <StyledFooter>copyright {new Date().getFullYear()} 小杉湯となり</StyledFooter>
);

const StyledFooter = styled.footer`
  padding: ${SPACING.XXX_LARGE}px;
  ${TYPOGRAPHY.MIXIN.SUB}
  text-align: center;
`;

export default Footer;
