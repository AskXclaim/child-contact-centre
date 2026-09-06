import {AddressSchema, GenderSchema} from "../../../../shared";
import {BirthDateSchema} from "./BirthDateSchema";
import * as z from "zod";

export const ChildSchema = z.object({
    firstName: z.string().trim().min(2).max(50),
    middleName: z.string().trim().min(1).max(50).optional(),
    lastName: z.string().trim().min(2).max(50),
    gender: GenderSchema,
    genderAtBirth: GenderSchema,
    dateOfBirth: BirthDateSchema,
    address: AddressSchema
});

export type RegisterChild = z.infer<typeof ChildSchema>;