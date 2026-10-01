import { HydratedDocument, model, Schema } from "mongoose";
import ChildData from "../../ports/ChildData";
import { Genders } from "../../../../../../shared/types";
import { AddressSchema } from "../../../../../parent/infrastructure/persistence/mongodb/schemas/AddressSchema";

const ChildSchema = new Schema<ChildData>({
  _id: {
    type: String,
    required: [true, "id is required"],
    minLength: [5, "id must be at least 5 characters long"],
  },
  firstName: {
    type: String,
    required: [true, "First name is required"],
    trim: true,
    minLength: [2, "First name must be at least 2 characters long"],
    maxLength: [50, "first name must be at most 50 characters long"],
  },
  middleName: {
    type: String,
    trim: true,
    minLength: [2, "Middle name must be at least 2 characters long"],
    maxLength: [50, "Middle name must be at most 50 characters long"],
    default: null,
  },
  lastName: {
    type: String,
    trim: true,
    required: [true, "Last name is required"],
    minLength: [2, "Last name must be at least 2 characters long"],
    maxLength: [50, "Last name must be at most 50 characters long"],
  },
  gender: {
    type: String,
    required: true,
    enum: {
      values: Genders,
      message: "Gender is required and has to be one of the following: " + Genders.join(", "),
    },
  },
  birthGender: {
    type: String,
    required: true,
    enum: {
      values: Genders,
      message: "Birth gender is required and has to be one of the following: " + Genders.join(", "),
    },
  },
  address: { type: AddressSchema, required: [true, "Address is required"] },
  parents: {
    type: [String],
    required: [true, "Parents are required"],
  },
});

const ChildMongoModel = model<ChildData>("Child", ChildSchema);
export default ChildMongoModel;
export type ChildDocument = HydratedDocument<ChildData>;
