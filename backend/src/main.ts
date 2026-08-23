import "dotenv/config";
import createDatabase from "./bootstrap/Database";
import express from "express";

console.log("Child contact centre Node Web API App");


const startServer = async () => {
    const app = express();

    const port = process.env.PORT || 3000;

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}

async function main(): Promise<void> {
    const database = await createDatabase();

    await startServer();
}

main().catch((error) => {
    console.error("Application failed to start:", error);
    process.exit(1);
});




