import { MyUser } from "@/classes/MyUser";
import { Dispatch, SetStateAction, createContext, useState } from "react";
import PageWrapper from "./PageWrapper";

//? ----------------------
//? FIRESTORE DATA OBJECTS
//? ----------------------

export const FHContext = createContext({
  myUser: {} as MyUser | null,
  setMyUser: {} as Dispatch<SetStateAction<MyUser>>,
});

interface FHWrapperProps {}

const FHWrapper: React.FC<FHWrapperProps> = ({}) => {
  //! USER
  // const [user, loadingUser] = useUser();

  // //! QUASAR
  // const [adminSettings, loadingAdminSettings] = useFHWatch(
  //   FH.AdminSettings,
  //   "settings"
  // );

  //! MY USER
  const [myUser, setMyUser] = useState(MyUser.fromNull());

  //! LOADING
  // const loading = useLoading(
  //   loadingAdminSettings,
  //   loadingUser,
  //   loadingMyUser,
  //   loadingDevice
  // );

  // console.log("loading", loading);
  // console.log("loadingAdminSettings", loadingAdminSettings);
  // console.log("loadingUser", loadingUser);
  // console.log("loadingMyUser", loadingMyUser);
  // console.log("loadingDevice", loadingDevice);

  //! PAGES
  // if (loading) return <div className="bg-red w-screen h-screen"></div>;
  // if (adminSettings === null) return <QuasarPage />;
  // if (adminSettings?.quasar) return <QuasarPage />;
  // if (user === null) return <SignInPage />;
  // if (myUser === null) return <RegisterPage user={user} />;
  return (
    <FHContext.Provider value={{ myUser, setMyUser }}>
      <PageWrapper />
    </FHContext.Provider>
  );
};

export default FHWrapper;
