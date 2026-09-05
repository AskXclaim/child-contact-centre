import {InfrastructureError} from "../index";

export default class ChildExistsError extends InfrastructureError {
    readonly code = "CHILD_ALREADY_EXISTS";

    constructor(message: string) {
        super(message?.trim());
    }
}

