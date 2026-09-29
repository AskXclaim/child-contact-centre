import AddressData from "./AddressData";

export default interface ParentData {
    _id: string;
    title: string;
    firstName: string;
    middleName: string | null;
    lastName: string;
    gender: string;
    address: AddressData;
}
