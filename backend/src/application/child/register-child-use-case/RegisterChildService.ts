import RegisterChildUseCase from "./useCase/RegisterChildUseCase";
import {RegisterChildCommand} from "./command";

class RegisterChildService implements RegisterChildUseCase {
    register(command: RegisterChildCommand): Promise<string> {
        // convert to child entity

        return Promise.resolve("");
    }

}

export default RegisterChildService