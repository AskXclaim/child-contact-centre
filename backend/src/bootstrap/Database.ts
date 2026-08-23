import config from "../config";
import {MongoConnection} from "../infrastructure/persistence/mongodb";
import {MongoDatabase} from "../infrastructure/persistence/mongodb";

const createDatabase = async (): Promise<MongoDatabase> => {
    const mongo = new MongoConnection(config.MONGO_URI);

    await mongo.connect();

    return new MongoDatabase(mongo, config.MONGO_DATABASE);
}

export default createDatabase;
