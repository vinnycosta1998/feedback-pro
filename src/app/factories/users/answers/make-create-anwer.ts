import { PrismaAnswersRepository } from "../../../repositories/prisma/prisma-answers-repository";
import { CreateAnswerUseCase } from "../../../use-cases/users/answers/create-answer";

export function makeCreateAnswerUseCase() {
  const usersRepository = new PrismaAnswersRepository();

  const useCase = new CreateAnswerUseCase(usersRepository);

  return useCase;
}
