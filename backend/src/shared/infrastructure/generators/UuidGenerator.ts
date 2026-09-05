import {IdGenerator} from "../../../application/common";
import {randomUUID} from "node:crypto";

class UuidGenerator implements IdGenerator {
    generate(): string {
        return randomUUID();
    }
}