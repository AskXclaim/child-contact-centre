import {IdGenerator} from "../../domain";
import {randomUUID} from "node:crypto";

export default class UuidGenerator implements IdGenerator {
    generate = (): string => randomUUID();
}