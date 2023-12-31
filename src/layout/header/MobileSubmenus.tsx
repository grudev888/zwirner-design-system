import React from 'react';
import { cn } from '../../utils/classnames';
import ArrowDown from '../../svgIcons/arrowDown';
import { DzLink, DzLinkProps, RouterProps, TEXT_LINK_SIZES } from '../../atoms';
import { Disclosure } from '@headlessui/react';
import { renderItems } from './MenuItems';

type MobileSubmenuProps = {
  title: string;
  items: any[];
  rootUrl?: string;
  linkProps?: Omit<DzLinkProps, 'LinkElement'> | RouterProps;
  LinkElement: any;
};

const styles: any = {
  panelItems: `
    pl-[0.9375rem]
  `,
  caretIcon: `
    px-4
    py-4
    flex
    w-[2.5rem]
    justify-center
    outline-none
    md:outline-transparent
  `,
  upArrow: `
    rotate-180
  `,
  rootLink: `
    w-full
    flex
    items-center
    content-center
  `,
  mobileOption: `
    pl-5
    pr-1
    py-[1.125rem]
    flex
    justify-between
  `,
};

export const MobileSubmenus = ({
  title = '',
  rootUrl = '',
  items = [],
  linkProps = {},
  LinkElement,
}: MobileSubmenuProps) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <div className={cn(styles.mobileOption)}>
            <DzLink
              {...linkProps}
              className={cn(styles.rootLink)}
              textLinkSize={TEXT_LINK_SIZES.MD}
              href={rootUrl}
              LinkElement={LinkElement}
            >
              {title}
            </DzLink>
            <Disclosure.Button className={cn(styles.caretIcon)}>
              <ArrowDown
                className={cn(open ? styles.upArrow : '')}
                id={`${open ? 'close' : 'open'}-submenu-${title}`}
              />
            </Disclosure.Button>
          </div>
          <Disclosure.Panel className={cn(styles.panelItems)}>
            <ul>{renderItems({ items, isMobile: true, LinkElement })}</ul>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
