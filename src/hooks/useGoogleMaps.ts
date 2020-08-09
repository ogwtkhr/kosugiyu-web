import { useEffect, useState } from 'react';

export const useGoogleMap = <T extends Element = Element>({
  mapContainerRef,
  initialConfig,
}: {
  mapContainerRef: React.RefObject<any>;
  initialConfig: google.maps.MapOptions;
}): void => {
  const [map, setMap] = useState<google.maps.Map>();
  useEffect(() => {
    // console.log(google);
    // if (!google || !mapContainerRef?.current) {
    //   return;
    // }
    // const newMap = new google.maps.Map<T>(mapContainerRef?.current, initialConfig);
    // setMap(newMap);
  }, [mapContainerRef]);
};

export default useGoogleMap;
