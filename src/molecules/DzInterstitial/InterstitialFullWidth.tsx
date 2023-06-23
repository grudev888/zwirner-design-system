import React, { FC } from 'react';
import {
  DzMedia,
  DzMediaProps,
  DzText,
  TEXT_SIZES,
  DzTitle,
  TITLE_TYPES,
  TITLE_SIZES,
  DzButton,
  BUTTON_SIZES,
  ButtonModes,
} from '../../atoms';
import { cn } from '../../utils/classnames';
import { TextColors, PrimaryCTAInterstitial } from './DzInterstitial';

export interface InterstitialFullWidthProps {
  title: string;
  description?: string;
  category?: string;
  primaryCta?: PrimaryCTAInterstitial;
  split?: boolean;
  media?: DzMediaProps;
  textColor?: TextColors;
  customClass?: string;
  customDescriptionClass?: string;
  classNameContent?: string;
}

const styles: any = {
  mediaContainer: `
    block
    md:h-[30rem]
    h-[22.5rem]
    overflow-hidden
    relative
  `,
  image: `
    h-full
    w-[auto]
    object-cover
    md:object-contain
    md:h-[auto]
    md:w-full
    top-2/4
    object-center
  `,
  category: `
    md:text-sm
  `,
  title: `
    md:text-xxl
  `,
  contentInfo: `
    flex
    flex-col
    gap-2.5
    basis-1/2
  `,
  btnCTA: `
    md:mt-5
  `,
  nonSplit: `
    relative
    w-auto
  `,
  nonSplitFull: `
    min-h-[22.5rem]
    md:min-h-[27.5rem]
    w-auto
    flex
    justify-center
  `,
  contentInfoNonSplit: `
    w-full
    md:w-[43.125rem]
    p-5
    gap-5
    flex
    flex-col
    absolute
    left-2/4
    top-2/4
    -translate-x-1/2
    -translate-y-1/2
    text-center
    items-center
  `,
  contentInfoNonSplitRelative: `
    w-full
    md:w-[43.125rem]
    p-5
    gap-5
    flex
    flex-col
    text-center
    justify-center
    items-center
  `,
  description: `
    md:text-md
  `,
};

export const InterstitialFullWidth: FC<InterstitialFullWidthProps> = ({
  textColor = 'white-100',
  category,
  title = '',
  description,
  primaryCta,
  media,
  customClass = '',
  customDescriptionClass = '',
  classNameContent = '',
}) => {
  const textClassColor = `text-${textColor}`;
  return (
    <div
      className={cn(
        styles.nonSplit,
        media ? '' : styles.nonSplitFull,
        customClass
      )}
    >
      {media ? (
        <DzMedia
          className={cn(styles.mediaContainer)}
          imgClass={cn(styles.image)}
          {...media}
        />
      ) : null}

      <div
        className={cn(
          media
            ? styles.contentInfoNonSplit
            : styles.contentInfoNonSplitRelative,
          classNameContent
        )}
      >
        {category ? (
          <DzText
            className={cn(styles.category, textClassColor)}
            text={category}
            textSize={TEXT_SIZES.XS}
          />
        ) : null}

        {title ? (
          <DzTitle
            classNameTitle={cn(styles.title, textClassColor)}
            title={title}
            titleType={TITLE_TYPES.P}
            titleSize={TITLE_SIZES.LG}
          />
        ) : null}

        {description ? (
          <DzText
            className={cn(
              styles.description,
              textClassColor,
              customDescriptionClass
            )}
            text={description}
          />
        ) : null}

        {primaryCta ? (
          <DzButton
            className={cn(styles.btnCTA)}
            size={BUTTON_SIZES.LARGE}
            mode={ButtonModes.LIGHT}
            {...(primaryCta?.ctaProps ?? {})}
          >
            {primaryCta.text}
          </DzButton>
        ) : null}
      </div>
    </div>
  );
};

export default InterstitialFullWidth;
