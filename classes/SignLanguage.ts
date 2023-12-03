export default class SignLanguage {
  phrase: string;
  videoName: string;

  constructor(phrase: string, videoName: string) {
    this.phrase = phrase;
    this.videoName = videoName;
  }
}

export const SL = {
  //? BEGINNER
  yellow: new SignLanguage("Yellow", "1_yellow"),
  continue: new SignLanguage("Continue", "2_continue"),
  green: new SignLanguage("Green", "3_green"),
  black: new SignLanguage("Black", "4_black"),
  gray: new SignLanguage("Gray", "5_gray"),
  library: new SignLanguage("Library", "6_library"),
  cr: new SignLanguage("CR", "7_cr"),
  church: new SignLanguage("Church", "8_church"),
  hospital: new SignLanguage("Hospital", "9_hospital"),
  home: new SignLanguage("Home", "10_home"),
  tomorrow: new SignLanguage("Tomorrow", "11_tomorrow"),
  feelings: new SignLanguage("Feelings", "12_feelings"),
  sad: new SignLanguage("Sad", "13_sad"),
  happy: new SignLanguage("Happy", "14_happy"),
  sick: new SignLanguage("Sick", "15_sick"),
  sister: new SignLanguage("Sister", "16_sister"),
  relatives: new SignLanguage("Relatives", "17_relatives"),
  grandpa: new SignLanguage("Grandpa", "18_grandpa"),
  father: new SignLanguage("Father", "19_father"),
  today: new SignLanguage("Today", "20_today"),

  //? INTERMEDIATE
  my_favorite_color_is_green: new SignLanguage(
    "My favorite color is green.",
    "1_my_favorite_color_is_green.mp4"
  ),
  what_color_do_you_want: new SignLanguage(
    "What color do you want?",
    "2_what_color_do_you_want.mp4"
  ),
  whats_the_color_of_the_shoes: new SignLanguage(
    "What is the color of the shoes?",
    "3_whats_the_color_of_the_shoes.mp4"
  ),
  whats_the_color_of_the_thsirt: new SignLanguage(
    "What is the color of the T-shirt?",
    "4_whats_the_color_of_the_thsirt.mp4"
  ),
  are_you_okay: new SignLanguage("Are you okay?", "5_are_you_okay.mp4"),
  im_excited: new SignLanguage("I'm excited!", "6_im_excited.mp4"),
  what_happened: new SignLanguage("What happened?", "7_what_happened.mp4"),
  where_does_it_hurt: new SignLanguage(
    "Where does it hurt?",
    "8_where_does_it_hurt.mp4"
  ),
  why_are_you_sad: new SignLanguage(
    "Why are you sad?",
    "9_why_are_you_sad.mp4"
  ),
  are_your_parents_strict: new SignLanguage(
    "Are your parents strict?",
    "10_are_your_parents_strict.mp4"
  ),
  call_your_sister_now: new SignLanguage(
    "Call your sister now.",
    "11_call_your_sister_now.mp4"
  ),
  how_are_your_parents: new SignLanguage(
    "How are your parents?",
    "12_how_are_your_parents.mp4"
  ),
  my_family_consists_of_six: new SignLanguage(
    "My family consists of six.",
    "13_my_family_consists_of_six.mp4"
  ),
  where_is_your_brother: new SignLanguage(
    "Where is your brother?",
    "14_where_is_your_brother.mp4"
  ),
  can_you_help_me: new SignLanguage(
    "Can you help me?",
    "15_can_you_help_me.mp4"
  ),
  nice_to_meet_you: new SignLanguage(
    "Nice too meet you!",
    "16_nice_to_meet_you.mp4"
  ),
  see_you_later: new SignLanguage("See you later.", "17_see_you_later.mp4"),
  what_time_is_it: new SignLanguage(
    "What time is it?",
    "18_what_time_is_it.mp4"
  ),
  ill_make_breakfast: new SignLanguage(
    "I will make breakfast.",
    "19_ill_make_breakfast.mp4"
  ),
  where_are_you_going: new SignLanguage(
    "Where are you going?",
    "20_where_are_you_going.mp4"
  ),
};
