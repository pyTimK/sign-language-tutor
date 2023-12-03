export class MyUser {
  name: string;
  tutorialLevel: number;
  quizLevel: number;
  score: number;
  difficulty: Difficulty;

  constructor(
    name: string,
    tutorialLevel: number,
    quizLevel: number,
    score: number,
    difficulty: Difficulty
  ) {
    this.name = name;
    this.tutorialLevel = tutorialLevel;
    this.quizLevel = quizLevel;
    this.score = score;
    this.difficulty = difficulty;
  }

  static fromNull(): MyUser {
    return new MyUser("", 0, 0, 0, "beginner");
  }

  static from(myUser: MyUser, changes: Partial<MyUser>): MyUser {
    return Object.assign({}, myUser, changes);
  }
}

export type Difficulty = "beginner" | "intermediate";
