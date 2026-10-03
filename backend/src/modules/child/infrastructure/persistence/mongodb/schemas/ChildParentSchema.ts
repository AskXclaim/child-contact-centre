import ChildParentData from "../../ports/ChildParentData";
import { ParentRole } from "../../types/ParentRole";
import { ParentRelationship } from "../../types/ParentRelationship";
import { Schema } from "mongoose";

const ChildParentSchema = new Schema<ChildParentData>(
  {
    parentId: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ParentRole,
      required: [true, "Parent role is required"],
    },
    relationship: {
      type: String,
      enum: ParentRelationship,
      required: [true, "Parent relationship is required"],
    },
  },
  { _id: false },
);

export default ChildParentSchema;
