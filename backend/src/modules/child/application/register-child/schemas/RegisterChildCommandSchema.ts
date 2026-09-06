import {ChildSchema} from "../../index";
import * as z from "zod";
import {ParentSchema} from "../../../../parent/application";

export const RegisterChildCommandSchema = z.object({
    child: ChildSchema,
    father: ParentSchema,
    mother: ParentSchema
});
export type RegisterChildCommand = z.infer<typeof RegisterChildCommandSchema>;
