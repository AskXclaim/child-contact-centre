export const ChildDomainErrorCode = {
  InvalidChildId: "INVALID_CHILD_ID",
  InvalidChildFirstName: "INVALID_CHILD_FIRST_NAME",
  InvalidChildLastName: "INVALID_CHILD_LAST_NAME",
  InvalidChildGender: "INVALID_CHILD_GENDER",
  InvalidChildGenderAtBirth: "INVALID_CHILD_GENDER_AT_BIRTH",
  InvalidChildDateOfBirth: "INVALID_CHILD_DATE_OF_BIRTH",
  InvalidChildAddress: "INVALID_CHILD_ADDRESS",
  InvalidChildParents: "INVALID_CHILD_PARENTS",
  ChildParentsNotProvided: "PARENTS_NOT_PROVIDED",
};

export type ChildDomainErrorCode = (typeof ChildDomainErrorCode)[keyof typeof ChildDomainErrorCode];
