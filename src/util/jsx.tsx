import React from 'react';

export const getTextBreakFragment = (str: string): JSX.Element[] => {
  const array = str.split(/\\n/);
  return array.map((textFragment, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <React.Fragment key={index}>
      {textFragment}
      {index < array.length - 1 && <br />}
    </React.Fragment>
  ));
};
