import DomainError from "../../../../shared/domain/errors/DomainError";

export default class InvalidParentAddressError extends DomainError {
    readonly code;

    constructor(message: string) {
        const errorCode = "INVALID_PARENT_ADDRESS";
        const errorMessage = message?.trim() || errorCode;
        super(errorMessage);
        this.code = errorCode;
    }
}
