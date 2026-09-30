import { Parent } from "../../../domain/index";
import { ParentDocument } from "../mongodb/schemas/ParentSchema";
import { Id } from "../../../../../shared/domain";
import { GenderType, TitleType } from "../../../../../shared/types";
import AddressType from "../../../../../shared/types/AddressType";
import ParentData from "../ports/ParentData";

export default class ParentMapper {
  static toDomain = (document: ParentDocument): Parent => {
    return Parent.create(
      Id.create(document._id),
      document.title as TitleType,
      document.firstName,
      document.middleName,
      document.lastName,
      document.gender as GenderType,
      document.address as AddressType,
    );
  };
  static toPersistence = (parent: Parent): ParentData => {
    return {
      _id: parent.id.value,
      title: parent.title,
      firstName: parent.firstName.value,
      middleName: parent.middleName,
      lastName: parent.lastName.value,
      gender: parent.gender,
      address: { ...parent.address, postCode: parent.address.postCode.value },
    };
  };
}
