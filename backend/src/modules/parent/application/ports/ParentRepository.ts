import {Parent} from "../../domain";

export default interface ParentRepository {
    add(parent: Parent): Promise<string>;
}