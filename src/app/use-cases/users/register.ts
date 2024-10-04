import { Prisma, User } from "@prisma/client";
import { UsersRepository } from "../../repositories/users-repository";
import { hash } from "bcryptjs";
import { UserAlreadyExistsError } from "../../errors/UserAlreadyExistsError";
import { PasswordLengthError } from "../../errors/PasswordLengthError";
interface RegisterUseCaseRequest extends Prisma.UserCreateInput {}

interface RegisterUseCaseResponse {
  user: User;
}

export class RegisterUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    ...props
  }: RegisterUseCaseRequest): Promise<RegisterUseCaseResponse> {
    const userWithSameEmail = await this.usersRepository.findByEmail(
      props.email,
    );

    if (userWithSameEmail) {
      throw new UserAlreadyExistsError();
    }

    if (props.password.length < 8 || props.password.length > 14) {
      throw new PasswordLengthError();
    }

    const password_hash = await hash(props.password, 8);

    const user = await this.usersRepository.create({
      name: props.name,
      cnpj: props.cnpj,
      email: props.email,
      password: password_hash,
    });

    return {
      user,
    };
  }
}
