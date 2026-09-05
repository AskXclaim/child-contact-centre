import {MongoClient} from 'mongodb';

export default class MongoConnection {
    private readonly client: MongoClient;

    constructor(private readonly uri: string) {
        this.client = new MongoClient(this.uri);
    }

    async connect(): Promise<void> {
        await this.client.connect();
    }

    async disconnect(): Promise<void> {
        await this.client.close();
    }

    getClient(): MongoClient {
        return this.client;
    }
}
