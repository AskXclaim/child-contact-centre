import ContactCentreError from "../../shared/ports/ContactCentreError";
import { StorageConnectionErrorCode } from "./StorageConnectionErrorCode";

export default class StorageConnectionError extends ContactCentreError {
  readonly code: string;

  constructor(
    message: string,
    errorCode: StorageConnectionErrorCode = StorageConnectionErrorCode.STORAGE_ERROR,
  ) {
    message = message || errorCode;
    super(message);
    this.code = errorCode;
    this.name = this.constructor.name;
  }
}
