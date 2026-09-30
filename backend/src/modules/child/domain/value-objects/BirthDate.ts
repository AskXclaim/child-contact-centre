import { ChildDomainError, ChildDomainErrorCode } from "../index";

export default class BirthDate {
  private constructor(public readonly value: string) {}

  static create(value: string): BirthDate {
    if (!BirthDate.isValidDate(value)) {
      throw new ChildDomainError(
        "Date of birth must be a valid date in YYYY-MM-DD format",
        ChildDomainErrorCode.InvalidChildDateOfBirth,
      );
    }

    if (!BirthDate.isWithinChildAgeRange(value)) {
      throw new ChildDomainError(
        "Date of birth must be between 6 weeks and 16 years old",
        ChildDomainErrorCode.InvalidChildDateOfBirth,
      );
    }
    return new BirthDate(value);
  }

  private static isValidDate(value: string): boolean {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
      return false;
    }

    const date = BirthDate.toDate(value);

    return !Number.isNaN(date.getTime());
  }

  /**
   * Returns true if the person is:
   * - 6 weeks old or older
   * - 16 years old or younger
   */
  private static isWithinChildAgeRange(date: string): boolean {
    const dateOfBirth = BirthDate.toDate(date);

    const currentDate = Date.now();
    const sixWeeksAgo = new Date(currentDate);
    sixWeeksAgo.setDate(sixWeeksAgo.getDate() - 42);

    const sixteenYearsAgo = new Date(currentDate);
    sixteenYearsAgo.setFullYear(sixteenYearsAgo.getFullYear() - 16);

    return dateOfBirth >= sixteenYearsAgo && dateOfBirth <= sixWeeksAgo;
  }

  private static toDate(value: string): Date {
    const [year, month, day] = value.split("-").map(Number);

    return new Date(year, month - 1, day);
  }
}
