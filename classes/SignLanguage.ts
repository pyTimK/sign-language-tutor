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
    "1_my_favorite_color_is_green"
  ),
  what_color_do_you_want: new SignLanguage(
    "What color do you want?",
    "2_what_color_do_you_want"
  ),
  whats_the_color_of_the_shoes: new SignLanguage(
    "What is the color of the shoes?",
    "3_whats_the_color_of_the_shoes"
  ),
  whats_the_color_of_the_thsirt: new SignLanguage(
    "What is the color of the T-shirt?",
    "4_whats_the_color_of_the_thsirt"
  ),
  are_you_okay: new SignLanguage("Are you okay?", "5_are_you_okay"),
  im_excited: new SignLanguage("I'm excited!", "6_im_excited"),
  what_happened: new SignLanguage("What happened?", "7_what_happened"),
  where_does_it_hurt: new SignLanguage(
    "Where does it hurt?",
    "8_where_does_it_hurt"
  ),
  why_are_you_sad: new SignLanguage("Why are you sad?", "9_why_are_you_sad"),
  are_your_parents_strict: new SignLanguage(
    "Are your parents strict?",
    "10_are_your_parents_strict"
  ),
  call_your_sister_now: new SignLanguage(
    "Call your sister now.",
    "11_call_your_sister_now"
  ),
  how_are_your_parents: new SignLanguage(
    "How are your parents?",
    "12_how_are_your_parents"
  ),
  my_family_consists_of_six: new SignLanguage(
    "My family consists of six.",
    "13_my_family_consists_of_six"
  ),
  where_is_your_brother: new SignLanguage(
    "Where is your brother?",
    "14_where_is_your_brother"
  ),
  can_you_help_me: new SignLanguage("Can you help me?", "15_can_you_help_me"),
  nice_to_meet_you: new SignLanguage(
    "Nice to meet you!",
    "16_nice_to_meet_you"
  ),
  see_you_later: new SignLanguage("See you later.", "17_see_you_later"),
  what_time_is_it: new SignLanguage("What time is it?", "18_what_time_is_it"),
  ill_make_breakfast: new SignLanguage(
    "I will make breakfast.",
    "19_ill_make_breakfast"
  ),
  where_are_you_going: new SignLanguage(
    "Where are you going?",
    "20_where_are_you_going"
  ),
};
