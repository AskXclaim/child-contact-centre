import { ParentRole } from "../types/ParentRole";
import { ParentRelationship } from "../types/ParentRelationship";

export default interface ChildParentData {
  parentId: string;
  role: ParentRole;
  relationship: ParentRelationship;
}
