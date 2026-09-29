import config from "./../config";
import Storage from "./ports/Storage";
import StorageConnectionError from "./errors/StorageConnectionError";
import * as mongoose from "mongoose";

export default class MongooseMongodb implements Storage {
    async connect(): Promise<void> {
        const connectionString = `${config.MONGO_URI}/${config.MONGO_DATABASE}`;
        if (!connectionString) {
            throw new StorageConnectionError("Invalid connection string");
        }

        await mongoose.connect(connectionString);
    }
}