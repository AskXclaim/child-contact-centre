import DomainError from "./DomainError";

export default class InvalidIdError extends DomainError {
    readonly code = 'INVALID_ID';

    constructor(message: string) {
        super(message);
    }
}