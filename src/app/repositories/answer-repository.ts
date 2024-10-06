import { Answer } from "@prisma/client";

export interface AnswerRepository {
  create(data: Answer): Promise<Answer>;
}
