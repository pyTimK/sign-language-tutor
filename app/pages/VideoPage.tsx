import PageLayout from "@/components/custom/PageLayout";
import { PageWrapperContext, Pages } from "../wrappers/PageWrapper";
import { useContext } from "react";
import { FHContext } from "../wrappers/FHWrapper";
import BackButton from "@/components/custom/BackButton";
import LevelText from "@/components/custom/LevelText";
import MyButton from "@/components/templates/MyButton";
import TutorialLevel from "@/classes/TutorialLevel";
import { MyUser } from "@/classes/MyUser";

interface VideoPageProps {}

const VideoPage: React.FC<VideoPageProps> = ({}) => {
  const { myUser, setMyUser } = useContext(FHContext);
  const { setPage } = useContext(PageWrapperContext);
  const level = myUser ? myUser.tutorialLevel + 1 : 0;
  const tutorialLevels =
    myUser?.difficulty === "beginner"
      ? TutorialLevel.LEVELS.BEGINNER
      : TutorialLevel.LEVELS.INTERMEDIATE;
  const tutorialLevel = tutorialLevels[level < 1 ? 1 : level - 1];
  const signLanguage = tutorialLevel.sl;
  const videoName = signLanguage.videoName;
  const videoPath = `videos/${videoName}.mp4`;

  return (
    <PageLayout>
      <div className="flex flex-col mb-20 border rounded-t-3xl bg-yellow">
        <div className="w-full flex items-center justify-center py-2">
          <p className="text-3xl font-inter">“ {signLanguage.phrase} ”</p>
        </div>
        <div className="w-full bg-green">
          <video width="720" height="480" controls>
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
          e.preventDefault();
          setMyUser((myUser) => MyUser.from(myUser, { tutorialLevel: level }));
          setPage(Pages.Level);
        }}
      />

      {/*//! ABSOLUTE */}
      <BackButton page={Pages.SelectLevel} />
      <LevelText text={`LEVEL ${level}`} />
    </PageLayout>
  );
};

export default VideoPage;
