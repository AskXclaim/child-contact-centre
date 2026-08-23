class PostCode {

    private constructor(public readonly value: string) {
    }

    static create(postcode: string): PostCode {
        const normalised = value
            .trim()
            .toUpperCase()
            .replace(/\s+/g, "");

        if (!Postcode.isValid(normalised)) {
            throw new InvalidAddressError(`Invalid UK postcode: ${value}`);
        }

        return new Postcode(Postcode.format(normalised));
    }

    private static isValid(value: string): boolean {
        const postcodeRegex =
            /^(GIR0AA|[A-Z]{1,2}\d[A-Z\d]?\d[A-Z]{2})$/;

        return postcodeRegex.test(value);
    }

    private static format(value: string): string {
        return `${value.slice(0, -3)} ${value.slice(-3)}`;
    }
}

export default PostCode;