export const ParentPersistenceErrorCode = {
  ParentNotFound: "PARENT_NOT_FOUND",
  InvalidParentValues: "INVALID_PARENT_VALUES",
  UnknownPersistenceError: "UNKNOWN_PERSISTENCE_ERROR",
};

export type ParentPersistenceErrorCode =
  (typeof ParentPersistenceErrorCode)[keyof typeof ParentPersistenceErrorCode];
