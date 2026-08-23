import * as z from "zod";

export const DateOfBirthSchema = z.iso.date();

export type DateOfBirth = z.infer<typeof DateOfBirthSchema>;