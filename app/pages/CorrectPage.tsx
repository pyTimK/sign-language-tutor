import PageLayout from "@/components/custom/PageLayout";
import { useContext, useEffect } from "react";
import { FHContext } from "../wrappers/FHWrapper";
import { twMerge } from "tailwind-merge";
import { PageWrapperContext, Pages } from "../wrappers/PageWrapper";
import { Constants } from "@/classes/Constants";

interface CorrectPageProps {}

const CorrectPage: React.FC<CorrectPageProps> = ({}) => {
  const { myUser } = useContext(FHContext);
  const { setPage } = useContext(PageWrapperContext);
  const isCorrect =
    myUser?.quizCorrects[myUser?.quizCorrects.length - 1] ?? false;

  // go to another page after 5 seconds
  useEffect(() => {
    setTimeout(() => {
      if (myUser) {
        myUser.quizLevelNum++;
        if (myUser.quizLevelNum >= Constants.QUESTIONS_PER_QUIZ) {
          myUser.quizLevelNum = 0;
          setPage(Pages.QuizEnd);
          return;
        }
      }
      setPage(Pages.Question);
    }, 2200);
  }, []);

  return (
    <PageLayout>
      <div
        className={twMerge(
          "flex items-center justify-center px-16 py-8 border",
          isCorrect ? "bg-green" : "bg-red"
        )}
      >
        <p className="text-5xl font-light">{isCorrect ? "CORRECT" : "WRONG"}</p>
      </div>
    </PageLayout>
  );
};

export default CorrectPage;
