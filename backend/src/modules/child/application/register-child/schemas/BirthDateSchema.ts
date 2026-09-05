import * as z from "zod";

export const BirthDateSchema = z.iso.date();

export type DateOfBirth = z.infer<typeof BirthDateSchema>;