import { Prisma, Question } from "@prisma/client";
import { QuestionsRepository } from "../questions-repository";
import { randomUUID } from "crypto";

export class InMemmoryQuestionsRepository implements QuestionsRepository {
  public items: Question[] = [];

  async create(data: Question) {
    const question = {
      id: randomUUID(),
      title: data.title,
      userId: data.userId,
    };

    this.items.push(question);

    return question;
  }

  async findMany(userId: string) {
    const questions = this.items.filter((item) => item.userId === userId);

    if (!questions) {
      return null;
    }

    return questions;
  }
}
