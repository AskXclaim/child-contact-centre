import ChildRepository from "../../../application/repositories/ChildRepository";
import {Collection} from "mongodb";
import {BirthDate, Child} from "../../../domain";
import ChildExistsError from "../errors/ChildExistsError";

export default class MongoChildRepository implements ChildRepository {
    constructor(private readonly collection: Collection) {
    }

    async save(child: Child): Promise<string> {
        // check if child exists
        if (!(await this.existsByNameAndDateOfBirth(child.firstName.value, child.lastName.value, child.dateOfBirth))) {
            throw new ChildExistsError("Child already exists");
        }
        // Add child to collection
        await this.collection.insertOne({
            firstName: child.firstName.value,
            middleName: child.middleName?.trim(),
            lastName: child.lastName.value,
            dateOfBirth: child.dateOfBirth.value,
            gender: child.gender,
            genderAtBirth: child.genderAtBirth,
            address: child.address,
            fatherId: child.fatherId,
            motherId: child.motherId,
        });

        // return child id

        return Promise.resolve(child.id.value);
    }

    private async existsByNameAndDateOfBirth(
        firstName: string,
        lastName: string,
        dateOfBirth: BirthDate
    ): Promise<boolean> {

        const child = await this.collection.findOne(
            {
                firstName,
                lastName,
                dateOfBirth
            },
            {
                projection: {
                    _id: 1
                }
            }
        );

        return child !== null;
    }

}