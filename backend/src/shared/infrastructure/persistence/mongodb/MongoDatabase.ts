import {Db} from "mongodb";
import MongoConnection from "./MongoConnection";

export default class MongoDatabase {
    private readonly database: Db;

    constructor(private readonly connection: MongoConnection, databaseName: string) {
        this.database = connection.getClient().db(databaseName);
    }

    get db(): Db {
        return this.database;
    }
}