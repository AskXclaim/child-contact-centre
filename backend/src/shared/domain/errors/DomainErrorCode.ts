export const DomainErrorCode = {
  NameCannotBeEmptyOrNull: "NAME_CANNOT_BE_EMPTY_OR_NULL",
  NameMustGreaterThanTwoCharacters: "NAME_MUST_BE_GREATER_THAN_TWO_CHARACTERS",
  AddressCannotBeEmptyOrNull: "ADDRESS_CANNOT_BE_EMPTY_OR_NULL",
  CityCannotBeEmptyOrNull: "CITY_CANNOT_BE_EMPTY_OR_NULL",
  CountryCannotBeEmptyOrNull: "COUNTRY_CANNOT_BE_EMPTY_OR_NULL",
  InvalidCountry: "INVALID_COUNTRY",
  InvalidPostcode: "INVALID_POSTCODE",
};

export type DomainErrorCode = (typeof DomainErrorCode)[keyof typeof DomainErrorCode];
