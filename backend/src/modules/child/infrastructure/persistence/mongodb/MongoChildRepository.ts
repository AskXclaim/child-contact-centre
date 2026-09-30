import ChildRepository from "../../../application/ports/ChildRepository";
import {Collection} from "mongodb";
import {BirthDate, Child} from "../../../domain";
import ChildInfrastructureError from "../errors/ChildInfrastructureError";
import { ChildInfrastructureErrorCode } from "../errors/ChildInfrastructureErrorCode";

export default class MongoChildRepository implements ChildRepository {
    constructor(private readonly collection: Collection) {
    }

    async save(child: Child): Promise<string> {
        // check if child exists
        if (!(await this.existsByNameAndDateOfBirth(child.firstName.value, child.lastName.value, child.dateOfBirth))) {
            throw new ChildInfrastructureError("Child already exists", ChildInfrastructureErrorCode.ChildAlreadyExists);
        }
        // Add child to collection
        await this.collection.insertOne({
            firstName: child.firstName.value,
            middleName: child.middleName?.trim(),
            lastName: child.lastName.value,
            dateOfBirth: child.dateOfBirth.value,
            gender: child.gender,
            genderAtBirth: child.genderAtBirth,
            address: child.address
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