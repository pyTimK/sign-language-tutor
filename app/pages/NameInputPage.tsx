import Logo from "@/components/custom/Logo";
import PageLayout from "@/components/custom/PageLayout";
import MyButton from "@/components/templates/MyButton";
import MyInput from "@/components/templates/MyInput";
import { useInputField } from "@/hooks/useInputField";
import { useContext, useEffect } from "react";
import { FHContext } from "../wrappers/FHWrapper";
import { MyUser } from "@/classes/MyUser";
import { PageWrapperContext, Pages } from "../wrappers/PageWrapper";

interface NameInputPageProps {}

const NameInputPage: React.FC<NameInputPageProps> = ({}) => {
  const { setMyUser } = useContext(FHContext);
  const { setPage } = useContext(PageWrapperContext);
  const nameInput = useInputField((name) => [
    [!name, "Please enter your name"],
  ]);

  useEffect(() => {
    nameInput.ref.current?.focus();
  }, []);

  return (
    <PageLayout>
      <p className="font-jso text-5xl text-center mb-32">
        WHAT&apos;S YOUR NAME?
      </p>
      <form
        className="flex flex-col gap-32 items-center"
        onSubmit={(e) => {
          e.preventDefault();

          if (nameInput.verify()) {
            const name = nameInput.getValue()!;
            const myUser = new MyUser(name, 0, 0, 0, "beginner");
            setMyUser(myUser);
            setPage(Pages.SelectDiffiulty);
          }
        }}
      >
        <MyInput
          inputField={nameInput}
          width={2000}
          className="text-center text-3xl"
        />
        <MyButton type="submit" label="NEXT" width={150} />
      </form>
    </PageLayout>
  );
};

export default NameInputPage;
