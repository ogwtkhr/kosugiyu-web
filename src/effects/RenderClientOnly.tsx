import React from 'react';
import { useHasMounted } from '@/hooks';

export const RenderClientOnly: React.FC = ({ children }) => {
  const hasMounted = useHasMounted();
  return hasMounted ? <>{children}</> : null;
};
