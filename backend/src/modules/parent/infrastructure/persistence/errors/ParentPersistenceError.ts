import ContactCentreError from "../../../../../shared/ports";
import { ParentPersistenceErrorCode } from "./ParentPersistenceErrorCode";

export default class ParentPersistenceError extends ContactCentreError {
  readonly code: string;

  constructor(message: string, errorCode: ParentPersistenceErrorCode) {
    const errorMessage = message?.trim() || errorCode;
    super(errorMessage);
    this.code = errorCode;
  }
}
