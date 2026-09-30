import ContactCentreError from "../../ports/ContactCentreError";
import { DomainErrorCode } from "./DomainErrorCode";

export default class DomainError extends ContactCentreError {
  public readonly code;

  constructor(message: string, errorCode: DomainErrorCode) {
    const errorMessage = message?.trim() || errorCode;
    super(errorMessage);
    this.code = errorCode;
  }
}
