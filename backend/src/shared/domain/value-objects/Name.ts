import { DomainErrorCode } from "../errors/DomainErrorCode";
import DomainError from "../errors/DomainError";

export default class Name {
  private constructor(public readonly value: string) {}

  public static create(value: string): Name {
    const name = value?.trim();
    if (!name)
      throw new DomainError("Name cannot be empty", DomainErrorCode.NameCannotBeEmptyOrNull);
    if (name.length < 2)
      throw new DomainError(
        "Name cannot be shorter than 2 characters",
        DomainErrorCode.NameMustGreaterThanTwoCharacters,
      );

    return new Name(name);
  }
}
