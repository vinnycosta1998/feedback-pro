import { Answer, Prisma } from "@prisma/client";

export interface AnswerRepository {
  create(data: Answer): Promise<Answer>;
  findMany(answerId: string): Promise<Answer[]>;
}
