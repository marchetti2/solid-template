import { IUserRepository } from "../repositories/IUserRepository";
import { User } from "../entities/User";
import { ICreateUserDTO } from "./ICreateUserDTO";

class CreateUserUseCase {

  constructor(private userRepository: IUserRepository
  ) { }

  async execute(data: ICreateUserDTO) {
    const userAlreadyExists = await this.userRepository.findByEmail(data.email);

    if (userAlreadyExists) {
      throw new Error('User already exists.');
    }

    const user = new User(data);

    await this.userRepository.save(user)
    return user

  }
}

export { CreateUserUseCase }
