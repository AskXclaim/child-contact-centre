import {DomainError} from "../../common/errors";

class InvalidBirthDateError extends DomainError {
    readonly code = "Invalid_Birth_Date";

    constructor(message: string) {
        super(message);
    }
}

export default InvalidBirthDateError;