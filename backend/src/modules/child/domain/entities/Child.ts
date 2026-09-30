import {
  Address,
  Id,
  Name,
} from "../../../../shared/domain";
import { AddressType, GenderType } from "../../../../shared/types";
import { BirthDate } from "../index";
import { ChildParent } from "../ports/ChildParent";
import ChildDomainError from "../errors/ChildDomainError";

export default class Child {
  private constructor(
    public readonly id: Id,
    public readonly firstName: Name,
    public readonly middleName: string | null,
    public readonly lastName: Name,
    public readonly gender: GenderType,
    public readonly genderAtBirth: GenderType,
    public readonly dateOfBirth: BirthDate,
    public readonly address: Address,
    public readonly parents: ChildParent[],
  ) {}

  static create(
    id: Id,
    firstName: string,
    middleName: string | null,
    lastName: string,
    gender: GenderType,
    genderAtBirth: GenderType,
    dateOfBirth: string,
    { addressLineOne, addressLineTwo, city, country, county, postCode }: AddressType,
    parents: ChildParent[],
  ): Child {
    const firstNameObj = Name.create(firstName);
    const lastNameObj = Name.create(lastName);
    const dateOfBirthObj = BirthDate.create(dateOfBirth);
    const addressObj = Address.create(
      addressLineOne,
      addressLineTwo,
      city,
      county,
      country,
      postCode,
    );

    if (!parents || parents.length === 0)
      throw new ChildDomainError("Parents are required", "PARENTS_NOT_PROVIDED");

    return new Child(
      id,
      firstNameObj,
      middleName,
      lastNameObj,
      gender,
      genderAtBirth,
      dateOfBirthObj,
      addressObj,
      parents,
    );
  }
}
