import BackButton from "@/components/custom/BackButton";
import PageLayout from "@/components/custom/PageLayout";
import MyButton from "@/components/templates/MyButton";
import { useContext } from "react";
import { PageWrapperContext, Pages } from "../wrappers/PageWrapper";
import Confetti from "@/components/custom/Confetti";
import MyFlip from "@/components/templates/MyFlip";
import { FHContext } from "../wrappers/FHWrapper";

interface TutorialEndPageProps {}

const TutorialEndPage: React.FC<TutorialEndPageProps> = ({}) => {
  const { myUser } = useContext(FHContext);
  const { setPage } = useContext(PageWrapperContext);

  return (
    <PageLayout>
      <p className="font-jso text-8xl text-center mb-8">CONGRATULATIONS!!!</p>
      <div className="flex gap-32 items-center justify-around mb-48">
        <Confetti size={100} />
        <p className="text-4xl font-inter translate-y-6">
          You finished all 20 levels
        </p>
        <MyFlip>
          <Confetti size={100} />
        </MyFlip>
      </div>
      <p className="text-2xl font-inter mb-8 text-zinc-500">
        Test my Sign Language Knowledge now
      </p>

      <div className="flex gap-10">
        <MyButton
          type="submit"
          label="PROCEED TO QUIZ"
          width={500}
          onClick={(e) => {
            myUser?.generateQuiz();
            setPage(Pages.Question);
          }}
        />
      </div>
      <BackButton onClick={() => setPage(Pages.NameInput)} />
    </PageLayout>
  );
};

export default TutorialEndPage;
