import {DomainError} from "./index";

class InvalidIdError extends DomainError {
    readonly code = 'INVALID_ID';

    constructor(message: string) {
        super(message);
    }
}

export default InvalidIdError;