import {RegisterChildSchema, RegisterChildParentSchema} from "./index";
import * as z from "zod";

export const RegisterChildCommandSchema = z.object({
    child: RegisterChildSchema,
    father: RegisterChildParentSchema,
    mother: RegisterChildParentSchema
});
export type RegisterChildCommand = z.infer<typeof RegisterChildCommandSchema>;
