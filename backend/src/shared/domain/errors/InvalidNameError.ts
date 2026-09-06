import DomainError from "./DomainError";

export default class InvalidNameError extends DomainError {
    readonly code = 'INVALID_NAME';

    constructor(message: string) {
        super(message);
    }
}