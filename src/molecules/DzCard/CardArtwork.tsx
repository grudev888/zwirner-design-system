import React, { FC } from 'react';
import {
  DzMedia,
  DzMediaProps,
  DzText,
  TEXT_TYPES,
  DzTitle,
  TITLE_TYPES,
  DzButton,
  DzButtonProps,
  MEDIA_OBJECT_FIT,
} from '../../atoms';
import { cn } from '../../utils/classnames';
import { priceFormatter } from '../../utils/formatters';

interface CardCTA {
  text: string;
  ctaProps?: DzButtonProps;
}

export interface CardArtworkData {
  id?: string;
  media: DzMediaProps;
  artistName: string;
  artworkTitle: string;
  artworkYear: string;
  medium: string;
  dimensions: string;
  edition: string;
  price?: number;
  framed?: string;
  enableZoom?: boolean;
  primaryCTA?: CardCTA;
  secondaryCTA?: CardCTA;
}

export interface CardArtworkProps {
  data: CardArtworkData;
}

const styles: any = {
  artwork: {
    infoContainer: `
      flex-col
      flex
      justify-between
      gap-5
      md:@4col/cardContainer:flex-row
      md:@4col/cardContainer:-mt-2.5
      md:@6col/cardContainer:mt-0
    `,
    leftPanel: `
      flex
      flex-col
      basis-1/2
      @6colMbl/cardContainer:gap-2.5
      md:@2col/cardContainer:gap-2.5
      md:@3col/cardContainer:gap-2.5
      md:@4col/cardContainer:gap-2.5
    `,
    artistName: `
      @6colMbl/cardContainer:text-sm
      @12colMbl/cardContainer:text-md
      md:@4col/cardContainer:text-md
      md:@10col/cardContainer:text-lg
    `,
    rightPanel: `
      mt-5
      flex
      flex-col
      gap-5
      md:@4col/cardContainer:m-0
      md:@4col/cardContainer:min-w-[13.5625rem]
    `,
    artWorkTitle: `
      @6colMbl/cardContainer:text-sm
      @12colMbl/cardContainer:text-md
      md:@4col/cardContainer:text-md
      md:@10col/cardContainer:text-lg
      italic
    `,
    artworkYear: `
      @6colMbl/cardContainer:text-sm
      @12colMbl/cardContainer:text-md
      md:@4col/cardContainer:text-md
      md:@10col/cardContainer:text-lg
      uppercase
    `,
    tombstoneText: `
      text-black-60
    `,
    priceContainer: `
      
    `,
    priceTitle: `
      @6colMbl/cardContainer:text-md
      md:@2col/cardContainer:text-sm
      md:@4col/cardContainer:text-md
    `,
  },
  mediaImg: `
    !bg-black-30
    @6colMbl/cardContainer:min-h-[12.5rem]
    @12colMbl/cardContainer:min-h-[22.5rem]
    md:@2col/cardContainer:min-h-[15rem]
    md:@3col/cardContainer:min-h-[18.75rem]
    md:@4col/cardContainer:min-h-[22.5rem]
    md:@6col/cardContainer:min-h-[33.75rem]
    md:@10col/cardContainer:min-h-[45rem]
    md:@12col/cardContainer:min-h-[51.25rem]
  `,
  mediaZoom: `
    md:hover:@2col/cardContainer:scale-[1.03]
    md:hover:@12col/cardContainer:scale-100
    ease-in duration-300
  `,
  cardContainer: `
    @container/cardContainer
    w-full
    flex
    flex-col
    gap-5
  `,
  buttons: `
    @12colMbl/cardContainer:py-[0.8125rem]
    @12colMbl/cardContainer:px-[1.5625rem]
    md:@2col/cardContainer:py-[0.3125rem]
    md:@2col/cardContainer:px-[1.5625rem]
    md:@3col/cardContainer:py-[0.8125rem]
    md:@3col/cardContainer:px-[1.5625rem]
  `,
};

export const CardArtwork: FC<CardArtworkProps> = ({ data }) => {
  const {
    id,
    media,
    artistName,
    artworkTitle,
    artworkYear,
    medium,
    dimensions,
    edition,
    price,
    framed,
    primaryCTA,
    secondaryCTA,
    enableZoom = true,
  } = data as CardArtworkData;
  return (
    <div id={id} className={cn(styles.cardContainer)}>
      <DzMedia
        imgClass={cn(styles.mediaImg, enableZoom ? styles.mediaZoom : '')}
        objectFit={MEDIA_OBJECT_FIT.CONTAIN}
        className="overflow-hidden"
        {...media}
      />
      <div className={cn(styles.artwork.infoContainer)}>
        <div className={cn(styles.artwork.leftPanel)}>
          <div>
            <DzTitle
              classNameTitle={cn(styles.artwork.artistName)}
              titleType={TITLE_TYPES.P}
              title={artistName}
            />
            <DzTitle
              titleType={TITLE_TYPES.P}
              title={
                <>
                  <span className={cn(styles.artwork.artWorkTitle)}>
                    {artworkTitle}
                  </span>
                  ,{' '}
                  <span className={cn(styles.artwork.artworkYear)}>
                    {artworkYear}
                  </span>
                </>
              }
            />
          </div>

          <div>
            {medium ? (
              <DzText
                className={cn(styles.artwork.tombstoneText)}
                text={medium}
                textType={TEXT_TYPES.P}
              />
            ) : null}
            {dimensions ? (
              <DzText
                className={cn(styles.artwork.tombstoneText)}
                text={dimensions}
                textType={TEXT_TYPES.P}
              />
            ) : null}
            {edition ? (
              <DzText
                className={cn(styles.artwork.tombstoneText)}
                text={edition}
                textType={TEXT_TYPES.P}
              />
            ) : null}
          </div>
          {price ? (
            <div className={cn(styles.artwork.priceContainer)}>
              <DzTitle
                titleType={TITLE_TYPES.P}
                title={`USD${priceFormatter({ price })}`}
                classNameTitle={cn(styles.artwork.priceTitle)}
              />
              {framed ? (
                <DzText
                  className={cn(styles.artwork.tombstoneText)}
                  text={framed}
                  textType={TEXT_TYPES.P}
                />
              ) : null}
            </div>
          ) : null}
        </div>
        {primaryCTA || secondaryCTA ? (
          <div className={cn(styles.artwork.rightPanel)}>
            {primaryCTA ? (
              <DzButton
                {...(primaryCTA.ctaProps ?? {})}
                className={cn(styles.buttons)}
              >
                {primaryCTA.text}
              </DzButton>
            ) : null}
            {secondaryCTA ? (
              <DzButton
                {...(secondaryCTA.ctaProps ?? {})}
                className={cn(styles.buttons)}
              >
                {secondaryCTA.text}
              </DzButton>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CardArtwork;
