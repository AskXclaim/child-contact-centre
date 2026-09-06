import * as z from "zod";

export const AddressSchema = z.object({
    addressLineOne: z.string().trim().min(1).max(50),
    addressLineTwo: z.string().trim().min(1).max(50).nullable().default(null),
    city: z.string().trim().min(1).max(50),
    county: z.string().trim().min(1).max(50).nullable().default(null),
    country: z.string().trim().min(1).max(50),
    postCode: z.string().trim().min(1).max(10)
});

export type Address = z.infer<typeof AddressSchema>;