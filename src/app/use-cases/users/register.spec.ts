import { randomUUID } from "node:crypto";
import { beforeEach, describe, expect, it } from "vitest";
import { InMemmoryUsersRepository } from "../../repositories/in-memmory/in-memmory-users-repository";
import { RegisterUseCase } from "./register";
import { UserAlreadyExistsError } from "../../errors/UserAlreadyExistsError";
import { PasswordLengthError } from "../../errors/PasswordLengthError";
import { compare } from "bcryptjs";

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

  it("should not be able to register with password between 8 and 14 carachteres", async () => {
    await expect(() =>
      sut.execute({
        id: randomUUID(),
        name: "Lojas Curitiba",
        cnpj: "123.456.789-11",
        email: "lojascuritiba@example.com",
        password: "123456",
      }),
    ).rejects.toBeInstanceOf(PasswordLengthError);
  });

  it("should hash user password upon registration", async () => {
    const { user } = await sut.execute({
      id: randomUUID(),
      name: "Lojas Curitiba",
      cnpj: "123.456.789-11",
      email: "lojascuritiba@example.com",
      password: "12345678",
    });

    const isPasswordCorrectHashed = await compare("12345678", user.password);

    expect(isPasswordCorrectHashed).toBe(true);
  });

  it("should be able to register", async () => {
    const { user } = await sut.execute({
      id: randomUUID(),
      name: "Lojas Curitiba",
      cnpj: "123.456.789-11",
      email: "lojascuritiba@example.com",
      password: "12345678",
    });

    expect(user.id).toEqual(expect.any(String));
  });
});
