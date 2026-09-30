import "dotenv/config";
import config from "./config";
import { MongooseMongodb, Storage } from "./bootstrap";
import express from "express";
import { RegisterChildCommand, RegisterChildService } from "./modules/child/application";
import { UuidGenerator } from "./shared/infrastructure";
import { MongoChildRepository } from "./modules/child/infrastructure";
import MongoParentRepository from "./modules/parent/infrastructure/persistence/mongodb/MongoParentRepository";

console.log("Child contact centre Node Web API App");

const startServer = async () => {
  const app = express();

  const port = config.PORT || 3000;

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

async function main(database: Storage): Promise<void> {
  await database.connect();

  await startServer();

  const command: RegisterChildCommand = {
    child: {
      firstName: "Emily",
      middleName: null,
      lastName: "Smith",
      gender: "female",
      genderAtBirth: "female",
      dateOfBirth: "2020-06-15",
      address: {
        addressLineOne: "10 High Street",
        addressLineTwo: null,
        city: "London",
        county: null,
        country: "United Kingdom",
        postCode: "SW1A 1AA",
      },
    },
    father: {
      title: "Mr",
      firstName: "John",
      middleName: null,
      lastName: "Smith",
      gender: "male",
      address: {
        addressLineOne: "10 High Street",
        addressLineTwo: null,
        city: "London",
        county: null,
        country: "United Kingdom",
        postCode: "SW1A 1AA",
      },
    },
    mother: {
      title: "Mrs",
      firstName: "Sarah",
      middleName: null,
      lastName: "Smith",
      gender: "female",
      address: {
        addressLineOne: "10 High Street",
        addressLineTwo: null,
        city: "London",
        county: null,
        country: "United Kingdom",
        postCode: "SW1A 1AA",
      },
    },
  };

  const registerChild = new RegisterChildService(
    new UuidGenerator(),
    new MongoChildRepository(),
    new MongoParentRepository(),
  );
  await registerChild.register(command);
}

main(new MongooseMongodb()).catch((error) => {
  console.error("Application failed to start:", error);
  process.exit(1);
});
