import { Answer } from "@prisma/client";
import { AnswerRepository } from "../../../repositories/answer-repository";
import { AnswersListEmpytError } from "../../../errors/AnswersListEmpytError";

interface GetListAnswerRequest {
  answerId: string;
}

interface GetListAnswerResponse {
  answers: Answer[];
}

export class GetListAnswersUseCase {
  constructor(private answersRepository: AnswerRepository) {}

  async execute({
    answerId,
  }: GetListAnswerRequest): Promise<GetListAnswerResponse> {
    const answers = await this.answersRepository.findMany(answerId);

    if (!answers) {
      throw new AnswersListEmpytError();
    }

    return {
      answers,
    };
  }
}
