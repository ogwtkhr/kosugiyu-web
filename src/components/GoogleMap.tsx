import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import { Loader } from 'google-maps';
import { useGoogleApiKey } from '@/hooks';
import { ScreenType } from '@/constants';

export const GoogleMap: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const apiKey = useGoogleApiKey();

  useEffect(() => {
    (async (): Promise<void> => {
      if (!apiKey) return;
      const loader = new Loader(apiKey);
      const google = await loader.load();
      const position = new google.maps.LatLng(35.708082, 139.648879);
      const map = new google.maps.Map(mapContainerRef.current as HTMLDivElement, {
        zoom: 16,
        center: position,
        scrollwheel: false,
        // disable UI controls
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
      });
      map.setOptions({
        styles: [
          {
            stylers: [
              {
                saturation: -100,
              },
            ],
          },
        ],
      });
      const marker = new google.maps.Marker({
        position,
        map,
      });
    })();
  }, []);

  return <MapContainer ref={mapContainerRef} />;
};

const MapContainer = styled.div`
  ${media.greaterThan(ScreenType.LARGE)`
    width: 100%;
    height: 50vh;
  `}

  &::before {
    content: '';
    display: block;
    padding-bottom: 50%;
    max-height: 100px;
    ${media.greaterThan(ScreenType.LARGE)`
      display: none;
    `}
    ${media.lessThan(ScreenType.MEDIUM)`
      padding-bottom: 80%;
    `}
  }
`;

export default GoogleMap;
