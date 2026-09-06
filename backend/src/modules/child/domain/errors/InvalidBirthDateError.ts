import DomainError from "../../../../shared/domain/errors/DomainError";

export default class InvalidBirthDateError extends DomainError {
    readonly code;

    constructor(message: string) {
        const errorCode = "Invalid_Birth_Date";
        const errorMessage = message?.trim() || errorCode;
        super(errorMessage);
        this.code = errorCode;
    }
}