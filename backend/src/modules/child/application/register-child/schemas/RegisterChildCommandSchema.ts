import {RegisterChildSchema, RegisterChildParentSchema} from "../../../../../application/child/register-child-use-case/command";
import * as z from "zod";

export const RegisterChildCommandSchema = z.object({
    child: RegisterChildSchema,
    father: RegisterChildParentSchema,
    mother: RegisterChildParentSchema
});
export type RegisterChildCommand = z.infer<typeof RegisterChildCommandSchema>;
