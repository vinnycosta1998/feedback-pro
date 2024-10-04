import { randomUUID } from "node:crypto";
import { beforeEach, describe, expect, it } from "vitest";
import { InMemmoryUsersRepository } from "../../repositories/in-memmory/in-memmory-users-repository";
import { AuthenticateUseCase } from "./authenticate";
import { ResourceNotFoundError } from "../../errors/ResourceNotFoundError";
import { InvalidCredentialsError } from "../../errors/InvalidCredentialsError";

let usersRepository: InMemmoryUsersRepository;
let sut: AuthenticateUseCase;

describe("Authenticate use case test", () => {
  beforeEach(() => {
    usersRepository = new InMemmoryUsersRepository();
    sut = new AuthenticateUseCase(usersRepository);
  });

  it("not should be able to authenticate with wrong email", async () => {
    await usersRepository.create({
      id: randomUUID(),
      name: "Lojas Curitiba",
      cnpj: "123.456.789-11",
      email: "lojascuritiba@example.com",
      password: "12345678",
    });

    await expect(() =>
      sut.execute({
        email: "lojacuritiba@example.com",
        password: "12345678",
      }),
    ).rejects.toBeInstanceOf(ResourceNotFoundError);
  });

  it("should not be able to authenticate with wrong password", async () => {
    await usersRepository.create({
      id: randomUUID(),
      name: "Lojas Curitiba",
      cnpj: "123.456.789-11",
      email: "lojascuritiba@example.com",
      password: "12345678",
    });

    await expect(() =>
      sut.execute({
        email: "lojascuritiba@example.com",
        password: "123456",
      }),
    ).rejects.toBeInstanceOf(InvalidCredentialsError);
  });

  it("should be able to authenticate", async () => {
    const createdUser = await usersRepository.create({
      id: randomUUID(),
      name: "Lojas Curitiba",
      cnpj: "123.456.789-11",
      email: "lojascuritiba@example.com",
      password: "12345678",
    });

    expect(createdUser.id).toEqual(expect.any(String));
  });
});
