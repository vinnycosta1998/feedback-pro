import { randomUUID } from "node:crypto";
import { Answer } from "@prisma/client";
import { AnswerRepository } from "../../../repositories/answer-repository";

interface CreateAnswerRequest extends Answer {}

interface CreateAnswerResponse {
  answer: Answer;
}

export class CretaeAnswerUseCase {
  constructor(private answerRepository: AnswerRepository) {}

  async execute({
    ...props
  }: CreateAnswerRequest): Promise<CreateAnswerResponse> {
    if (props.answer.length < 2 || props.answer.length > 120) {
      throw new Error("Answer has length betwen 2and 120 caractheres ");
    }

    const answer = await this.answerRepository.create({
      id: props.id,
      answer: props.answer,
      rate: props.rate,
      answerId: props.answerId,
    });

    return {
      answer,
    };
  }
}
