export const ParentPersistenceErrorCode = {
  PARENT_NOT_FOUND: "PARENT_NOT_FOUND",
  InvalidParentValue: "INVALID_PARENT_VALUE",
  UnknownPersistenceError: "UNKNOWN_PERSISTENCE_ERROR",
};

export type ParentPersistenceErrorCode =
  (typeof ParentPersistenceErrorCode)[keyof typeof ParentPersistenceErrorCode];
