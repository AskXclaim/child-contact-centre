import InvalidNameError from "../errors/InvalidNameError";

class Name {
    private constructor(public readonly value: string) {
    }

    static create(value: string): Name {
        const name = value?.trim();
        if (!name)
            throw new InvalidNameError("Name cannot be empty");
        if (name.length < 2)
            throw new InvalidNameError("Name cannot be shorter than 2 characters");

        return new Name(name);
    }
}

export default Name;