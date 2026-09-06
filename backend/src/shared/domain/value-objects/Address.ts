import {Postcode, InvalidAddressError} from "../index";

export default class Address {
    private constructor(
        public readonly addressLineOne: string,
        public readonly addressLineTwo: string | null,
        public readonly city: string,
        public readonly county: string | null,
        public readonly country: string,
        public readonly postCode: Postcode,
    ) {
    }

    public static create(addressLineOne: string, addressLineTwo: string | null, city: string,
                         county: string | null, country: string, postCode: string): Address {
        const addressLineObj = addressLineOne.trim();
        const cityObj = city.trim();
        const countryObj = country.trim();
        let postCodeObj: Postcode;

        if (!addressLineOne)
            throw new InvalidAddressError('Address line one is required');
        if (!cityObj)
            throw new InvalidAddressError('City is required');
        if (!countryObj)
            throw new InvalidAddressError('Country is required');
        try {
            postCodeObj = Postcode.create(postCode);
        } catch (error) {
            throw new InvalidAddressError('Post code is invalid');
        }

        return new Address(addressLineObj, addressLineTwo, cityObj, county, countryObj, postCodeObj);
    }
}