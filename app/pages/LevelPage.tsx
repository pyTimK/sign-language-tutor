import { useContext, useEffect } from "react";
import { FHContext } from "../wrappers/FHWrapper";
import PageLayout from "@/components/custom/PageLayout";
import { PageWrapperContext, Pages } from "../wrappers/PageWrapper";

interface LevelPageProps {}

const LevelPage: React.FC<LevelPageProps> = ({}) => {
  const { myUser } = useContext(FHContext);
  const { setPage } = useContext(PageWrapperContext);
  const level = myUser ? myUser.tutorialLevelNum + 1 : 0;

  function back() {
    myUser?.resetLevels();
    setPage(Pages.SelectDiffiulty);
  }

  // go to another page after 5 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      setPage(Pages.Video);
    }, 2200);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <PageLayout onKeyUp={{ Escape: back }}>
      <p className="font-jso text-7xl text-center">LEVEL {level}</p>
    </PageLayout>
  );
};

export default LevelPage;
