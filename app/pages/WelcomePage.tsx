import Logo from "@/components/custom/Logo";
import PageLayout from "@/components/custom/PageLayout";
import MyButton from "@/components/templates/MyButton";
import {
  LegacyRef,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { PageWrapperContext, Pages } from "../wrappers/PageWrapper";
import { FHContext } from "../wrappers/FHWrapper";
import Webcam, { WebcamProps } from "react-webcam";
import { Socket, io } from "socket.io-client";
interface WelcomePageProps {}

const videoConstraints = {
  width: 640,
  height: 480,
  facingMode: "user",
};

let socket: Socket | undefined;

const WelcomePage: React.FC<WelcomePageProps> = ({}) => {
  const { myUser } = useContext(FHContext);
  const { setPage } = useContext(PageWrapperContext);
  const webcamRef = useRef<Webcam | null>(null);
  const [imageData, setImageData] = useState(null);

  const sendPicture = (img: string, action: string) => {
    socket?.emit("chat", { img, action });
  };

  useEffect(() => {
    socket = io("http://localhost:5000");

    socket.on("chat", (chat) => {
      console.log(chat);
      if (chat && chat.image) setImageData(chat.image);
      capture();
    });

    // when component unmounts, disconnect
    return () => {
      socket?.disconnect();
    };
  }, []);

  function goToQuizBeginner() {
    if (!myUser) return;
    myUser.difficulty = "beginner";
    myUser.generateQuiz();
    setPage(Pages.Question);
  }

  function goToQuizIntermediate() {
    if (!myUser) return;
    myUser.difficulty = "intermediate";
    myUser.generateQuiz();
    setPage(Pages.Question);
  }

  function goToNameInputPage() {
    setPage(Pages.NameInput);
  }

  const capture = useCallback(() => {
    if (!webcamRef.current) return;
    const imageSrc = webcamRef.current.getScreenshot();
    if (!imageSrc) return;
    sendPicture(imageSrc, "1_yellow");
    // sendMessage(imageSrc);
    // myFetch(
    //   "http://localhost:5000",
    //   "check_if_performed",
    //   `action=${"1_yellow"}`,
    //   "POST",
    //   { img: imageSrc }
    // )
    //   .then((res) => {
    //     console.log(res);
    //     setImageData(res.image);
    //     capture();
    //     // const performed = Boolean(res.action_found);
    //     // console.log(`PERFORMED: ${performed}`);
    //     // myUser?.quizCorrects.push(performed);
    //     // setPage(Pages.Corrrect);
    //   })
    //   .catch((err) => {
    //     console.log(`PERFORMED err: ${err}`);
    //   });
  }, [webcamRef]);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     capture();
  //   }, 300); // Adjust the interval based on your requirements (e.g., 1000 milliseconds for 1 second).

  //   return () => clearInterval(intervalId);
  // }, []);

  return (
    <PageLayout
      onKeyUp={{
        Enter: goToNameInputPage,
        q: goToQuizBeginner,
        w: goToQuizIntermediate,
      }}
    >
      <div className="flex flex-col gap-48 items-center justify-center">
        <div className="flex flex-col gap-14 items-center">
          <Logo size={150} />
          <Webcam
            ref={webcamRef}
            videoConstraints={videoConstraints}
            screenshotFormat="image/jpeg"
            audio={false}
          />
          <img
            src={`data:image/jpeg;base64,${imageData}`} // Adjust the src based on your image data format.
            alt="Webcam Stream"
          />
          <p className="font-jso text-5xl text-center">
            SIGN LANGUAGE <br /> TUTOR
          </p>
        </div>
        <MyButton
          label="START"
          width={150}
          onClick={capture}
          // onClick={goToNameInputPage}
          // onClick={() => setPage(Pages.NameInput)}
        />
      </div>
    </PageLayout>
  );
};

export default WelcomePage;
