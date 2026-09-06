import DomainError from "./DomainError";

export default class InvalidAddressError extends DomainError {
    readonly code = 'INVALID_ADDRESS';
    constructor(message: string) {
        super(message);
    }
}