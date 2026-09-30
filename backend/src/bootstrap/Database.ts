import config from "../config";
import { MongoConnection } from "../shared/infrastructure/index";
import { MongoDatabase } from "../shared/infrastructure/index";

const createDatabase = async (): Promise<MongoDatabase> => {
  const mongo = new MongoConnection(config.MONGO_URI);

  await mongo.connect();

  return new MongoDatabase(mongo, config.MONGO_DATABASE);
};

export default createDatabase;
