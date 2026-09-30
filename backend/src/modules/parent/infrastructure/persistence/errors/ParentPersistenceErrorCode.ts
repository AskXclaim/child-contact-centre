export const ParentPersistenceErrorCode = {
  PARENT_NOT_FOUND: "PARENT_NOT_FOUND",
};

export type ParentPersistenceErrorCode =
  (typeof ParentPersistenceErrorCode)[keyof typeof ParentPersistenceErrorCode];
