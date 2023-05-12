import React, { FC } from 'react';
import { DzSvg } from './DzSvg';
import { IconProps } from './types';

export const OutlineTwitter: FC<IconProps> = ({
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
      d="M17.3334 3.25C14.3914 3.25 12.0037 5.62723 11.94 8.55452C9.33878 8.24254 7.64491 7.26998 6.60585 6.31169C5.45354 5.24895 5.08876 4.30477 5.08876 4.30477C5.0355 4.17058 4.94746 4.05301 4.83369 3.96414C4.71991 3.87528 4.58452 3.81832 4.44143 3.79914C4.29835 3.77996 4.15273 3.79925 4.01958 3.85502C3.88642 3.91079 3.77052 4.00103 3.68381 4.11646C3.68381 4.11646 2.70838 5.41667 2.70838 7.3125C2.70838 8.39637 3.05061 9.19834 3.45847 9.87801C3.44344 9.87098 3.34209 9.83569 3.34209 9.83569C3.2126 9.77104 3.06818 9.74214 2.92378 9.752C2.77937 9.76186 2.64022 9.8101 2.52071 9.89175C2.4012 9.9734 2.30567 10.0855 2.24399 10.2164C2.18232 10.3474 2.15674 10.4924 2.16989 10.6366C2.16989 10.6366 2.48262 12.9225 4.63172 14.5933L4.40744 14.6493C4.28569 14.6797 4.17264 14.7379 4.07714 14.8193C3.98164 14.9007 3.90629 15.0031 3.857 15.1185C3.80771 15.2339 3.78581 15.3591 3.79302 15.4844C3.80023 15.6097 3.83636 15.7316 3.89857 15.8406C3.89857 15.8406 4.263 16.457 5.02634 17.1059C5.47893 17.4906 6.14378 17.8876 6.92746 18.2548C5.96503 18.6065 4.52991 18.9583 2.43755 18.9583C2.28142 18.9583 2.12858 19.0033 1.99734 19.0878C1.86609 19.1724 1.76198 19.293 1.69747 19.4352C1.63297 19.5774 1.61079 19.7351 1.63359 19.8896C1.6564 20.0441 1.72322 20.1887 1.82606 20.3062C1.82606 20.3062 2.44694 20.9901 3.67429 21.5852C4.90164 22.1803 6.79227 22.75 9.47922 22.75C14.2024 22.75 17.5959 20.4843 19.7138 17.6126C21.8316 14.741 22.7501 11.2998 22.7501 8.66667C22.7501 8.49959 22.7396 8.33486 22.7247 8.17155C23.8683 7.06962 24.2974 6.24121 24.3179 6.2006C24.4208 5.99423 24.3825 5.74637 24.2227 5.58171C24.0635 5.4165 23.8166 5.36997 23.607 5.46639L23.5192 5.50659C23.4439 5.54126 23.3686 5.57615 23.2928 5.61027C23.5132 5.25873 23.6872 4.88306 23.808 4.49414C23.8752 4.27964 23.8026 4.04459 23.625 3.90592C23.4473 3.76726 23.2026 3.75241 23.0103 3.86995C22.3483 4.27232 21.7137 4.554 21.0531 4.74276C20.081 3.82063 18.7725 3.25 17.3334 3.25ZM17.3334 4.875C19.4368 4.875 21.1251 6.56328 21.1251 8.66667C21.1251 10.9086 20.2831 14.1028 18.4061 16.6478C16.5292 19.1928 13.6935 21.125 9.47922 21.125C7.43973 21.125 6.08307 20.7561 5.06654 20.3569C6.13136 20.1916 7.04819 19.9709 7.70716 19.7158C8.8499 19.2735 9.46652 18.7626 9.46652 18.7626C9.57963 18.6655 9.66385 18.5392 9.70998 18.3975C9.75612 18.2558 9.76238 18.1041 9.72808 17.959C9.69378 17.814 9.62025 17.6811 9.51553 17.5751C9.41081 17.469 9.27893 17.3938 9.13433 17.3577C7.65952 16.989 6.71365 16.3926 6.12025 15.8956L6.96766 15.684C7.13525 15.6422 7.28515 15.548 7.3956 15.4153C7.50606 15.2825 7.57133 15.1179 7.58195 14.9455C7.59256 14.7731 7.54796 14.6018 7.45462 14.4565C7.36129 14.3112 7.22407 14.1994 7.06288 14.1373C5.3051 13.4612 4.56697 12.5051 4.1895 11.704C4.64883 11.7991 5.0765 11.9167 5.68755 11.9167C5.87053 11.9165 6.04811 11.8546 6.19152 11.741C6.33494 11.6273 6.43581 11.4686 6.47779 11.2905C6.51978 11.1124 6.50042 10.9254 6.42286 10.7597C6.3453 10.5939 6.21407 10.4592 6.05043 10.3774C6.05043 10.3774 4.33338 9.5875 4.33338 7.3125C4.33338 6.90405 4.44651 6.64536 4.5291 6.33602C4.81249 6.71686 5.04605 7.08424 5.50347 7.5061C6.89808 8.79231 9.20317 10.1038 12.6858 10.2906C12.796 10.2965 12.9063 10.2799 13.0098 10.2417C13.1134 10.2036 13.2081 10.1448 13.2882 10.0689C13.3683 9.99294 13.4321 9.90149 13.4757 9.80011C13.5192 9.69872 13.5417 9.58952 13.5417 9.47917V8.66667C13.5417 6.56328 15.23 4.875 17.3334 4.875Z"
      {...rest}
      ariaTitle="Twitter Icon"
    />
  );
};

export default OutlineTwitter;
