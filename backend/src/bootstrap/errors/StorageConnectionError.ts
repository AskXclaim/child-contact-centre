import {InfrastructureError} from "../../shared/infrastructure";

export default class StorageConnectionError extends InfrastructureError {
    readonly code: string;

    constructor(message: string, errorCode: string = "STORAGE_ERROR") {
        message = message || errorCode || "STORAGE_ERROR";
        super(message);
        this.code = errorCode;
        this.name = this.constructor.name;
    }
}