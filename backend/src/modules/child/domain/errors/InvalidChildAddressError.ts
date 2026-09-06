import DomainError from "../../../../shared/domain/errors/DomainError";

export default class InvalidChildAddressError extends DomainError {
    readonly code;

    constructor(message: string) {
        const errorCode = "INVALID_CHILD_ADDRESS";
        const errorMessage = message?.trim() || errorCode;
        super(errorMessage);
        this.code = errorCode;
    }
}
