import PageLayout from "@/components/custom/PageLayout";
import MyButton from "@/components/templates/MyButton";
import { MouseEvent, useContext } from "react";
import { FHContext } from "../wrappers/FHWrapper";
import { PageWrapperContext, Pages } from "../wrappers/PageWrapper";
import { Difficulty, MyUser } from "@/classes/MyUser";
import BackButton from "@/components/custom/BackButton";

interface SelectDifficultyPageProps {}

const SelectDifficultyPage: React.FC<SelectDifficultyPageProps> = ({}) => {
  const { myUser, setMyUser } = useContext(FHContext);
  const { setPage } = useContext(PageWrapperContext);

  const selectDifficulty = (e: MouseEvent, difficulty: Difficulty) => {
    e.preventDefault();

    if (!myUser) return;

    setMyUser(
      new MyUser(
        myUser.name,
        myUser.tutorialLevelNum,
        myUser.quizLevelNum,
        myUser.score,
        difficulty
      )
    );

    setPage(Pages.Level);
  };
  return (
    <PageLayout>
      <p className="font-jso text-7xl text-center mb-24">HI {myUser?.name}!</p>
      <p className="text-3xl font-inter mb-20">Learn Sign Language Now!</p>
      <p className="text-xl font-inter mb-20 text-zinc-500">
        What level do you want to learn?
      </p>

      <div className="flex gap-10">
        <MyButton
          type="submit"
          label="BASIC"
          width={250}
          className="bg-blue"
          onClick={(e) => selectDifficulty(e, "beginner")}
        />
        <MyButton
          type="submit"
          label="INTERMEDIATE"
          width={250}
          className="bg-red"
          onClick={(e) => selectDifficulty(e, "intermediate")}
        />
      </div>
      <BackButton onClick={() => setPage(Pages.NameInput)} />
    </PageLayout>
  );
};

export default SelectDifficultyPage;
