import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
// import styled from 'styled-components';
// import { Spacing, Typography } from '@/constants';

type IntersectionFadeInProps = {
  // children: string;
};

export const IntersectionFadeIn: React.FC<IntersectionFadeInProps> = ({ children }) => {
  const [isExec, setIsExec] = useState(false);
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const { isIntersecting } = entries[0];
        if (isIntersecting && !isExec) {
          setIsExec(true);
          controls.start({
            y: 0,
            opacity: 1,

            transition: {
              duration: 0.9,
              ease: 'backOut',
            },
          });
        }
      },
      {
        threshold: [0.2],
      },
    );

    observer.observe(ref.current as HTMLDivElement);
  }, []);
  return (
    <motion.div
      animate={controls}
      initial={{
        y: '50px',
        opacity: 0,
      }}
      ref={ref}
    >
      {children}
    </motion.div>
  );
};

// export const IntersectionFadeIn = styled.h2<IntersectionFadeInProps>`
//   ${Typography.Mixin.DISPLAY}
//   font-size: 3rem;
// `;

// export const IntersectionFadeInContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   padding: ${Spacing.XXX_LARGE}px 0;
// `;

export default IntersectionFadeIn;
