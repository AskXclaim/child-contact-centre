import { DomainErrorCode, Postcode } from "../index";
import DomainError from "../errors/DomainError";

export default class Address {
  private constructor(
    public readonly addressLineOne: string,
    public readonly addressLineTwo: string | null,
    public readonly city: string,
    public readonly county: string | null,
    public readonly country: string,
    public readonly postCode: Postcode,
  ) {}

  public static create(
    addressLineOne: string,
    addressLineTwo: string | null,
    city: string,
    county: string | null,
    country: string,
    postCode: string,
  ): Address {
    const addressLineObj = addressLineOne.trim();
    const cityObj = city.trim();
    const countryObj = country.trim();
    let postCodeObj: Postcode;

    if (!addressLineOne)
      throw new DomainError(
        "Address line one is required",
        DomainErrorCode.AddressCannotBeEmptyOrNull,
      );
    if (!cityObj)
      throw new DomainError("City is required", DomainErrorCode.CityCannotBeEmptyOrNull);
    if (!countryObj)
      throw new DomainError("Country is required", DomainErrorCode.CountryCannotBeEmptyOrNull);
    try {
      postCodeObj = Postcode.create(postCode);
      return new Address(addressLineObj, addressLineTwo, cityObj, county, countryObj, postCodeObj);
    } catch (error) {
      if (error instanceof DomainError) throw new DomainError(error.message, error.code);

      throw error;
    }
  }
}
