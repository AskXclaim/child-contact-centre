export const ParentRole = ["parent", "guardian", "parent_figure"] as const;

export type ParentRole = (typeof ParentRole)[number];
