import ContactCentreError from "../../../../../shared/ports/ContactCentreError";
import { ChildInfrastructureErrorCode } from "./ChildInfrastructureErrorCode";

export default class ChildInfrastructureError extends ContactCentreError {
  readonly code;

  constructor(message: string, errorCode: ChildInfrastructureErrorCode) {
    const errorMessage = message?.trim() || errorCode;
    super(errorMessage);
    this.code = errorCode;
  }
}
