import {Schema} from "mongoose";

//Todo write post code validation
export const AddressSchema = new Schema({
    addressLineOne: {type: String, required: [true, "Address line one is required"]},
    addressLineTwo: {type: String, default: null},
    city: {type: String, required: [true, "City is required"]},
    county: {type: String, default: null},
    country: {type: String, required: [true, "Country is required"]},
    postCode: {type: String, required: [true, "Post code is required"]},
}, {_id: false});

