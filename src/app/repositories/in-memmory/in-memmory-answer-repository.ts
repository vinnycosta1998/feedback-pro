import { randomUUID } from "node:crypto";
import { Answer } from "@prisma/client";
import { AnswerRepository } from "../answer-repository";

export class InMemmoryAnswerRepository implements AnswerRepository {
  public items: Answer[] = [];

  async create(data: Answer) {
    const answer = {
      id: randomUUID(),
      answer: data.answer,
      rate: data.rate,
      answerId: data.answerId,
    };

    this.items.push(answer);

    return answer;
  }

  async findMany(answerId: string) {
    const answers = this.items.filter((item) => item.answerId === answerId);

    return answers;
  }
}
