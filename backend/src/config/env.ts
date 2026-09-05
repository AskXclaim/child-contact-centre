import "dotenv/config";
import {z} from "zod";

const EnvSchema = z.object({
    NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
    PORT: z.coerce.number().default(3000),
    MONGO_URI: z.string().min(10),
    MONGO_DATABASE: z.string().min(1),
    LOG_LEVEL: z.enum(["fatal", "error", "warn", "info", "debug", "trace"]).default("info"),
});

export const config = EnvSchema.parse({
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI,
    MONGO_DATABASE: process.env.MONGO_DATABASE,
    LOG_LEVEL: process.env.LOG_LEVEL
});
