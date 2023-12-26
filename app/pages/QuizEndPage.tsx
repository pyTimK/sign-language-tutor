import { useContext } from "react";
import { FHContext } from "../wrappers/FHWrapper";
import { PageWrapperContext, Pages } from "../wrappers/PageWrapper";
import PageLayout from "@/components/custom/PageLayout";
import Confetti from "@/components/custom/Confetti";
import MyFlip from "@/components/templates/MyFlip";
import MyButton from "@/components/templates/MyButton";
import BackButton from "@/components/custom/BackButton";

interface QuizEndPageProps {}

const QuizEndPage: React.FC<QuizEndPageProps> = ({}) => {
  const { myUser } = useContext(FHContext);
  const { setPage } = useContext(PageWrapperContext);

  const score = myUser?.quizCorrects.filter((x) => x).length ?? 0;

  function goToWelcomePage() {
    myUser?.resetLevels();
    setPage(Pages.Welcome);
  }

  return (
    <PageLayout onKeyUp={{ Enter: goToWelcomePage }}>
      <p className="font-jso text-7xl text-center mb-8">
        {score > 3 ? "CONGRATULATIONS!!!" : "Better luck next time"}
      </p>
      <div className="flex gap-32 items-center justify-around mb-48">
        <Confetti size={100} />
        <p className="text-4xl font-inter translate-y-6">
          You scored {`${score}/${(myUser?.quizCorrects.length ?? 2) - 1}`}
        </p>
        <MyFlip>
          <Confetti size={100} />
        </MyFlip>
      </div>
      <p className="text-2xl font-inter mb-8 text-zinc-500">
        We hope you learned a word or two
      </p>

      <div className="flex gap-10">
        <MyButton
          type="submit"
          label="HOME"
          width={200}
          onClick={goToWelcomePage}
        />
      </div>
    </PageLayout>
  );
};

export default QuizEndPage;
