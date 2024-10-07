import { randomUUID } from "node:crypto";
import { beforeEach, describe, it, expect } from "vitest";
import { InMemmoryAnswerRepository } from "../../../repositories/in-memmory/in-memmory-answer-repository";
import { GetListAnswersUseCase } from "./get-list-answers";

let answersRepository: InMemmoryAnswerRepository;
let sut: GetListAnswersUseCase;

describe("Get list answers test", () => {
  beforeEach(() => {
    answersRepository = new InMemmoryAnswerRepository();
    sut = new GetListAnswersUseCase(answersRepository);
  });

  it("should be able to get list answers by answerId", async () => {
    await answersRepository.create({
      id: randomUUID(),
      answer: "Ambiente agradável",
      rate: 80,
      answerId: "answer-id",
    });

    const createdAnswer = await answersRepository.create({
      id: randomUUID(),
      answer: "Atendimento excelente",
      rate: 100,
      answerId: "answer-id",
    });

    const { answers } = await sut.execute({
      answerId: createdAnswer.answerId,
    });

    expect(answers).toHaveLength(2);
  });
});
