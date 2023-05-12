import React, { FC } from 'react';
import { DzSvg } from './DzSvg';
import { IconProps } from './types';

export const OutlineFacebook: FC<IconProps> = ({
  width = 26,
  height = 26,
  fill = 'black',
  viewBox = '0 0 26 26',
  className = '',
  ...rest
}) => {
  return (
    <DzSvg
      width={width}
      height={height}
      viewBox={viewBox}
      className={className}
      fill={fill}
      d="M13 2.1665C7.02649 2.1665 2.16663 7.02638 2.16663 12.9998C2.16663 18.9733 7.02649 23.8332 13 23.8332C18.9734 23.8332 23.8333 18.9733 23.8333 12.9998C23.8333 7.02638 18.9734 2.1665 13 2.1665ZM13 3.7915C18.0952 3.7915 22.2083 7.90459 22.2083 12.9998C22.2083 17.5394 18.9405 21.2908 14.625 22.0569V15.7082H16.5885C16.8615 15.7082 17.0924 15.504 17.1259 15.2332L17.3291 13.6082C17.3486 13.4543 17.2997 13.2999 17.1968 13.1829C17.0944 13.0664 16.9471 12.9998 16.7916 12.9998H14.625V11.104C14.625 10.5065 15.1108 10.0207 15.7083 10.0207H16.7916C17.0906 10.0207 17.3333 9.77855 17.3333 9.479V7.65088C17.3333 7.3703 17.1193 7.13624 16.8403 7.11133C16.8083 7.10862 16.0441 7.0415 15.0767 7.0415C12.6896 7.0415 11.375 8.45861 11.375 11.0321V12.9998H9.20829C8.90929 12.9998 8.66663 13.242 8.66663 13.5415V15.1665C8.66663 15.466 8.90929 15.7082 9.20829 15.7082H11.375V22.0569C7.0594 21.2908 3.79163 17.5394 3.79163 12.9998C3.79163 7.90459 7.90471 3.7915 13 3.7915Z"
      {...rest}
      ariaTitle="Facebook Icon"
    />
  );
};

export default OutlineFacebook;
