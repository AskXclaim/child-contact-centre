abstract class InfrastructureError extends Error {
    abstract readonly code: string;

    constructor(message: string) {
        const msg = message?.trim();
        if (!msg)
            throw new Error("Message cannot be empty");
        super(msg);

        this.name = this.constructor.name;
    }
}
export default InfrastructureError;