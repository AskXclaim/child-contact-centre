import { ChildDomainErrorCode } from "./ChildDomainErrorCode";
import ContactCentreError from "../../../../shared/ports/ContactCentreError";

export default class ChildDomainError extends ContactCentreError {
  readonly code: string;

  constructor(message: string, errorCode: ChildDomainErrorCode) {
    super(message);
    this.code = errorCode;
  }
}
