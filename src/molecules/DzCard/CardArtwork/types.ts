import { ReactNode } from 'react';
import { DzButtonProps, DzMediaProps } from '../../../atoms';
import { BaseCard } from '../types';

interface CardCTA {
  text: string;
  ctaProps?: DzButtonProps;
}

export interface CardArtworkData extends BaseCard {
  media: DzMediaProps;
  artistName: string;
  artworkTitle: string;
  artworkYear: string;
  medium: string;
  dimensions: string;
  portableTextDimensions?: ReactNode;
  portableTextFramedDimensions?: ReactNode;
  portableTextAdditionalInformation?: ReactNode;
  edition: string;
  price?: number;
  framed?: string;
  enableZoom?: boolean;
  primaryCTA?: CardCTA;
  secondaryCTA?: CardCTA;
  slug?: string;
}

export interface CardArtworkProps {
  data: CardArtworkData;
  onClickImage?: (data: CardArtworkData) => void;
  imageStyles?: any;
}
