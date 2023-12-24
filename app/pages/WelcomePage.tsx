import Logo from "@/components/custom/Logo";
import PageLayout from "@/components/custom/PageLayout";
import MyButton from "@/components/templates/MyButton";
import { useContext } from "react";
import { PageWrapperContext, Pages } from "../wrappers/PageWrapper";
import { FHContext } from "../wrappers/FHWrapper";

interface WelcomePageProps {}

const WelcomePage: React.FC<WelcomePageProps> = ({}) => {
  const { myUser } = useContext(FHContext);
  const { setPage } = useContext(PageWrapperContext);
  return (
    <PageLayout>
      <div className="flex flex-col gap-48 items-center justify-center">
        <div className="flex flex-col gap-14 items-center">
          <Logo size={150} />
          <p className="font-jso text-5xl text-center">
            SIGN LANGUAGE <br /> TUTOR
          </p>
        </div>
        <MyButton
          label="START"
          width={150}
          onClick={() => {
            if (myUser) myUser.difficulty = "intermediate";
            myUser?.generateQuiz();
            setPage(Pages.AI);
          }}
          // onClick={() => setPage(Pages.NameInput)}
        />
      </div>
    </PageLayout>
  );
};

export default WelcomePage;
