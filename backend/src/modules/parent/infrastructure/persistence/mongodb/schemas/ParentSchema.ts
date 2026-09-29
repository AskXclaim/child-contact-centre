import mongoose, {HydratedDocument, Schema} from "mongoose";
import {Genders} from "../../../../../../shared/types";
import {Titles} from "../../../../../../shared/types";
import {AddressSchema} from "./AddressSchema";
import ParentData from "../../ports/ParentData";

const ParentSchema = new Schema<ParentData>({
    _id: {
        type: String,
        required: [true, "id is required"],
        minLength: [5, "id must be at least 5 characters long"],
    },
    title: {
        type: String,
        required: true,
        enum: {
            values: Titles,
            message: "Title is required and has to be one of the following: " + Titles.join(", ")
        }
    },
    firstName: {
        type: String,
        required: [true, "First name is required"],
        trim: true,
        minLength: [2, "First name must be at least 2 characters long"],
        maxLength: [50, "first name must be at most 50 characters long"]
    },
    middleName: {
        type: String,
        trim: true,
        minLength: [2, "Middle name must be at least 2 characters long"],
        maxLength: [50, "Middle name must be at most 50 characters long"],
        default: null
    },
    lastName: {
        type: String,
        trim: true,
        required: [true, "Last name is required"],
        minLength: [2, "Last name must be at least 2 characters long"],
        maxLength: [50, "Last name must be at most 50 characters long"]
    },
    gender: {
        type: String,
        required: true,
        enum: {
            values: Genders,
            message: "Gender is required and has to be one of the following: " + Genders.join(", ")
        }
    },
    address: {type: AddressSchema, required: [true, "Address is required"]}
});

const ParentMongoModel = mongoose.model<ParentData>("Parent", ParentSchema);
export default ParentMongoModel;
export type ParentDocument = HydratedDocument<ParentData>;