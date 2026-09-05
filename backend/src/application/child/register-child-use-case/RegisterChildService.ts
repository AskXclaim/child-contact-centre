import RegisterChildUseCase from "./useCase/RegisterChildUseCase";
import {RegisterChildCommand} from "./command";
import {ChildRepository} from "../repository";
import {Child} from "../../../domain/child/entities";
import {IdGenerator} from "../../common";

class RegisterChildService implements RegisterChildUseCase {
    constructor(private readonly idGenerator: IdGenerator,private readonly childRepository: ChildRepository, private readonly parentRepository:ParentRepository) {
    }

    register(command: RegisterChildCommand): Promise<string> {
        // convert to child entity
        const child = command.child;
        const father = command.father;
        const mother = command.mother;

        const fatherId= this.idGenerator.generate();
        const motherId= this.idGenerator.generate();
        const childId = this.idGenerator.generate();

        const domainFather = Father.create(fatherId, father.firstName, father.middleName, father.lastName,
            father.dateOfBirth, father.gender, father.genderAtBirth, father.address);
        const domainMother = Mother.create(motherId, mother.firstName, mother.middleName, mother.lastName,
            mother.dateOfBirth, mother.gender, mother.genderAtBirth, mother.address);
        const domainChild = Child.create(childId, child.firstName, child.middleName, child.lastName,
            child.dateOfBirth, child.gender, child.genderAtBirth, child.addres, fatherId, motherId);

        return Promise.resolve("");
    }

}

export default RegisterChildService