import * as z from "zod";

export const GenderSchema = z.enum(["male", "female", "others"]);

export type Gender = z.infer<typeof GenderSchema>;
