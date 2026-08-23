import {AddressSchema, DateOfBirthSchema, GenderSchema} from "../../../common/schemas-models";
import * as z from "zod";

export const RegisterChildParentSchema = z.object({
    title: z.enum(["Mr", "Mrs", "Miss", "Ms"]),
    firstName: z.string().trim().min(2).max(50),
    middleName: z.string().trim().min(1).max(50).optional(),
    lastName: z.string().trim().min(2).max(50),
    gender: GenderSchema,
    address: AddressSchema
});

export type RegisterChildParentInput = z.infer<typeof RegisterChildParentSchema>;