import { randomUUID } from "node:crypto";
import { beforeEach, describe, expect, it } from "vitest";
import { InMemmoryUsersRepository } from "../../repositories/in-memmory/in-memmory-users-repository";
import { GetUserProfileUseCase } from "./get-user-profile";

let usersRepository: InMemmoryUsersRepository;
let sut: GetUserProfileUseCase;

describe("Get user profile test", () => {
  beforeEach(() => {
    usersRepository = new InMemmoryUsersRepository();
    sut = new GetUserProfileUseCase(usersRepository);
  });

  it("should be able to get user profile", async () => {
    const userCreated = await usersRepository.create({
      id: randomUUID(),
      name: "Lojas Curitiba",
      cnpj: "123.456.789-11",
      email: "lojascuritiba@example.com",
      password: "12345678",
    });

    const { user } = await sut.execute({
      id: userCreated.id,
    });

    expect(user.id).toEqual(expect.any(String));
  });
});
