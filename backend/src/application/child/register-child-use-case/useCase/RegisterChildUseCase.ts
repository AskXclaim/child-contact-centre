import {RegisterChildCommand} from "../command";

export default interface RegisterChildUseCase {
    register: (command: RegisterChildCommand) => Promise<string>
}