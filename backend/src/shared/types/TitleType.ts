export const Titles = ['Mr', 'Mrs','Miss', 'Ms'] as const;

export type TitleType = typeof Titles[number];