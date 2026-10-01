export const ParentRelationship = [
  "mother",
  "father",
  "step_mother",
  "step_father",
  "grandparent",
  "guardian",
  "foster_carer",
  "other",
] as const;

export type ParentRelationship = (typeof ParentRelationship)[number];
