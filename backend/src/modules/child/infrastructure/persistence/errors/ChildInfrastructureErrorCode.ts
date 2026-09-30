export const ChildInfrastructureErrorCode = {
  ChildAlreadyExists: "CHILD_ALREADY_EXISTS",
};

export type ChildInfrastructureErrorCode =
  (typeof ChildInfrastructureErrorCode)[keyof typeof ChildInfrastructureErrorCode];
