import * as React from 'react';
import {SVGProps} from 'react';

const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M13.5 13.5L19 19M15 10C15 12.7614 12.7614 15 10 15C7.23858 15 5 12.7614 5 10C5 7.23858 7.23858 5 10 5C12.7614 5 15 7.23858 15 10Z"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default SearchIcon;