import { User } from "@prisma/client";
import { UsersRepository } from "../../repositories/users-repository";
import { ResourceNotFoundError } from "../../errors/ResourceNotFoundError";

interface GetUserProfileRequest {
  id: string;
}

interface GetUserProfileResponse {
  user: User;
}

export class GetUserProfile {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    id,
  }: GetUserProfileRequest): Promise<GetUserProfileResponse> {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new ResourceNotFoundError();
    }

    return {
      user,
    };
  }
}
