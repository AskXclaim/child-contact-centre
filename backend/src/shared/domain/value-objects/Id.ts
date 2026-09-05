class Id {
    private constructor(public readonly value: string) {
    }

    static create(value: string): Id {
        const id = value?.trim();
        if (!id)
            throw new Error('Id cannot be empty');
        if (id.length < 5)
            throw new Error('Id cannot be shorter than 5 characters')

        return new Id(id);
    }
}

export default Id;