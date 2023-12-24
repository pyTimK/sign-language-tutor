import PageLayout from "@/components/custom/PageLayout";
import { PageWrapperContext, Pages } from "../wrappers/PageWrapper";
import { useContext } from "react";
import { FHContext } from "../wrappers/FHWrapper";
import BackButton from "@/components/custom/BackButton";
import LevelText from "@/components/custom/LevelText";
import MyButton from "@/components/templates/MyButton";
import TutorialLevel from "@/classes/TutorialLevel";
import { MyUser } from "@/classes/MyUser";
import useModal from "@/hooks/useModal";
import MyModal from "@/components/templates/MyModal";
import BackModal from "@/components/modals/BackModal";

interface VideoPageProps {}

const VideoPage: React.FC<VideoPageProps> = ({}) => {
  const { myUser, setMyUser } = useContext(FHContext);
  const { setPage } = useContext(PageWrapperContext);

  const backmodal = useModal();

  const tutorialLevel =
    myUser?.getTutorialLevel() ?? TutorialLevel.DEFAULT_LEVEL;

  const signLanguage = tutorialLevel.sl;
  const videoName = signLanguage.videoName;
  const videoPath = `videos/${videoName}.mp4`;
  const newLevel = tutorialLevel.level;

  return (
    <PageLayout>
      <div className="flex flex-col mb-20 border rounded-t-3xl bg-yellow">
        <div className="w-full flex items-center justify-center py-2">
          <p className="text-3xl font-inter">“ {signLanguage.phrase} ”</p>
        </div>
        <div className="w-full bg-green">
          <video width="720" height="480" controls autoPlay loop>
            <source src={videoPath} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <p className="text-xl font-inter mb-5 text-zinc-500">
        Would you like to proceed to the next level?
      </p>
      <MyButton
        label="PROCEED"
        width={200}
        onClick={(e) => {
          if (!myUser) return;

          e.preventDefault();
          setMyUser(
            new MyUser(
              myUser.name,
              newLevel,
              myUser.quizLevelNum,
              myUser.score,
              myUser.difficulty
            )
          );

          if (newLevel >= myUser.getTutorialLevels().length) {
            setPage(Pages.TutorialEnd);
          } else {
            setPage(Pages.Level);
          }
        }}
      />

      {/*//! ABSOLUTE */}
      <BackButton onClick={backmodal.open} />
      <LevelText text={`LEVEL ${tutorialLevel.level}`} />

      {/*//! MODAL */}
      <BackModal
        modal={backmodal}
        onBack={() => {
          myUser?.resetLevels();
          setPage(Pages.SelectDiffiulty);
        }}
      />
    </PageLayout>
  );
};

export default VideoPage;
