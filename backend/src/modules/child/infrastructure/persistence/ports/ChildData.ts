import { AddressType } from "../../../../../shared/types";
import ChildParentData from "./ChildParentData";

export default interface ChildData {
  _id: string;
  firstName: string;
  middleName: string | null;
  lastName: string;
  gender: string;
  birthGender: string;
  birthDate: Date;
  address: AddressType;
  parents: ChildParentData[];
}
