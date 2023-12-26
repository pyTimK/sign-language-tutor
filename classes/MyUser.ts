import getRandomElements from "@/myfunctions/getRandomElements";
import QuizLevel from "./QuizLevel";
import TutorialLevel from "./TutorialLevel";

export class MyUser {
  name: string;
  tutorialLevelNum: number;
  quizLevelNum: number;
  score: number;
  difficulty: Difficulty;
  quizLevels: QuizLevel[];
  quizCorrects: boolean[] = [];

  constructor(
    name: string,
    tutorialLevelNum: number,
    quizLevelNum: number,
    score: number,
    difficulty: Difficulty
  ) {
    this.name = name;
    this.tutorialLevelNum = tutorialLevelNum;
    this.quizLevelNum = quizLevelNum;
    this.score = score;
    this.difficulty = difficulty;
    this.quizLevels = [];
  }

  static fromNull(): MyUser {
    return new MyUser("", 0, 0, 0, "beginner");
  }

  getTutorialLevels() {
    const { difficulty } = this;

    const tutorialLevels =
      difficulty === "beginner"
        ? TutorialLevel.LEVELS.BEGINNER
        : TutorialLevel.LEVELS.INTERMEDIATE;

    return tutorialLevels;
  }

  getTutorialLevel() {
    const { tutorialLevelNum } = this;

    const tutorialLevels = this.getTutorialLevels();

    if (tutorialLevelNum < 0 || tutorialLevelNum >= tutorialLevels.length) {
      return TutorialLevel.DEFAULT_LEVEL;
    }

    const tutorialLevel = tutorialLevels[tutorialLevelNum];

    return tutorialLevel;
  }

  resetLevels() {
    this.tutorialLevelNum = 0;
    this.quizLevelNum = 0;
  }

  generateQuiz(length = 10) {
    const tutorialLevels =
      TutorialLevel.LEVELS[
        this.difficulty === "beginner" ? "BEGINNER" : "INTERMEDIATE"
      ];
    const quizLevels: QuizLevel[] = [];

    getRandomElements(tutorialLevels, length).forEach(
      (tutorialLevel, index) => {
        quizLevels.push(new QuizLevel(index + 1, tutorialLevel.sl));
      }
    );

    this.quizLevels = quizLevels;
  }

  getQuizLevel() {
    const { quizLevelNum } = this;

    if (quizLevelNum < 0 || quizLevelNum >= this.quizLevels.length) {
      return QuizLevel.DEFAULT_LEVEL;
    }

    const quizLevel = this.quizLevels[quizLevelNum];

    return quizLevel;
  }
}

export type Difficulty = "beginner" | "intermediate";
