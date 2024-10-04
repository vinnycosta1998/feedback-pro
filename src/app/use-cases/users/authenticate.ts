import { User } from "@prisma/client";
import { UsersRepository } from "../../repositories/users-repository";
import { compare } from "bcryptjs";

import { ResourceNotFoundError } from "../../errors/ResourceNotFoundError";
import { InvalidCredentialsError } from "../../errors/InvalidCredentialsError";

interface AuthenticateUseCaseRequest {
  email: string;
  password: string;
}

interface AuthenticateUseCaseResponse {
  user: User;
}

export class AuthenticateUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    email,
    password,
  }: AuthenticateUseCaseRequest): Promise<AuthenticateUseCaseResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new ResourceNotFoundError();
    }

    const doesPasswordMatch = await compare(password, user.password);
    console.log(user.password, password);

    if (!doesPasswordMatch) {
      throw new InvalidCredentialsError();
    }

    return {
      user,
    };
  }
}
