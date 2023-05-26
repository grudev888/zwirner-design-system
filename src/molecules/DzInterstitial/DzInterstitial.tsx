import React, { FC } from 'react';
import { DzButtonProps } from '../../atoms';
import { InterstitialSplit, InterstitialSplitProps } from './InterstitialSplit';
import {
  InterstitialFullWidth,
  InterstitialFullWidthProps,
} from './InterstitialFullWidth';

export const INTERSTITIAL_TEXT_COLORS = {
  WHITE: 'white-100',
  BLACK: 'black-100',
  BLACK_80: 'black-80',
  BLACK_60: 'black-60',
  BLACK_40: 'black-40',
};
export const INTERSTITIAL_TEXT_COLORS_NAMES = [
  INTERSTITIAL_TEXT_COLORS.WHITE,
  INTERSTITIAL_TEXT_COLORS.BLACK,
  INTERSTITIAL_TEXT_COLORS.BLACK_80,
  INTERSTITIAL_TEXT_COLORS.BLACK_60,
  INTERSTITIAL_TEXT_COLORS.BLACK_40,
] as const;

export type TextColors = typeof INTERSTITIAL_TEXT_COLORS_NAMES[number];

export interface DzInterstitialProps {
  data: InterstitialSplitProps | InterstitialFullWidthProps;
}
export interface PrimaryCTAInterstitial {
  text: string;
  ctaProps?: DzButtonProps;
}

export const DzInterstitial: FC<DzInterstitialProps> = ({ data }) => {
  const { split = false } = data;
  if (split) {
    return <InterstitialSplit {...(data as InterstitialSplitProps)} />;
  }
  return <InterstitialFullWidth {...(data as InterstitialFullWidthProps)} />;
};

export default DzInterstitial;
