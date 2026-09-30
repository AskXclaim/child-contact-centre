import ContactCentreError from "../../../../shared/ports/ContactCentreError";
import { ParentDomainErrorCode } from "./ParentDomainErrorCode";

export default class ParentDomainError extends ContactCentreError {
  public readonly code: string;

  constructor(message: string, errorCode: ParentDomainErrorCode) {
    super(message);
    this.code = errorCode;
  }
}
