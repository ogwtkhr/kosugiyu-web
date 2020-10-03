import { Colors } from '@/constants';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';

const windowGlobal = (typeof window !== 'undefined' && window) as Window;

// type SineWaveProps = {};

export const SineWave: React.FC = () => {
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>();
  const [cssWidth, setCssWidth] = useState<number>(0);
  const [cssHeight, setCssHeight] = useState<number>(0);
  const [degree, setDegree] = useState<number>(0);
  const currentDegreeRef = useRef(degree);
  currentDegreeRef.current = degree;

  const interval = 500;
  const period = 1;
  const angular = 15;
  // const unit = 20; // 描写解像度
  const deflection = 2;
  const resolution = 50;

  const width = useMemo(() => cssWidth * windowGlobal.devicePixelRatio, [cssWidth]);
  const height = useMemo(() => cssHeight * windowGlobal.devicePixelRatio, [cssHeight]);
  const T = useMemo(() => width * period, [width]);
  const r = useMemo(() => height / deflection, [height]);
  const angularVelocity = useMemo(() => (Math.PI * 2) / T, [T]);
  const yAxis = useMemo(() => height / 2, [height]);

  const unit = width / resolution;

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   console.log(degree);
  // }, [degree]);

  const update = () => {
    if (!ctx) return;
    ctx.clearRect(0, 0, width, height);
    ctx.beginPath();

    ctx.moveTo(0, r * Math.sin(angularVelocity * currentDegreeRef.current) + yAxis);

    [...Array(resolution)].forEach((_e, index) => {
      const x = (index + 1) * unit;
      const y = r * Math.sin(angularVelocity * (currentDegreeRef.current + x));
      ctx.lineTo(x, y + yAxis);
    });

    ctx.lineTo(width, height);
    ctx.lineTo(0, height);

    ctx.fill();
    setDegree((currentDegree) => currentDegree + angular);
    // console.log(degree);
    setTimeout(update, interval);
  };

  const initialize = useCallback(() => {
    if (!ctx) return;
    ctx.fillStyle = Colors.ABSTRACT_NAVY;
  }, [ctx]);

  useEffect(() => {
    initialize();
    update();

    // setInterval(() => {
    //   update();
    //   console.log(degree);
    //   setDegree((currentDegree) => currentDegree + angular);
    // }, interval);
  }, [ctx]);

  useEffect(() => {
    const canvasElement = canvasRef.current;
    const containerElement = containerRef.current;
    if (!canvasElement || !containerElement) return;

    setCtx(canvasElement.getContext('2d'));
    setCssWidth(containerElement.clientWidth);
    setCssHeight(containerElement.clientHeight);
  }, [canvasRef, containerRef]);

  return (
    <Container ref={containerRef}>
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        style={{ width: `${cssWidth}px`, height: `${cssHeight}px` }}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
