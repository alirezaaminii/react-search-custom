import * as React from 'react';
import {SVGProps} from 'react';

const ClearIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" {...props}>
    <path d="M3.707 3.293a1 1 0 0 1 1.414 0L12 10.586l6.879-6.879a1 1 0 1 1 1.414 1.414L13.414 12l6.879 6.879a1 1 0 0 1-1.414 1.414L12 13.414l-6.879 6.879a1 1 0 0 1-1.414-1.414L10.586 12 3.707 5.121a1 1 0 0 1 0-1.414z" fill="currentColor"/>
  </svg>
);

export default ClearIcon;