import { Prisma } from "@prisma/client";
import { QuestionsRepository } from "../questions-repository";
import { prisma } from "../../lib/prisma";

export class PrismaQuestionsRepository implements QuestionsRepository {
  async create(data: Prisma.QuestionCreateInput) {
    const question = await prisma.question.create({ data });

    return question;
  }

  async findMany(userId: string) {
    const questions = await prisma.question.findMany({
      where: {
        id: userId,
      },
    });

    return questions;
  }
}
