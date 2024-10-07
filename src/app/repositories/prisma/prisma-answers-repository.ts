import { Answer } from "@prisma/client";
import { AnswerRepository } from "../answer-repository";
import { prisma } from "../../lib/prisma";

export class PrismaAnswersRepository implements AnswerRepository {
  async create(data: Answer) {
    const answer = prisma.answer.create({
      data,
    });

    return answer;
  }

  async findMany(answerId: string) {
    const answers = prisma.answer.findMany({
      where: {
        answerId,
      },
    });

    return answers;
  }
}
