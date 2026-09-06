import InfrastructureError from "../../../../../shared/infrastructure/errors/InfrastructureError";

export default class ChildExistsError extends InfrastructureError {
    readonly code;

    constructor(message: string) {
        const errorCode = "CHILD_ALREADY_EXISTS";
        const errorMessage = message?.trim() || errorCode;
        super(errorMessage);
        this.code = errorCode;
    }
}

