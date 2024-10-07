import { PrismaQuestionsRepository } from "../../../repositories/prisma/prisma-questions-repository";}
import { GetListQuestionUseCase } from "../../../use-cases/users/questions/get-list-questions";}

export function makeCreateQuestionUseCase() {
  const usersRepository = new PrismaQuestionsRepository();

  const useCase = new GetListQuestionUseCase(usersRepository);

  return useCase;
}
