import React, { FC } from 'react';
import { cn } from '../utils/classnames';
import { DzLink, DzLinkProps } from './DzLink';

interface PageBreadcrumb {
  name: string;
  href: string;
  current: boolean;
  active?: boolean;
}
export interface DzBreadcrumbsProps {
  pages: PageBreadcrumb[];
  linkProps?: DzLinkProps;
}

export const DzBreadcrumbs: FC<DzBreadcrumbsProps> = ({
  pages = [],
  linkProps = {},
}) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-4">
        <li>
          <div>
            <a href="/">
              <span className="sr-only">Home</span>
            </a>
          </div>
        </li>
        {pages.map((page, key) => (
          <li key={page.name}>
            <div className="flex items-center">
              {key !== 0 ? (
                <svg
                  className="h-5 w-5 flex-shrink-0 text-black-60"
                  fill="#757575"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                </svg>
              ) : null}

              <DzLink
                LinkElement="a"
                className={cn(
                  'ml-4 text-xs font-medium hover:text-black-100',
                  page.active ? 'text-black-100' : 'text-black-60'
                )}
                aria-current={page.current ? 'page' : undefined}
                {...linkProps}
                href={page.href}
              >
                {page.name}
              </DzLink>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default DzBreadcrumbs;
