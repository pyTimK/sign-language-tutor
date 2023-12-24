import { useContext, useEffect } from "react";
import { FHContext } from "../wrappers/FHWrapper";
import { PageWrapperContext, Pages } from "../wrappers/PageWrapper";
import PageLayout from "@/components/custom/PageLayout";

interface QuestionPageProps {}

const QuestionPage: React.FC<QuestionPageProps> = ({}) => {
  const { myUser } = useContext(FHContext);
  const { setPage } = useContext(PageWrapperContext);
  const level = myUser ? myUser.quizLevelNum + 1 : 0;

  // go to another page after 5 seconds
  useEffect(() => {
    setTimeout(() => {
      setPage(Pages.AI);
    }, 2200);
  }, []);

  return (
    <PageLayout>
      <p className="font-jso text-7xl text-center">QUESTION {level}</p>
    </PageLayout>
  );
};

export default QuestionPage;
