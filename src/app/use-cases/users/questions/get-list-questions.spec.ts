import { beforeEach, describe, expect, it } from "vitest";
import { InMemmoryQuestionsRepository } from "../../../repositories/in-memmory/in-memmory-questions-repository";
import { GetListQuestionUseCase } from "./get-list-questions";
import { randomUUID } from "crypto";

let questionsRepository: InMemmoryQuestionsRepository;
let sut: GetListQuestionUseCase;

describe("Create question test", () => {
  beforeEach(() => {
    questionsRepository = new InMemmoryQuestionsRepository();
    sut = new GetListQuestionUseCase(questionsRepository);
  });

  it("should be able to get list questions", async () => {
    await questionsRepository.create({
      id: randomUUID(),
      title: "Como foi a sua experiencia na loja?",
      userId: "user-id",
    });

    const { questions } = await sut.execute({
      userId: "user-id",
    });

    expect(questions).toHaveLength(1);
  });
});
