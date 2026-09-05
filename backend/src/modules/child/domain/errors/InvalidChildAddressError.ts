import {DomainError} from "../../common/errors";

class InvalidChildAddressError extends DomainError {
    readonly code = "INVALID_CHILD_ADDRESS";

    constructor(message: string) {
        super(message);
    }
}

export default InvalidChildAddressError;