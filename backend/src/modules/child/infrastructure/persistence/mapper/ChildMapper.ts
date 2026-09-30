import { Child } from "../../../domain";
import ChildData from "../ports/ChildData";

export default class ChildMapper {
  static toPersistence = (child: Child): ChildData => {
    return {
      _id: child.id.value,
      firstName: child.firstName.value,
      middleName: child.middleName,
      lastName: child.lastName.value,
      gender: child.gender,
      birthGender: child.genderAtBirth,
      birthDate: new Date(child.dateOfBirth.value),
      address: { ...child.address, postCode: child.address.postCode.value },
    };
  };
}
