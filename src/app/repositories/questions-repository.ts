import { Prisma, Question } from "@prisma/client";

export interface QuestionsRepository {
  create(data: Prisma.QuestionCreateInput): Promise<Question>;
}
