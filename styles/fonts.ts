import { Inter, Julius_Sans_One, Outfit, Lekton } from "next/font/google";

//? JSO
const juliusSansOneFont = Julius_Sans_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-jso",
});

//? INTER
const interFontClass = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

//? OUTFIT
const outfitFontClass = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

//? LEKTON - for numbers
const lektonFontClass = Lekton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-lekton",
});

const myFonts = `${juliusSansOneFont.variable} ${interFontClass.variable} ${outfitFontClass.variable} ${lektonFontClass.variable}`;
export default myFonts;

export const defaultFontClass = outfitFontClass.className;
