import { UsersRepository } from "@/app/repositories/users-repository";
import { Prisma, User } from "@prisma/client";
import { hash } from "bcryptjs";

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
      throw new Error("User already exists");
    }

    if (props.password.length < 8 || props.password.length > 14) {
      throw new Error("Password has length between 8 and 14 caractheres");
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
