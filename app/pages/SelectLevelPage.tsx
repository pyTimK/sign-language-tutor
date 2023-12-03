import PageLayout from "@/components/custom/PageLayout";
import MyButton from "@/components/templates/MyButton";
import { MouseEvent, useContext } from "react";
import { FHContext } from "../wrappers/FHWrapper";
import { PageWrapperContext, Pages } from "../wrappers/PageWrapper";
import { Difficulty, MyUser } from "@/classes/MyUser";
import BackButton from "@/components/custom/BackButton";

interface SelectLevelPageProps {}

const SelectLevelPage: React.FC<SelectLevelPageProps> = ({}) => {
  const { myUser, setMyUser } = useContext(FHContext);
  const { setPage } = useContext(PageWrapperContext);

  const selectLevel = (e: MouseEvent, level: Difficulty) => {
    e.preventDefault();

    setMyUser((myUser) => MyUser.from(myUser, { difficulty: level }));

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
          onClick={(e) => selectLevel(e, "beginner")}
        />
        <MyButton
          type="submit"
          label="INTERMEDIATE"
          width={250}
          className="bg-red"
          onClick={(e) => selectLevel(e, "intermediate")}
        />
      </div>
      <BackButton page={Pages.NameInput} />
    </PageLayout>
  );
};

export default SelectLevelPage;
