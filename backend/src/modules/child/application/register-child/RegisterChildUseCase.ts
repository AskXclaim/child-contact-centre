import {RegisterChildCommand} from "../../../../application/child/register-child-use-case/command";

export default interface RegisterChildUseCase {
    register: (command: RegisterChildCommand) => Promise<string>
}