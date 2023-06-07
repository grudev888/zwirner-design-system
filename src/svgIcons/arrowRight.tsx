import React, { FC } from 'react';

import { DzSvg } from './DzSvg';
import { IconProps } from './types';

export const ArrowRight: FC<IconProps> = ({
  width = 12,
  height = 8,
  fill = 'currentColor',
  viewBox = '0 0 12 8',
  className = '',
}) => {
  return (
    <DzSvg
      width={width}
      height={height}
      viewBox={viewBox}
      className={className}
      ariaTitle="Arrow Right Icon"
      fill={fill}
    >
      <defs>
        <mask id="path-1-inside-1_252_884" fill="#ffffff">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M 0.324868,3.6752 H 9.76214 L 6.71709,0.630794 C 6.57317,0.486872 6.57317,0.252188 6.71709,0.108266 6.7871,0.0382496 6.87981,0 6.979,0 7.07754,0 7.17025,0.0382496 7.24026,0.108266 L 10.9284,3.79643 V 3.80162 C 10.9822,3.85089 11.0166,3.92091 11.0166,4 c 0,0.07974 -0.0357,0.14976 -0.0895,0.19968 V 4.20486 L 7.24026,7.89173 C 7.17025,7.96175 7.07754,8 6.979,8 6.87981,8 6.7871,7.96175 6.71709,7.89173 6.57317,7.74781 6.57317,7.51313 6.71709,7.36921 L 9.76214,4.3248 H 0.324868 C 0.145289,4.3248 7.05719e-5,4.17958 7.05719e-5,4 7.05719e-5,3.82042 0.145289,3.6752 0.324868,3.6752 Z"
            id="path407"
          />
        </mask>
      </defs>
      <mask id="a" fill="#ffffff">
        <path
          fillRule="evenodd"
          d="M 10.692,3.675 H 1.254 L 4.3,0.631 A 0.37017057,0.37017057 0 0 0 3.776,0.108 L 0.088,3.796 V 3.802 A 0.268,0.268 0 0 0 0.09,4.2 V 4.205 L 3.777,7.892 C 3.847,7.962 3.94,8 4.039,8 4.138,8 4.23,7.962 4.301,7.892 a 0.37,0.37 0 0 0 0,-0.523 L 1.254,4.325 h 9.438 a 0.325,0.325 0 1 0 0,-0.65 z"
          clipRule="evenodd"
          id="path56"
        />
      </mask>
      <path
        d="M9.76214 3.6752L10.4692 2.96802L12.1767 4.6752H9.76214V3.6752ZM6.71709 0.630794L6.01006 1.33798L6.00998 1.3379L6.71709 0.630794ZM7.24026 0.108266L7.94737 -0.598841L7.24026 0.108266ZM10.9284 3.79643L11.6355 3.08933L11.9284 3.38222V3.79643H10.9284ZM10.9284 3.80162L10.2531 4.53914L9.92843 4.24185V3.80162H10.9284ZM10.9271 4.19968H9.92714V3.76333L10.247 3.46657L10.9271 4.19968ZM10.9271 4.20486H11.9271V4.61908L11.6342 4.91197L10.9271 4.20486ZM7.24026 7.89173L7.94737 8.59884L7.24026 7.89173ZM6.71709 7.36921L6.00998 6.6621L6.01006 6.66202L6.71709 7.36921ZM9.76214 4.3248V3.3248H12.1767L10.4692 5.03198L9.76214 4.3248ZM0.324868 2.6752H9.76214V4.6752H0.324868V2.6752ZM9.05511 4.38238L6.01006 1.33798L7.42412 -0.0763878L10.4692 2.96802L9.05511 4.38238ZM6.00998 1.3379C5.47553 0.803454 5.47553 -0.0643945 6.00998 -0.598841L7.42419 0.815373C7.6708 0.56877 7.6708 0.17029 7.42419 -0.0763126L6.00998 1.3379ZM6.00998 -0.598841C6.26845 -0.857309 6.61589 -1 6.979 -1V1C7.14373 1 7.30576 0.933808 7.42419 0.815373L6.00998 -0.598841ZM6.979 -1C7.3424 -1 7.68956 -0.85665 7.94737 -0.598841L6.53316 0.815373C6.65093 0.933149 6.81269 1 6.979 1V-1ZM7.94737 -0.598841L11.6355 3.08933L10.2213 4.50354L6.53316 0.815373L7.94737 -0.598841ZM11.9284 3.79643V3.80162H9.92843V3.79643H11.9284ZM11.6038 3.0641C11.8496 3.28924 12.0166 3.62095 12.0166 4H10.0166C10.0166 4.22086 10.1148 4.41254 10.2531 4.53914L11.6038 3.0641ZM12.0166 4C12.0166 4.39047 11.8399 4.71694 11.6072 4.93278L10.247 3.46657C10.122 3.58258 10.0166 3.76901 10.0166 4H12.0166ZM11.9271 4.19968V4.20486H9.92714V4.19968H11.9271ZM11.6342 4.91197L7.94737 8.59884L6.53316 7.18463L10.22 3.49776L11.6342 4.91197ZM7.94737 8.59884C7.68956 8.85665 7.34239 9 6.979 9V7C6.81269 7 6.65094 7.06685 6.53316 7.18463L7.94737 8.59884ZM6.979 9C6.61589 9 6.26845 8.85731 6.00998 8.59884L7.42419 7.18463C7.30576 7.06619 7.14373 7 6.979 7V9ZM6.00998 8.59884C5.47553 8.06439 5.47553 7.19655 6.00998 6.6621L7.42419 8.07631C7.6708 7.82971 7.6708 7.43123 7.42419 7.18463L6.00998 8.59884ZM6.01006 6.66202L9.05511 3.61762L10.4692 5.03198L7.42412 8.07639L6.01006 6.66202ZM9.76214 5.3248H0.324868V3.3248H9.76214V5.3248ZM0.324868 5.3248C-0.406996 5.3248 -0.999929 4.73186 -0.999929 4H1.00007C1.00007 3.62729 0.697574 3.3248 0.324868 3.3248V5.3248ZM-0.999929 4C-0.999929 3.26814 -0.406996 2.6752 0.324868 2.6752V4.6752C0.697574 4.6752 1.00007 4.37271 1.00007 4H-0.999929Z"
        fill="inherit"
        mask="url(#path-1-inside-1_252_884)"
        id="path410"
        transform="matrix(1.0892723,0,0,1.0892723,-7.7046098e-5,0.1429108)"
      />
    </DzSvg>
  );
};

export default ArrowRight;
