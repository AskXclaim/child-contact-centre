import {InfrastructureError} from "../../../../../infrastructure/persistence/errors";

export default class ChildExistsError extends InfrastructureError {
    readonly code = "CHILD_ALREADY_EXISTS";

    constructor(message: string) {
        super(message?.trim());
    }
}

