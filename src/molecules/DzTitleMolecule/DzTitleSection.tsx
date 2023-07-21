import React, { FC } from 'react';
import {
  DzTitle,
  TITLE_SIZES,
  DzLink,
  TITLE_TYPES,
  LINK_VARIANTS,
} from '../../atoms';
import { cn } from '../../utils/classnames';
import { sliceMaxCharLength } from '../../utils/validators';
import { DzTitleSectionProps } from './DzTitleMolecule';

const styles: any = {
  titleContainer: `
    flex
    gap-5
    flex-row
    justify-between
  `,
  title: `
    text-md
    md:text-xl
  `,
  linkCta: `
    min-w-fit
  `,
  linkText: `
    text-xs
    md:text-sm
  `,
};

const DEFAULT_TITLE_PROPS = {
  titleType: TITLE_TYPES.P,
  titleSize: TITLE_SIZES.LG,
  subtitleSize: TITLE_SIZES.LG,
  subtitleType: TITLE_TYPES.P,
};

const CHARACTER_LIMIT_TITLE = 50;

export const DzTitleSection: FC<DzTitleSectionProps> = ({
  title,
  subtitle,
  titleProps = DEFAULT_TITLE_PROPS,
  linkCTA,
  customClass = '',
}) => {
  return (
    <div className={cn(styles.titleContainer, customClass)}>
      <DzTitle
        classNameTitle={cn(styles.title)}
        classNameSubtitle={cn(styles.title)}
        {...titleProps}
        subtitle={sliceMaxCharLength(subtitle, CHARACTER_LIMIT_TITLE)}
        title={sliceMaxCharLength(title, CHARACTER_LIMIT_TITLE)}
      />
      {linkCTA ? (
        <div className={cn(styles.linkCta)}>
          <DzLink
            {...(linkCTA.linkProps ?? {})}
            variant={LINK_VARIANTS.TEXT}
            className={cn(styles.linkText)}
            href={linkCTA.url}
            LinkElement={linkCTA.linkElement}
          >
            {linkCTA.text}
          </DzLink>
        </div>
      ) : null}
    </div>
  );
};

export default DzTitleSection;
