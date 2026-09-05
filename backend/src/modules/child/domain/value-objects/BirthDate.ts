import {InvalidBirthDateError} from "../errors";

class BirthDate {
    private constructor(public readonly value: string) {
    }

    static create(value: string): BirthDate {

        if (!BirthDate.isValidDate(value)) {
            throw new InvalidBirthDateError(
                "Date of birth must be a valid date in YYYY-MM-DD format"
            );
        }

        const birthdate = BirthDate.toDate(value);

        if (!BirthDate.isWithinChildAgeRange(birthdate)) {
            throw new InvalidBirthDateError("Date of birth must be between 6 weeks and 16 years old");
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
     * - more than 6 weeks old
     * - 16 years old or younger
     */
    private static isWithinChildAgeRange(asOf: Date = new Date()): boolean {
        const dateOfBirth = BirthDate.toDate(this.value);

        const sixWeeksAgo = new Date(asOf);
        sixWeeksAgo.setDate(sixWeeksAgo.getDate() - 42);

        const sixteenYearsAgo = new Date(asOf);
        sixteenYearsAgo.setFullYear(
            sixteenYearsAgo.getFullYear() - 16
        );

        return (
            dateOfBirth < sixWeeksAgo &&
            dateOfBirth >= sixteenYearsAgo
        );
    }

    private static toDate(value: string): Date {
        const [year, month, day] = value
            .split("-")
            .map(Number);

        return new Date(year, month - 1, day);
    }
}

export default BirthDate;