import React, { FC } from 'react';
import { DzSvg } from './DzSvg';
import { IconProps } from './types';

export const BoldWeChat: FC<IconProps> = ({
  width = 20,
  height = 17,
  fill = 'black',
  viewBox = '0 0 20 17',
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
      d="M17.7804 14.7049C19.0369 13.7933 19.8397 12.4477 19.8397 10.9495C19.8397 8.20741 17.1712 5.98409 13.8793 5.98409C10.5874 5.98409 7.91889 8.20741 7.91889 10.9495C7.91889 13.6929 10.5874 15.9162 13.8793 15.9162C14.5592 15.9162 15.2164 15.8201 15.8256 15.6449L15.9994 15.618C16.1153 15.618 16.2185 15.6533 16.3161 15.7099L17.6221 16.4632L17.7351 16.5C17.7614 16.5004 17.7874 16.4955 17.8117 16.4857C17.8361 16.476 17.8582 16.4614 17.8769 16.443C17.8956 16.4246 17.9104 16.4027 17.9205 16.3785C17.9306 16.3543 17.9358 16.3283 17.9358 16.3021L17.9033 16.1565L17.6348 15.1544L17.6136 15.0272C17.6137 14.9641 17.6288 14.9019 17.6579 14.8458C17.6869 14.7898 17.7289 14.7414 17.7804 14.7049ZM7.20369 0.5C3.25458 0.5 0.0517578 3.16855 0.0517578 6.46042C0.0517578 8.25547 1.0143 9.87384 2.52243 10.9664C2.64398 11.0512 2.72313 11.1926 2.72313 11.3537L2.69769 11.5063L2.37543 12.7078L2.33727 12.8816C2.33727 13.0145 2.44469 13.1219 2.57614 13.1219L2.71465 13.0767L4.27932 12.1721C4.39387 12.1019 4.5252 12.0638 4.65953 12.0618L4.86871 12.0943C5.62798 12.3116 6.41394 12.4215 7.20369 12.4208L7.59663 12.4109C7.43837 11.9404 7.35723 11.4473 7.35634 10.9509C7.35634 7.94875 10.2765 5.51483 13.8793 5.51483L14.268 5.52473C13.7295 2.67809 10.7726 0.5 7.20369 0.5ZM11.892 10.1565C11.7876 10.1564 11.6843 10.1358 11.5878 10.0957C11.4914 10.0557 11.4038 9.99705 11.33 9.92316C11.2563 9.84927 11.1978 9.76157 11.1579 9.66507C11.1181 9.56858 11.0976 9.46517 11.0977 9.36077C11.0978 9.25636 11.1184 9.15299 11.1585 9.05657C11.1985 8.96014 11.2572 8.87255 11.331 8.79879C11.4049 8.72503 11.4926 8.66654 11.5891 8.62667C11.6856 8.5868 11.789 8.56633 11.8934 8.56642C12.1043 8.56642 12.3065 8.65018 12.4556 8.79929C12.6047 8.94839 12.6885 9.15061 12.6885 9.36147C12.6885 9.57233 12.6047 9.77456 12.4556 9.92366C12.3065 10.0728 12.1043 10.1565 11.8934 10.1565H11.892ZM15.8666 10.1565C15.6557 10.1565 15.4535 10.0728 15.3044 9.92366C15.1553 9.77456 15.0715 9.57233 15.0715 9.36147C15.0715 9.15061 15.1553 8.94839 15.3044 8.79929C15.4535 8.65018 15.6557 8.56642 15.8666 8.56642C16.0774 8.56642 16.2797 8.65018 16.4288 8.79929C16.5779 8.94839 16.6616 9.15061 16.6616 9.36147C16.6616 9.57233 16.5779 9.77456 16.4288 9.92366C16.2797 10.0728 16.0774 10.1565 15.8666 10.1565ZM4.81924 5.50635C4.69414 5.50635 4.57026 5.48171 4.45468 5.43384C4.3391 5.38596 4.23408 5.31579 4.14562 5.22733C4.05716 5.13887 3.98699 5.03385 3.93911 4.91827C3.89124 4.80269 3.86659 4.67881 3.86659 4.5537C3.86659 4.4286 3.89124 4.30472 3.93911 4.18914C3.98699 4.07356 4.05716 3.96854 4.14562 3.88008C4.23408 3.79162 4.3391 3.72145 4.45468 3.67357C4.57026 3.6257 4.69414 3.60106 4.81924 3.60106C5.0719 3.60106 5.31421 3.70142 5.49287 3.88008C5.67152 4.05874 5.77189 4.30105 5.77189 4.5537C5.77189 4.80636 5.67152 5.04867 5.49287 5.22733C5.31421 5.40599 5.0719 5.50635 4.81924 5.50635ZM9.58814 5.50635C9.46304 5.50635 9.33916 5.48171 9.22358 5.43384C9.108 5.38596 9.00298 5.31579 8.91452 5.22733C8.82606 5.13887 8.75589 5.03385 8.70801 4.91827C8.66013 4.80269 8.63549 4.67881 8.63549 4.5537C8.63549 4.4286 8.66013 4.30472 8.70801 4.18914C8.75589 4.07356 8.82606 3.96854 8.91452 3.88008C9.00298 3.79162 9.108 3.72145 9.22358 3.67357C9.33916 3.6257 9.46304 3.60106 9.58814 3.60106C9.8408 3.60106 10.0831 3.70142 10.2618 3.88008C10.4404 4.05874 10.5408 4.30105 10.5408 4.5537C10.5408 4.80636 10.4404 5.04867 10.2618 5.22733C10.0831 5.40599 9.8408 5.50635 9.58814 5.50635Z"
      {...rest}
      ariaTitle="Wechat Icon"
    />
  );
};

export default BoldWeChat;
