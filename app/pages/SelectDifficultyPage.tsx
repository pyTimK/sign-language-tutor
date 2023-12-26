import PageLayout from "@/components/custom/PageLayout";
import MyButton from "@/components/templates/MyButton";
import { MouseEvent, useContext } from "react";
import { FHContext } from "../wrappers/FHWrapper";
import { PageWrapperContext, Pages } from "../wrappers/PageWrapper";
import { Difficulty, MyUser } from "@/classes/MyUser";
import BackButton from "@/components/custom/BackButton";

interface SelectDifficultyPageProps {}

const SelectDifficultyPage: React.FC<SelectDifficultyPageProps> = ({}) => {
  const { myUser } = useContext(FHContext);
  const { setPage } = useContext(PageWrapperContext);

  const selectDifficulty = (difficulty: Difficulty) => {
    if (!myUser) return;
    myUser.difficulty = difficulty;
    setPage(Pages.Level);
  };

  function selectBasic() {
    selectDifficulty("beginner");
  }

  function selectIntermediate() {
    selectDifficulty("intermediate");
  }

  function back() {
    setPage(Pages.NameInput);
  }

  return (
    <PageLayout
      onKeyUp={{ b: selectBasic, i: selectIntermediate, Escape: back }}
    >
      <p className="font-jso text-7xl text-center mb-24">HI {myUser?.name}!</p>
      <p className="text-3xl font-inter mb-20">Learn Sign Language Now!</p>
      <p className="text-xl font-inter mb-20 text-zinc-500">
        What level do you want to learn?
      </p>

      <div className="flex gap-10">
        <div className="flex flex-col items-center gap-5">
          <MyButton
            type="submit"
            label="BASIC"
            width={250}
            className="bg-blue"
            onClick={(e) => {
              e.preventDefault();
              selectBasic();
            }}
          />
          <p className="text-xl font-semibold">Press B</p>
        </div>
        <div className="flex flex-col items-center gap-5">
          <MyButton
            type="submit"
            label="INTERMEDIATE"
            width={250}
            className="bg-red"
            onClick={(e) => {
              e.preventDefault();
              selectIntermediate();
            }}
          />
          <p className="text-xl font-semibold">Press I</p>
        </div>
      </div>
      <BackButton onClick={back} />
    </PageLayout>
  );
};

export default SelectDifficultyPage;
