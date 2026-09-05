import {DomainError} from "../../../domain/common/errors";

class InvalidNameError extends DomainError {
    readonly code = 'INVALID_NAME';

    constructor(message: string) {
        super(message);
    }
}

export default InvalidNameError;