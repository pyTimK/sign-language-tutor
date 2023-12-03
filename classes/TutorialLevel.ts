import SignLanguage, { SL } from "./SignLanguage";

export default class TutorialLevel {
  level: number;
  sl: SignLanguage;

  constructor(level: number, sl: SignLanguage) {
    this.level = level;
    this.sl = sl;
  }

  getVideoUrl() {
    return `vidoes/sl/${this.sl.videoName}.mp4`;
  }

  static LEVELS = {
    BEGINNER: [
      new TutorialLevel(1, SL.yellow),
      new TutorialLevel(2, SL.continue),
      new TutorialLevel(3, SL.green),
      new TutorialLevel(4, SL.black),
      new TutorialLevel(5, SL.gray),
      new TutorialLevel(6, SL.library),
      new TutorialLevel(7, SL.cr),
      new TutorialLevel(8, SL.church),
      new TutorialLevel(9, SL.hospital),
      new TutorialLevel(10, SL.home),
      new TutorialLevel(11, SL.tomorrow),
      new TutorialLevel(12, SL.feelings),
      new TutorialLevel(13, SL.sad),
      new TutorialLevel(14, SL.happy),
      new TutorialLevel(15, SL.sick),
      new TutorialLevel(16, SL.sister),
      new TutorialLevel(17, SL.relatives),
      new TutorialLevel(18, SL.grandpa),
      new TutorialLevel(19, SL.father),
      new TutorialLevel(20, SL.today),
    ],

    INTERMEDIATE: [
      new TutorialLevel(1, SL.my_favorite_color_is_green),
      new TutorialLevel(2, SL.what_color_do_you_want),
      new TutorialLevel(3, SL.whats_the_color_of_the_shoes),
      new TutorialLevel(4, SL.whats_the_color_of_the_thsirt),
      new TutorialLevel(5, SL.are_you_okay),
      new TutorialLevel(6, SL.im_excited),
      new TutorialLevel(7, SL.what_happened),
      new TutorialLevel(8, SL.where_does_it_hurt),
      new TutorialLevel(9, SL.why_are_you_sad),
      new TutorialLevel(10, SL.are_your_parents_strict),
      new TutorialLevel(11, SL.call_your_sister_now),
      new TutorialLevel(12, SL.how_are_your_parents),
      new TutorialLevel(13, SL.my_family_consists_of_six),
      new TutorialLevel(14, SL.where_is_your_brother),
      new TutorialLevel(15, SL.can_you_help_me),
      new TutorialLevel(16, SL.nice_to_meet_you),
      new TutorialLevel(17, SL.see_you_later),
      new TutorialLevel(18, SL.what_time_is_it),
      new TutorialLevel(19, SL.ill_make_breakfast),
      new TutorialLevel(20, SL.where_are_you_going),
    ],
  };
}
