import "dotenv/config";
import config from "./config";
import {MongooseMongodb, Storage} from "./bootstrap";
import express from "express";

console.log("Child contact centre Node Web API App");


const startServer = async () => {
    const app = express();

    const port = config.PORT || 3000;

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}

async function main(database: Storage): Promise<void> {
    await database.connect();

    await startServer();
}

main(new MongooseMongodb()).catch((error) => {
    console.error("Application failed to start:", error);
    process.exit(1);
});




