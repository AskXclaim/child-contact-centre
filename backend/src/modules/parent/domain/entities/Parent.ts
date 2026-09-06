import {Address, Id, InvalidNameError, Name} from "../../../../shared/domain";
import {AddressType, Gender, Title} from "../../../../shared/types";
import {InvalidParentNameError} from "../index";

export default class Parent {
    private constructor(public readonly id: Id, public readonly title: Title, public readonly firstName: Name,
                        public readonly middleName: string|null, public readonly lastName: Name,
                        public readonly gender: Gender, public readonly address: Address) {
    }

    static create(id: Id, title: Title, firstName: string, middleName: string|null, lastName: string,
                  gender: Gender, {
                      addressLineOne,
                      addressLineTwo,
                      city,
                      county,
                      country,
                      postCode
                  }: AddressType): Parent {

        try {
            const firstNameObj = Name.create(firstName);
            const lastNameObj = Name.create(lastName);
            const addressObj = Address.create(
                addressLineOne, addressLineTwo, city, county, country, postCode)

            return new Parent(id, title, firstNameObj, middleName, lastNameObj, gender, addressObj);
        } catch (error) {
            if (error instanceof InvalidNameError)
                throw new InvalidParentNameError(error.message);

            throw error;
        }

    }
}