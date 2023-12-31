import React, { MouseEvent } from 'react';
import { cn } from '../utils/classnames';
import {
  ComponentPropsWithRef,
  forwardRef,
  ReactNode,
  ForwardRefExoticComponent,
} from 'react';
import { styles as btnStyles } from './DzButton';

export const LINK_VARIANTS = {
  NAV: 'nav',
  TEXT: 'text',
  BUTTON: 'button',
};

export const TEXT_LINK_SIZES = {
  XS: 'extraSmall',
  SM: 'small',
  MD: 'medium',
  LG: 'large',
  XL: 'extraLarge',
};

export const TEXT_LINK_SIZES_NAMES = [
  TEXT_LINK_SIZES.XS,
  TEXT_LINK_SIZES.SM,
  TEXT_LINK_SIZES.MD,
  TEXT_LINK_SIZES.LG,
  TEXT_LINK_SIZES.XL,
] as const;

export const LINK_VARIANTS_NAMES = [
  LINK_VARIANTS.NAV,
  LINK_VARIANTS.TEXT,
  LINK_VARIANTS.BUTTON,
] as const;
export type TextLinkSize = typeof TEXT_LINK_SIZES_NAMES[number];
export type LinkVariants = typeof LINK_VARIANTS_NAMES[number];

export type DzLinkProps = {
  href: string;
  children: ReactNode | string;
  variant?: LinkVariants;
  openNewTab?: boolean;
  useRoute?: boolean;
  router?: any;
  className?: string;
  LinkElement: any;
  linkProps?: any;
  textLinkSize?: TextLinkSize;
  withoutStyle?: boolean;
} & ComponentPropsWithRef<'a'>;

export type RouterProps = {
  useRoute?: boolean;
  router?: any;
};

const styles: any = {
  element: `
    transition-text-decoration
    duration-300
    ease-in
    underline-offset-[0.375rem]
    decoration-1
  `,
  nav: `
    decoration-transparent
    hover:underline
    hover:decoration-current
    focus:underline
    focus:decoration-current
    decoration-black-60 
  `,
  button: btnStyles.primary_dark,
  text: `
    underline
    decoration-black-40 
    hover:decoration-black-60
    focus:decoration-black-60
  `,
  inactive: `
    text-black-60
    hover:text-black-100
    focus:text-black-60
  `,
  extraSmall: `
    text-xs
  `,
  small: `
    text-sm
  `,
  medium: `
    text-md
  `,
  large: `
    text-lg
    underline-offset-8
  `,
  extraLarge: `
    text-xl
    underline-offset-[35%]
  `,
};

export function isValidUrl(string) {
  try {
    new URL(string);
    return true;
  } catch (err) {
    return false;
  }
}

export function matchInternalPath(url: string): boolean {
  if (!url) return false;

  const path =
    (url.startsWith('http') || url.startsWith('https')) && isValidUrl(url)
      ? new URL(url).pathname
      : url;

  return [
    /^\/artists$/, // Matches "/artists"
    /^\/artists\/[a-zA-Z0-9_-]+$/, // Matches "/artists/[slug]"
    /^\/artworks\/[a-zA-Z.0-9_-]+$/, // Matches "/artworks/[slug]"
    /^\/news\/\d{4}\/[a-zA-Z.0-9_-]+$/, // Matches "/news/[year]/[slug]"
    /^\/artists\/[a-zA-Z0-9_-]+\/survey$/, // Matches "/artists/[slug]/survey"
    /^\/artists\/[a-zA-Z0-9_-]+\/guide$/, // Matches "/artists/[slug]/survey"
    /^\/artists\/[a-zA-Z0-9_-]+\/press$/, // Matches "/artists/[slug]/press"
    /^\/artists\/[a-zA-Z0-9_-]+\/exhibitions$/, // Matches "/artists/[slug]/exhibitions"
    /^\/artists\/[a-zA-Z0-9_-]+\/available-artworks$/, // Matches "/artists/[slug]/available-works"
    /^\/artists\/thomas-ruff\/survey\/[a-zA-Z.0-9_-]+$/, // Matches/artists/thomas-ruff/survey/[slug]
  ].some(regex => regex.test(path));
}

export const DzLink: ForwardRefExoticComponent<DzLinkProps> = forwardRef(
  (
    {
      children,
      href: hrefFromProps,
      openNewTab = false,
      className = '',
      linkProps,
      variant = LINK_VARIANTS.NAV,
      router,
      useRoute,
      LinkElement = 'a',
      textLinkSize = TEXT_LINK_SIZES.SM,
      withoutStyle = false,
      ...rest
    },
    ref
  ) => {
    const href = hrefFromProps || '/404';
    const isActive = router?.asPath === href;
    const inactiveStyle = !isActive ? styles.inactive : '';
    const isExternalLink = !matchInternalPath(href);
    const parsedHref = href;

    const linkStyle = !withoutStyle
      ? cn(
          styles.element,
          styles[variant],
          styles[textLinkSize],
          useRoute ? inactiveStyle : '',
          className
        )
      : '';

    // Usage for links-in-cards
    if (LinkElement === 'span') {
      return (
        <span ref={ref} className={linkStyle}>
          {children}
        </span>
      );
    }

    // Usage for external links
    if (isExternalLink || LinkElement === 'a') {
      return (
        <a
          ref={ref}
          target={openNewTab ? '_blank' : '_self'}
          rel="noopener noreferrer"
          href={href}
          {...rest}
          className={linkStyle}
        >
          {children}
        </a>
      );
    }

    // Usage for Next.js Link
    return (
      <LinkElement
        href={parsedHref}
        target={openNewTab ? '_blank' : '_self'}
        rel="noopener noreferrer"
        ref={ref}
        className={linkStyle}
        {...rest}
        {...linkProps}
      >
        {children}
      </LinkElement>
    );
  }
);

DzLink.displayName = 'DzLink';

export default DzLink;
