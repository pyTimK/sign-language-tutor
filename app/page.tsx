"use client";

import "react-toastify/dist/ReactToastify.css";
import ConstantsWrapper from "./wrappers/ConstantsWrapper";
import { twMerge } from "tailwind-merge";
import myFonts, { defaultFontClass } from "@/styles/fonts";

export default function Home() {
  return (
    <div className={twMerge("w-full h-full", myFonts, defaultFontClass)}>
      <ConstantsWrapper />
    </div>
  );
}
