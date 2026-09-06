import {RegisterChildUseCase,ChildRepository,RegisterChildCommand} from "../index";
import {Id} from "../../../../shared/domain";
import {IdGenerator} from "../../../../shared/domain";
import {Child} from "../../domain";
import Parent from "../../../parent/domain/entities/Parent";

export default class RegisterChildService implements RegisterChildUseCase {
    constructor(private readonly idGenerator: IdGenerator,private readonly childRepository: ChildRepository, private readonly parentRepository:ParentRepository) {
    }

    register(command: RegisterChildCommand): Promise<string> {
        // convert to child entity
        const child = command.child;
        const father = command.father;
        const mother = command.mother;

        const fatherId=Id.create (this.idGenerator.generate());
        const motherId=Id.create (this.idGenerator.generate());
        const childId =Id.create ( this.idGenerator.generate());

        const domainFather = Parent.create(fatherId, father.title, father.firstName, father.middleName, father.lastName,
             father.gender, father.address);
        const domainMother = Parent.create(motherId,mother.title, mother.firstName, mother.middleName, mother.lastName,
            mother.gender,  mother.address);
        const domainChild = Child.create(childId, child.firstName, child.middleName?.trim()||null, child.lastName,
            child.gender, child.genderAtBirth, child.dateOfBirth,child.address, fatherId, motherId);

        return Promise.resolve("");
    }

}