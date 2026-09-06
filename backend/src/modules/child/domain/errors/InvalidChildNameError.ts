import DomainError from "../../../../shared/domain/errors/DomainError";

export default class InvalidChildNameError extends DomainError {
    readonly code ;

    constructor(message: string) {
        const errorCode = "INVALID_CHILD_NAME";
        const errorMessage = message?.trim() || errorCode;
        super(errorMessage);
        this.code = errorCode;
    }

}