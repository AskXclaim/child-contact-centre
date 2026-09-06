import InvalidNameError from "../errors/InvalidNameError";

export default class Name {
    private constructor(public readonly value: string) {
    }

   public static create(value: string): Name {
        const name = value?.trim();
        if (!name)
            throw new InvalidNameError("Name cannot be empty");
        if (name.length < 2)
            throw new InvalidNameError("Name cannot be shorter than 2 characters");

        return new Name(name);
    }
}