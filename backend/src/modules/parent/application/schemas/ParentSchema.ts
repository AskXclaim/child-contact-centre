import {AddressSchema, GenderSchema} from "../../../shared";
import * as z from "zod";

export const ParentSchema = z.object({
    title: z.enum(["Mr", "Mrs", "Miss", "Ms"]),
    firstName: z.string().trim().min(2).max(50),
    middleName: z.string().trim().min(1).max(50).nullable().default(null),
    lastName: z.string().trim().min(2).max(50),
    gender: GenderSchema,
    address: AddressSchema
});

export type ParentInput = z.infer<typeof ParentSchema>;