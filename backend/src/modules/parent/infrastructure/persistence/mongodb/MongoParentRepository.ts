import mongoose from "mongoose";
import ParentMongoModel from "./schemas/ParentSchema";
import ParentRepository from "../../../application/ports/ParentRepository";
import { Parent } from "../../../domain";
import ParentMapper from "../mapper/ParentMapper";
import { ParentPersistenceError } from "../../persistence/index";
import { ParentPersistenceErrorCode } from "../errors/ParentPersistenceErrorCode";

const { ValidationError } = mongoose.Error;

type MongooseValidationErrorValue = mongoose.Error.ValidatorError | mongoose.Error.CastError;

export default class MongoParentRepository implements ParentRepository {
  async add(parent: Parent): Promise<string> {
    try {
      const model = new ParentMongoModel(ParentMapper.toPersistence(parent));
      await model.save();
      return model._id;
    } catch (error) {
      if (error instanceof ValidationError) {
        const validationErrors = Object.values(error.errors)
          .map((err: MongooseValidationErrorValue) => err.message)
          .join("\n");
        throw new ParentPersistenceError(
          validationErrors,
          ParentPersistenceErrorCode.InvalidParentValue,
        );
      }
      const message =
        error instanceof Error ? error.message : "An unknown persistence error occurred";

      throw new ParentPersistenceError(message, ParentPersistenceErrorCode.UnknownPersistenceError);
    }
  }
}
