import {ParentRoleType} from "../index" ;

export default class ParentRole {
    private constructor(public readonly value: ParentRoleType) {
    }

    static create = (value: ParentRoleType): ParentRole => new ParentRole(value);
}