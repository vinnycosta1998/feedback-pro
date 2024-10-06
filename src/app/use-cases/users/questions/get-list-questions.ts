import { Question } from "@prisma/client";
import { QuestionsRepository } from "../../../repositories/questions-repository";

interface GetListQuestionRequest {
  userId: string;
}

interface GetListQuestionResponse {
  questions: Question[];
}

export class GetListQuestionUseCase {
  constructor(private questionsRepository: QuestionsRepository) {}

  async execute({
    userId,
  }: GetListQuestionRequest): Promise<GetListQuestionResponse> {
    const questions = await this.questionsRepository.findMany(userId);

    if (!questions) {
      throw new Error("Question list empyt");
    }

    return {
      questions,
    };
  }
}
