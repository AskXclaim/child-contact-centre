import {Address, Id, InvalidAddressError, InvalidNameError, Name} from "../../../../shared/domain";
import {AddressType, Gender} from "../../../../shared/types";
import {BirthDate, InvalidBirthDateError} from "../index";
import InvalidChildAddressError from "../errors/InvalidChildAddressError";
import InvalidChildNameError from "../errors/InvalidChildNameError";

export default class Child {
    private constructor(public readonly id: Id, public readonly firstName: Name,
                        public readonly middleName: string|null, public readonly lastName: Name, public readonly gender: Gender,
                        public readonly genderAtBirth: Gender, public readonly dateOfBirth: BirthDate, public readonly address: Address,
                        public readonly fatherId: Id, public readonly motherId: Id) {
    }

    static create(id: Id, firstName: string, middleName: string|null, lastName: string,
                  gender: Gender, genderAtBirth: Gender, dateOfBirth: string,
                  {addressLineOne, addressLineTwo, city, country, county, postCode}: AddressType, fatherId: Id, motherId: Id): Child {

        try {
            const firstNameObj = Name.create(firstName);
            const lastNameObj = Name.create(lastName);
            const dateOfBirthObj = BirthDate.create(dateOfBirth);
            const addressObj = Address.create
            (addressLineOne, addressLineTwo, city, county, country, postCode);

            return new Child(id, firstNameObj, middleName, lastNameObj,
                gender, genderAtBirth, dateOfBirthObj, addressObj,
                fatherId, motherId);
        } catch (error) {
            if (error instanceof InvalidNameError)
                throw new InvalidChildNameError(error.message);

            if (error instanceof InvalidBirthDateError)
                throw new InvalidBirthDateError(error.message);

            if (error instanceof InvalidAddressError)
                throw new InvalidChildAddressError(error.message);

            throw error;
        }

    }
}