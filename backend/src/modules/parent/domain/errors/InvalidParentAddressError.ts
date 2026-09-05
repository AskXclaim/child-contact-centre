import {DomainError} from "../../common/errors";

class InvalidParentAddressError extends DomainError {
    readonly code = 'INVALID_PARENT_ADDRESS'

    constructor(message: string) {
        super(message);
    }
}

export default InvalidParentAddressError;