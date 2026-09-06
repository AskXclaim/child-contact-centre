import {RegisterChildCommand} from "../index"

export default interface RegisterChildUseCase {
    register: (command: RegisterChildCommand) => Promise<string>
}