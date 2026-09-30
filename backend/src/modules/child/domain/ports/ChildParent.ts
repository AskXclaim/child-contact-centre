import { ParentRole } from "../types/ParentRole";
import { ParentRelationship } from "../types/ParentRelationship";

export interface ChildParent {
  parentId: string;
  role: ParentRole;
  relationship: ParentRelationship;
}
