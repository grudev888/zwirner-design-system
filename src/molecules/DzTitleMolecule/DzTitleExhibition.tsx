import React, { FC } from 'react';
import { cn } from '../../utils/classnames';
import { DzText, DzLink, LINK_VARIANTS } from '../../atoms';
import { DzColumn, DzGridColumns } from '../../layout';
import { useIsSmallWindowSize } from '../../hooks/useIsSmallWindowSize';
import { LocationData } from './types/DzTitleExhibitionTypes';
import { ArtistData } from './types/DzTitleExhibitionTypes';
import { collectHours } from './utils/collectHours';
import DzContainerTitle from './DzContainerTitle';

export interface DzTitleExhibitionProps {
  artists: Array<ArtistData>;
  checklistPDFURL?: string;
  displayDate?: string;
  exhibitionState: EXHIBITION_STATES;
  exhibitionDateRangeText: string;
  location?: LocationData;
  reception?: string;
  showCoordinates?: boolean;
  pressReleasePDFURL?: string;
  title: string;
  subtitle?: string;
  subpageTitle?: string;
}

const styles: any = {
  infoColumnContainer: `
    flex
    gap-[1.25rem]
    md:block
  `,
  infoColumnTitle: `
    w-1/3
    md:w-full
    md:text-md
    text-black-60
    mb-[0.625rem]
  `,
  infoColumnBody: `
    w-2/3
    md:w-full
    md:text-md
    text-black-100
  `,
  addressCity: `    
    md:text-md
  `,
  mdText: `
    md:text-md
  `,
  black60Text: `
    text-black-60
  `,
  locationHours: `
    mt-[0.5rem]
  `,
  container: `
    mb-[3.75rem]
    md:mt-[3.75rem]
  `,
  openingReceptionTitle: `
    md:mt-[1.25rem]
    md:mb-[0.625rem]
  `,
  smallText: `
    text-sm
  `,
  pageTitleContainer: `
    mb-[2.5rem]
    md:mb-0
  `,
  addressLine: `
    inline-block    
  `,
};

export enum EXHIBITION_STATES {
  PRELAUNCH = 'PRELAUNCH',
  OPEN = 'OPEN',
  POSTLAUNCH = 'POSTLAUNCH',
}

const EXHIBITION_STATES_TO_LABELS = {
  PRELAUNCH: 'Coming Soon',
  OPEN: 'Now Open',
  POSTLAUNCH: 'Past',
};

// TODO add a variant for this in DzTitleMolecule and pass through props from consumer
export const DzTitleExhibition: FC<DzTitleExhibitionProps> = ({
  artists,
  checklistPDFURL,
  displayDate,
  exhibitionState,
  exhibitionDateRangeText,
  location,
  reception,
  pressReleasePDFURL,
  showCoordinates = false,
  title,
  subtitle,
  subpageTitle,
}) => {
  const locationHours = location ? collectHours(location) : '';
  const isSmall = useIsSmallWindowSize();
  const titleText = `${title}${subtitle ? `: ${subtitle}` : ''}${
    subpageTitle ? ` — ${subpageTitle}` : ''
  }`;

  return (
    <>
      <DzContainerTitle
        category="Exhibition"
        primaryCTA={{
          title: 'Inquire',
          description: 'Interested in this exhibition?',
        }}
        title={titleText}
        customCTAContainerProps={{
          span: 12,
          start: 1,
        }}
        fullLeftContainer
        disableMaxTitleLength
      />
      {showCoordinates && (
        <DzGridColumns className={styles.container}>
          <DzColumn span={[12, 3]}>
            <div className={styles.infoColumnContainer}>
              <DzText
                className={styles.infoColumnTitle}
                text={
                  exhibitionState
                    ? EXHIBITION_STATES_TO_LABELS[exhibitionState]
                    : ''
                }
              />
              <DzText
                className={styles.infoColumnBody}
                text={displayDate || exhibitionDateRangeText}
              />
              {!isSmall && reception && (
                <>
                  <DzText
                    text="Opening Reception"
                    className={cn(
                      styles.mdText,
                      styles.black60Text,
                      styles.openingReceptionTitle
                    )}
                  />
                  <DzText text={reception} className={cn(styles.mdText)} />
                </>
              )}
            </div>
          </DzColumn>
          {isSmall && reception && (
            <DzColumn span={12}>
              <div className={styles.infoColumnContainer}>
                <DzText
                  text="Opening Reception"
                  className={styles.infoColumnTitle}
                />
                <DzText text={reception} className={styles.infoColumnBody} />
              </div>
            </DzColumn>
          )}
          <DzColumn span={[12, 3]}>
            {location?.address && (
              <div className={styles.infoColumnContainer}>
                <DzText className={styles.infoColumnTitle} text={'Location'} />
                <div className={styles.infoColumnBody}>
                  <DzText
                    text={location.address.city}
                    className={styles.addressCity}
                  />
                  <DzLink href={location.url} target="_blank">
                    <DzText
                      text={location.address.addressLine}
                      className={cn(
                        styles.mdText,
                        styles.black60Text,
                        styles.addressLine
                      )}
                      style={{ textDecoration: 'inherit' }}
                    />
                    {location.address.addressLine2 && (
                      <DzText
                        text={location.address.addressLine2}
                        className={cn(
                          styles.mdText,
                          styles.black60Text,
                          styles.addressLine
                        )}
                        style={{ textDecoration: 'inherit' }}
                      />
                    )}
                    <DzText
                      text={`${location.address.country}, ${location.address.zipCode}`}
                      className={cn(
                        styles.mdText,
                        styles.black60Text,
                        styles.addressLine
                      )}
                      style={{ textDecoration: 'inherit' }}
                    />
                  </DzLink>
                  <DzText
                    className={cn(
                      styles.mdText,
                      styles.black60Text,
                      styles.locationHours
                    )}
                    text={locationHours}
                  />
                </div>
              </div>
            )}
          </DzColumn>
          <DzColumn span={[12, 3]}>
            <div className={styles.infoColumnContainer}>
              {/* TODO secondary gallery location here */}
            </div>
          </DzColumn>
          <DzColumn span={[12, 3]}>
            <div className={styles.infoColumnContainer}>
              <DzText className={styles.infoColumnTitle} text="Artists" />
              <div className={styles.infoColumnBody}>
                {artists?.map(({ fullName, artistPage }) =>
                  artistPage?.slug?.current ? (
                    <DzLink
                      title={fullName}
                      href={artistPage.slug.current}
                      variant={LINK_VARIANTS.TEXT}
                      className={styles.mdText}
                      key={fullName}
                    >
                      {fullName}
                    </DzLink>
                  ) : (
                    <DzText
                      text={fullName}
                      className={styles.mdText}
                      key={fullName}
                    />
                  )
                )}
              </div>
            </div>
          </DzColumn>
          {pressReleasePDFURL && (
            <DzColumn span={isSmall ? 12 : 3}>
              <div className={styles.infoColumnContainer}>
                <div className={styles.infoColumnTitle} />
                <div className={styles.infoColumnBody}>
                  <DzLink
                    className={styles.smallText}
                    href={pressReleasePDFURL}
                    variant={LINK_VARIANTS.TEXT}
                  >
                    View Press Release
                  </DzLink>
                </div>
              </div>
            </DzColumn>
          )}
          {checklistPDFURL && (
            <DzColumn span={isSmall ? 12 : 3}>
              <div className={styles.infoColumnContainer}>
                <div className={styles.infoColumnTitle} />
                <div className={styles.infoColumnBody}>
                  <DzLink
                    className={styles.smallText}
                    href={checklistPDFURL}
                    variant={LINK_VARIANTS.TEXT}
                  >
                    Download Checklist
                  </DzLink>
                </div>
              </div>
            </DzColumn>
          )}
        </DzGridColumns>
      )}
    </>
  );
};

export default DzTitleExhibition;