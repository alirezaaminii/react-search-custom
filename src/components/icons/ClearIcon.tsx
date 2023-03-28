import * as React from 'react';
import {SVGProps} from 'react';

const ClearIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="12" cy="12" r="9" stroke="currentColor"/>
    <path d="M9.00009 14.9997L15.0001 8.99966" stroke="currentColor"/>
    <path d="M15 15L9 9" stroke="currentColor"/>
  </svg>
);

export default ClearIcon;