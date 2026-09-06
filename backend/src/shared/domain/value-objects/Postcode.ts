import InvalidAddressError from "../errors/InvalidAddressError";

export default class Postcode {

    private constructor(public readonly value: string) {
    }

    public static create(postcode: string): Postcode {
        const normalised = postcode
            .trim()
            .toUpperCase()
            .replace(/\s+/g, "");

        if (!Postcode.isValid(normalised)) {
            throw new InvalidAddressError(`Invalid UK postcode: ${postcode}`);
        }

        return new Postcode(Postcode.format(normalised));
    }

    private static isValid(value: string): boolean {
        const postcodeRegex =
            /^(GIR0AA|[A-Z]{1,2}\d[A-Z\d]?\d[A-Z]{2})$/;

        return postcodeRegex.test(value);
    }

    private static format = (value: string): string => `${value.slice(0, -3)} ${value.slice(-3)}`;
}