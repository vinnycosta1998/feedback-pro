import { Prisma, Question } from "@prisma/client";

export interface QuestionRepository {
  create(data: Prisma.QuestionCreateInput): Promise<Question>;
}
