import ContactCentreError from "../../../../../shared/ports/ContactCentreError";
import { ChildPersistenceErrorCode } from "./ChildPersistenceErrorCode";

export default class ChildPersistenceError extends ContactCentreError {
  readonly code;

  constructor(message: string, errorCode: ChildPersistenceErrorCode) {
    const errorMessage = message?.trim() || errorCode;
    super(errorMessage);
    this.code = errorCode;
  }
}
