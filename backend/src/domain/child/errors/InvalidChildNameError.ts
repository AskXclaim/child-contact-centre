import {DomainError} from "../../common/errors";

class InvalidChildName extends DomainError {
    readonly code = "INVALID_CHILD_NAME";

    constructor(message: string) {
        super(message);
    }

}

export default InvalidChildName;