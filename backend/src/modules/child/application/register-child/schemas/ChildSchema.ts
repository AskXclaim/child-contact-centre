import {AddressSchema, DateOfBirthSchema, GenderSchema} from "../../../../../application/common/schemas-models";
import * as z from "zod";

export const ChildSchema = z.object({
    firstName: z.string().trim().min(2).max(50),
    middleName: z.string().trim().min(1).max(50).optional().default(null),
    lastName: z.string().trim().min(2).max(50),
    gender: GenderSchema,
    genderAtBirth: GenderSchema,
    dateOfBirth: DateOfBirthSchema,
    address: AddressSchema
});

export type RegisterChildInput = z.infer<typeof ChildSchema>;