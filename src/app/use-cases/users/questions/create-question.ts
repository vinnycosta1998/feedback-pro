import { Prisma, Question } from "@prisma/client";
import { QuestionsRepository } from "../../../repositories/questions-repository";
import { TitleLengthError } from "../../../errors/TitleLengthError";

interface CreateQuestionUseCaseRequest extends Prisma.QuestionCreateInput {}

interface CreateQuestionUseCaseResponse {
  question: Question;
}

export class CreateQuestionUseCase {
  constructor(private questionsRepository: QuestionsRepository) {}

  async execute({
    ...props
  }: CreateQuestionUseCaseRequest): Promise<CreateQuestionUseCaseResponse> {
    if (props.title.length < 12 || props.title.length > 120) {
      throw new TitleLengthError();
    }

    const question = await this.questionsRepository.create({
      title: props.title,
    });

    return {
      question,
    };
  }
}
