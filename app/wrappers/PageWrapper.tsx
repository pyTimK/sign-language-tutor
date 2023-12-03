import { Dispatch, SetStateAction, createContext, useState } from "react";
import WelcomePage from "../pages/WelcomePage";
import NameInputPage from "../pages/NameInputPage";
import SelectLevelPage from "../pages/SelectLevelPage";
import LevelPage from "../pages/LevelPage";
import VideoPage from "../pages/VideoPage";
import TutorialEndPage from "../pages/TutorialEndPage";
import QuestionPage from "../pages/QuestionPage";
import AIPage from "../pages/AIPage";
import CorrectPage from "../pages/CorrectPage";
import QuizEndPage from "../pages/QuizEndPage";

//? ----------------------
//? PAGES
//? BOTTOM SHEETS
//? ----------------------

export const enum Pages {
  Welcome,
  NameInput,
  SelectLevel,
  Level,
  Video,
  TutorialEnd,
  Question,
  AI,
  Corrrect,
  QuizEnd,
}

export const PageWrapperContext = createContext({
  page: Pages.Welcome,
  setPage: {} as Dispatch<SetStateAction<Pages>>,
});

interface PageWrapperProps {}

const PageWrapper: React.FC<PageWrapperProps> = ({}) => {
  //! Page
  const [page, setPage] = useState<Pages>(Pages.Welcome);

  return (
    <PageWrapperContext.Provider
      value={{
        page,
        setPage,
      }}
    >
      <div className="bg-bg w-full h-full">
        {page === Pages.Welcome && <WelcomePage />}
        {page === Pages.NameInput && <NameInputPage />}
        {page === Pages.SelectLevel && <SelectLevelPage />}
        {page === Pages.Level && <LevelPage />}
        {page === Pages.Video && <VideoPage />}
        {page === Pages.TutorialEnd && <TutorialEndPage />}
        {page === Pages.Question && <QuestionPage />}
        {page === Pages.AI && <AIPage />}
        {page === Pages.Corrrect && <CorrectPage />}
        {page === Pages.QuizEnd && <QuizEndPage />}
      </div>
    </PageWrapperContext.Provider>
  );
};

export default PageWrapper;
