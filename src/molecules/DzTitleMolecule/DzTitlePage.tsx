import React, { FC } from 'react';
import {
  DzText,
  DzTitle,
  TITLE_SIZES,
  DzButton,
  TITLE_TYPES,
  BUTTON_SIZES,
  LINK_VARIANTS,
  DzLink,
} from '../../atoms';
import { cn } from '../../utils/classnames';
import { DzColumn, DzGridColumns } from '../../layout';
import { sliceMaxCharLength } from '../../utils/validators';
import { DzTitlePageProps } from './DzTitleMolecule';

const styles: any = {
  titleContainer: `
    block
    w-full
    flex
    flex-col
    gap-5
    md:flex-row
  `,
  leftContainer: `
    w-full
    flex
    flex-col
    gap-2.5
    basis-1/2
  `,
  rightContainer: `
    flex
    flex-col
    basis-1/2
    gap-5
    md:gap-0
  `,
  titleClassContainer: `
    w-full
  `,
  title: `
    text-xl
    md:text-xxl
  `,
  description: `
    md:text-md
  `,
  linkCTA: `
    text-xs
    md:text-sm
    md:mt-5
  `,
  primaryCTASupertitle: `
    text-sm
    text-black-60
  `,
};

const CHARACTER_LIMIT_TITLE = 50;
const CHARACTER_LIMIT_BODY = 500;

const DEFAULT_TITLE_PROPS = {
  titleType: TITLE_TYPES.P,
  titleSize: TITLE_SIZES.LG,
  subtitleSize: TITLE_SIZES.LG,
  subtitleType: TITLE_TYPES.P,
};

export const DzTitlePage: FC<DzTitlePageProps> = ({
  category,
  title,
  subtitle,
  description,
  titleProps = DEFAULT_TITLE_PROPS,
  primaryCTA,
  customClass = '',
  linkCTA,
}) => {
  return (
    <div className={cn(styles.titleContainer, customClass)}>
      <div className={cn(styles.leftContainer)}>
        {category ? <DzText text={category} /> : null}
        <DzTitle
          className={cn(styles.titleClassContainer)}
          classNameTitle={cn(styles.title)}
          classNameSubtitle={cn(styles.title)}
          {...titleProps}
          subtitle={sliceMaxCharLength(subtitle, CHARACTER_LIMIT_TITLE)}
          title={sliceMaxCharLength(title, CHARACTER_LIMIT_TITLE)}
        />
      </div>
      {description ? (
        <div className={cn(styles.rightContainer)}>
          <DzText
            className={cn(styles.description)}
            text={
              typeof description === 'string'
                ? sliceMaxCharLength(description, CHARACTER_LIMIT_BODY)
                : description
            }
          />
          {primaryCTA ? (
            <DzGridColumns>
              <DzColumn span={4} start={9}>
                {primaryCTA.description ? (
                  <DzText
                    className="mb-[0.3125rem] text-black-60"
                    text={primaryCTA.description}
                  />
                ) : null}
                <div>
                  {primaryCTA.supertitle ? (
                    <div className={styles.primaryCTASupertitle}>
                      {primaryCTA.supertitle}
                    </div>
                  ) : null}
                  <DzButton
                    className="w-full"
                    {...primaryCTA.ctaProps}
                    size={BUTTON_SIZES.LARGE}
                  >
                    {primaryCTA.title}
                  </DzButton>
                </div>
              </DzColumn>
            </DzGridColumns>
          ) : null}
          {linkCTA ? (
            <DzLink
              className={styles.linkCTA}
              variant={LINK_VARIANTS.TEXT}
              {...linkCTA}
            >
              Learn More
            </DzLink>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

export default DzTitlePage;
