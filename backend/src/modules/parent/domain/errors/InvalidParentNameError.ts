import {DomainError} from "../../common/errors";

class InvalidParentNameError extends DomainError {
    readonly code = "INVALID_PARENT_NAME"

    constructor(message: string) {
        super(message);
    }
}

export default InvalidParentNameError;