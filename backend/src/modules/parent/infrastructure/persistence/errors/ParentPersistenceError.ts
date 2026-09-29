import InfrastructureError from "../../../../../shared/infrastructure/errors/InfrastructureError"

export default class ParentPersistenceError extends InfrastructureError {
    readonly code: string;

    constructor(message: string, errorCode: string) {
        const errCode =errorCode?? "PARENT_PERSISTENCE_ERROR";
        const errorMessage = message?.trim() || errCode;
        super(errorMessage);
        this.code = errCode;
    }
}