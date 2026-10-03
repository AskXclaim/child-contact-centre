import ChildRepository from "../../../application/ports/ChildRepository";
import { BirthDate, Child } from "../../../domain";
import ChildPersistenceError from "../errors/ChildPersistenceError";
import { ChildPersistenceErrorCode } from "../errors/ChildPersistenceErrorCode";
import ChildMongoModel from "./schemas/ChildSchema";
import ChildMapper from "../mapper/ChildMapper";
import mongoose from "mongoose";

const { ValidationError } = mongoose.Error;

type MongooseValidationErrorValue = mongoose.Error.ValidatorError | mongoose.Error.CastError;

export default class MongoChildRepository implements ChildRepository {
  async save(child: Child): Promise<string> {
    // check if child exists
    if (
      await this.existsByNameAndDateOfBirth(
        child.firstName.value,
        child.lastName.value,
        child.dateOfBirth,
      )
    ) {
      throw new ChildPersistenceError(
        "Child already exists",
        ChildPersistenceErrorCode.ChildAlreadyExists,
      );
    }
    // Add child to collection
    try {
      const model = new ChildMongoModel(ChildMapper.toPersistence(child));
      await model.save();
      return model._id;
    } catch (error) {
      if (error instanceof ValidationError) {
        const validationErrors = Object.values(error.errors)
          .map((err: MongooseValidationErrorValue) => err.message)
          .join("\n");
        throw new ChildPersistenceError(
          validationErrors,
          ChildPersistenceErrorCode.InvalidChildValues,
        );
      }
      const message =
        error instanceof Error ? error.message : "An unknown persistence error occurred";
      throw new ChildPersistenceError(message, ChildPersistenceErrorCode.UnknownPersistenceError);
    }
  }

  private async existsByNameAndDateOfBirth(
    firstName: string,
    lastName: string,
    dateOfBirth: BirthDate,
  ): Promise<boolean> {
    const child = await ChildMongoModel.exists({
      firstName,
      lastName,
      dateOfBirth: dateOfBirth.value,
    });

    return child !== null;
  }
}
