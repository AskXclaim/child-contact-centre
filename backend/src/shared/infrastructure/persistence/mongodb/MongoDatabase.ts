import {Db} from "mongodb";
import {MongoConnection} from "../../../../infrastructure/persistence/mongodb";

export default class MongoDatabase {
    private readonly database: Db;

    constructor(private readonly connection: MongoConnection, databaseName: string) {
        this.database = connection.getClient().db(databaseName);
    }

    get db(): Db {
        return this.database;
    }
}