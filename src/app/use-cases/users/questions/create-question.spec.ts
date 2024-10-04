import { beforeEach, describe, expect, it } from "vitest";
import { InMemmoryQuestionsRepository } from "../../../repositories/in-memmory/in-memmory-questions-repository";
import { CreateQuestionUseCase } from "./create-question";
import { TitleLengthError } from "../../../errors/TitleLengthError";

let questionsRepository: InMemmoryQuestionsRepository;
let sut: CreateQuestionUseCase;

describe("Create question test", () => {
  beforeEach(() => {
    questionsRepository = new InMemmoryQuestionsRepository();
    sut = new CreateQuestionUseCase(questionsRepository);
  });

  it("should be able  to create a question ", async () => {
    const { question } = await sut.execute({
      title: "Como foi a sua experiencia na loja?",
    });

    expect(question.id).toEqual(expect.any(String));
  });

  it("should not be able to create a question with tile between 12 and 120 caractheres", async () => {
    await expect(() =>
      sut.execute({
        title: "Como",
      }),
    ).rejects.toBeInstanceOf(TitleLengthError);
  });
});
