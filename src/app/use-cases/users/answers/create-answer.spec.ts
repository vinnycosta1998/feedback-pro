import { randomUUID } from "node:crypto";
import { beforeEach, describe, expect, it } from "vitest";
import { InMemmoryAnswerRepository } from "../../../repositories/in-memmory/in-memmory-answer-repository";
import { CreateAnswerUseCase } from "./create-answer";

let answersRepository: InMemmoryAnswerRepository;
let sut: CreateAnswerUseCase;

describe("Create answer test", () => {
  beforeEach(() => {
    answersRepository = new InMemmoryAnswerRepository();
    sut = new CreateAnswerUseCase(answersRepository);
  });

  it("should be able to create a answer", async () => {
    const { answer } = await sut.execute({
      id: randomUUID(),
      answer: "Atendimento excelente",
      rate: 20,
      answerId: "answer-id",
    });

    expect(answer.id).toEqual(expect.any(String));
  });
});
