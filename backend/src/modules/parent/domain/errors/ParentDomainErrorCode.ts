import { DomainErrorCode } from "../../../../shared/domain";

export const ParentDomainErrorCode = {
  ...DomainErrorCode,
};

export type ParentDomainErrorCode =
  (typeof ParentDomainErrorCode)[keyof typeof ParentDomainErrorCode];
