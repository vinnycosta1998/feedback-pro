import { randomUUID } from "node:crypto";
import { beforeEach, describe, expect, it } from "vitest";
import { InMemmoryUsersRepository } from "../../repositories/in-memmory/in-memmory-users-repository";
import { RegisterUseCase } from "./register";
import { UserAlreadyExistsError } from "../../errors/UserAlreadyExistsError";

let usersRepository: InMemmoryUsersRepository;
let sut: RegisterUseCase;

describe("Register use case test", () => {
  beforeEach(() => {
    usersRepository = new InMemmoryUsersRepository();
    sut = new RegisterUseCase(usersRepository);
  });

  it("should not be able to register with same email", async () => {
    await sut.execute({
      id: randomUUID(),
      name: "Lojas Curitiba",
      cnpj: "123.456.789-11",
      email: "lojascuritiba@example.com",
      password: "12345678",
    });

    await expect(() =>
      sut.execute({
        id: randomUUID(),
        name: "Lojas Curitiba",
        cnpj: "123.456.789-11",
        email: "lojascuritiba@example.com",
        password: "12345678",
      }),
    ).rejects.toBeInstanceOf(UserAlreadyExistsError);
  });
});
