import { PrismaAnswersRepository } from "../../../repositories/prisma/prisma-answers-repository";
import { GetListAnswersUseCase } from "../../../use-cases/users/answers/get-list-answers";}

export function makeCreateAnswerUseCase() {
  const usersRepository = new PrismaAnswersRepository();

  const useCase = new GetListAnswersUseCase(usersRepository);

  return useCase;
}
