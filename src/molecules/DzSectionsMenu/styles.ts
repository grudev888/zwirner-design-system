export const styles: any = {
  sectionsContainer: `
    flex
    justify-between
    md:justify-end
    items-center
    bg-white-100
    z-50
    h-10
    md:h-[3.75rem]
  `,
  mblSelector: `
    basis-2/5
    text-sm
  `,
  mblOptionBox: `
    !border-0
    !text-black-100
    !w-fit
    !pr-[1.875rem]
    !pl-5
    capitalize
  `,
  inquireBtn: `
    underline
    !text-sm
    !px-5
    transition-text-decoration
    duration-300
    ease-in
    underline-offset-[0.375rem]
    decoration-1
    hover:underline
    focus:underline
    decoration-black-40
    hover:decoration-black-60
    focus:decoration-black-60
  `,
  listDesktop: `
    flex
  `,
  mblStickyUp: `
    motion-safe:animate-slowTop
    transition
    md:transition-none
    md:animate-none
    md:visible
  `,
  sticky: `
    top-0
    sticky
    md:ml-[10.3125rem]
    -mx-5
  `,
  listItem: `
    text-sm
    p-5
    capitalize
    cursor-pointer
    transition-text-decoration
    duration-300
    ease-in
    underline-offset-[0.375rem]
    decoration-1
    decoration-transparent
    hover:underline
    hover:decoration-current
    focus:underline
    focus:decoration-current
    decoration-black-60
  `,
  mblList: `
    !left-2.5
    !mt-0
    min-w-fit
    capitalize
  `,
  mblElem: `
    text-sm
  `,
  grayLink: `
    text-black-60
    hover:text-black-100
  `,
  none: `h-80`,
};
