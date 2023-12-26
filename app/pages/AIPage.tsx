import { LegacyRef, useContext, useEffect, useRef, useState } from "react";
import { FHContext } from "../wrappers/FHWrapper";
import { PageWrapperContext, Pages } from "../wrappers/PageWrapper";
import useModal from "@/hooks/useModal";
import BackModal from "@/components/modals/BackModal";
import LevelText from "@/components/custom/LevelText";
import BackButton from "@/components/custom/BackButton";
import PageLayout from "@/components/custom/PageLayout";
import QuizLevel from "@/classes/QuizLevel";
import myFetch from "@/myfunctions/myFetch";
import CountdownCircle from "@/components/templates/CountdownCircle/CountdownCirle";
import { twMerge } from "tailwind-merge";

interface AIPageProps {}

const AIPage: React.FC<AIPageProps> = ({}) => {
  const { myUser, setMyUser } = useContext(FHContext);
  const { setPage } = useContext(PageWrapperContext);

  const backmodal = useModal();

  const quizLevel = myUser?.getQuizLevel() ?? QuizLevel.DEFAULT_LEVEL;

  const signLanguage = quizLevel.sl;
  const videoName = signLanguage.videoName;

  // const videoPath = `videos/${videoName}.mp4`;
  // const newLevel = quizLevel.level;

  function back() {
    myUser?.resetLevels();
    setPage(Pages.TutorialEnd);
  }

  useEffect(() => {
    myFetch(
      "http://localhost:5000",
      "check_if_performed",
      `action=${videoName}`
    )
      .then((res) => {
        const performed = Boolean(res.action_found);
        console.log(`PERFORMED: ${performed}`);
        myUser?.quizCorrects.push(performed);
        setPage(Pages.Corrrect);
      })
      .catch((err) => {
        console.log(`PERFORMED err: ${err}`);
      });
  }, []);

  return (
    <PageLayout onKeyUp={{ Escape: back }}>
      <p className="font-jso text-3xl text-center mb-4">
        What is the sign language for
      </p>
      <div
        className="flex items-center justify-center py-2 bg-yellow px-5 border"
        style={{
          width: "25rem",
        }}
      >
        <p
          className={twMerge(
            "text-6xl font-outfit text-center",
            myUser?.difficulty === "intermediate" && "text-4xl"
          )}
        >
          {signLanguage.phrase}
        </p>
      </div>

      <CountdownCircle radius={100} duration={3} strokeWidth={20} />

      {/* <div>
        <img
          ref={videoRef}
          // src={`http://localhost:5000/check_if_performed?action=${videoName}`}
          alt="Video"
        />
      </div> */}

      {/* <div>
        <video ref={videoRef} width="640" height="480"></video>
      </div> */}

      {/*//! ABSOLUTE */}
      <BackButton onClick={backmodal.open} />
      <LevelText text={`QUESTION ${quizLevel.level}`} />

      {/*//! MODAL */}
      <BackModal modal={backmodal} onBack={back} />
    </PageLayout>
  );
};

export default AIPage;
