import SignLanguage, { SL } from "./SignLanguage";

export default class QuizLevel {
  level: number;
  sl: SignLanguage;

  constructor(level: number, sl: SignLanguage) {
    this.level = level;
    this.sl = sl;
  }

  static DEFAULT_LEVEL = new QuizLevel(0, SL.yellow);
}
