import { Address, Id, Name } from "../../../../shared/domain";
import { AddressType, GenderType, TitleType } from "../../../../shared/types";
import ParentDomainError from "../errors/ParentDomainError";
import ContactCentreError from "../../../../shared/ports";

export default class Parent {
  private constructor(
    public readonly id: Id,
    public readonly title: TitleType,
    public readonly firstName: Name,
    public readonly middleName: string | null,
    public readonly lastName: Name,
    public readonly gender: GenderType,
    public readonly address: Address,
  ) {}

  static create(
    id: Id,
    title: TitleType,
    firstName: string,
    middleName: string | null,
    lastName: string,
    gender: GenderType,
    { addressLineOne, addressLineTwo, city, county, country, postCode }: AddressType,
  ): Parent {
    try {
      const firstNameObj = Name.create(firstName);
      const lastNameObj = Name.create(lastName);
      const addressObj = Address.create(
        addressLineOne,
        addressLineTwo,
        city,
        county,
        country,
        postCode,
      );

      return new Parent(id, title, firstNameObj, middleName, lastNameObj, gender, addressObj);
    } catch (error) {
      if (error instanceof ContactCentreError)
        throw new ParentDomainError(error.message, error.code);

      throw error;
    }
  }
}
