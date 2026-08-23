import {DomainError} from "./index";

class InvalidNameError extends DomainError {
    readonly code = 'INVALID_NAME';

    constructor(message: string) {
        super(message);
    }
}

export default InvalidNameError;