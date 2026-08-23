import {DomainError} from "./index";

class InvalidAddressError extends DomainError {
    readonly code = 'INVALID_ADDRESS';
    constructor(message: string) {
        super(message);
    }
}

export default InvalidAddressError;