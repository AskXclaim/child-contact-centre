export const ChildPersistenceErrorCode = {
  ChildAlreadyExists: "CHILD_ALREADY_EXISTS",
  InvalidChildValues: "INVALID_CHILD_VALUES",
  UnknownPersistenceError: "UNKNOWN_PERSISTENCE_ERROR",
};

export type ChildPersistenceErrorCode =
  (typeof ChildPersistenceErrorCode)[keyof typeof ChildPersistenceErrorCode];
