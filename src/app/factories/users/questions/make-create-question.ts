import { PrismaQuestionsRepository } from "../../../repositories/prisma/prisma-questions-repository";}
import { CreateQuestionUseCase } from "../../../use-cases/users/questions/create-question";}

export function makeCreateQuestionUseCase() {
  const usersRepository = new PrismaQuestionsRepository();

  const useCase = new CreateQuestionUseCase(usersRepository);

  return useCase;
}
