import React, { SVGAttributes } from 'react';
import { colors } from 'theme';

const IconOutlineInfo = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="16px"
      height="16px"
      viewBox="0 0 124 124"
      fill={colors.redPrimary}
      {...props}
    >
      <g>
        <path d="M62,0C27.8,0,0,27.8,0,62s27.8,62,62,62s62-27.8,62-62S96.2,0,62,0z M62,109c-25.9,0-47-21.1-47-47c0-25.9,21.1-47,47-47c25.9,0,47,21.1,47,47C109,87.9,87.9,109,62,109z" />
        <path d="M65,23h-6c-3.3,0-6,2.7-6,6v41c0,3.3,2.7,6,6,6h6c3.3,0,6-2.7,6-6V29C71,25.7,68.3,23,65,23z" />
        <circle cx="62" cy="91.5" r="9" />
      </g>
    </svg>
  );
};

export default IconOutlineInfo;
