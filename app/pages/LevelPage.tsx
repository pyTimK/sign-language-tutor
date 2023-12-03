import { useContext, useEffect } from "react";
import { FHContext } from "../wrappers/FHWrapper";
import PageLayout from "@/components/custom/PageLayout";
import { PageWrapperContext, Pages } from "../wrappers/PageWrapper";

interface LevelPageProps {}

const LevelPage: React.FC<LevelPageProps> = ({}) => {
  const { myUser } = useContext(FHContext);
  const { setPage } = useContext(PageWrapperContext);
  const level = myUser ? myUser.tutorialLevel + 1 : 0;

  // go to another page after 5 seconds
  useEffect(() => {
    setTimeout(() => {
      setPage(Pages.Video);
    }, 3000);
  }, []);

  return (
    <PageLayout>
      <p className="font-jso text-7xl text-center">LEVEL {level}</p>
    </PageLayout>
  );
};

export default LevelPage;
