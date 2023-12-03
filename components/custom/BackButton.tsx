import { PageWrapperContext, Pages } from "@/app/wrappers/PageWrapper";
import MyButton from "../templates/MyButton";
import { useContext } from "react";

interface BackButtonProps {
  page: Pages;
}

const BackButton: React.FC<BackButtonProps> = ({ page }) => {
  const { setPage } = useContext(PageWrapperContext);
  return (
    <div className="absolute top-10 left-10">
      <MyButton
        label="BACK"
        width={100}
        className="bg-violet"
        classNameText="text-sm"
        noShadow
        outlined
        pY={0.4}
        onClick={(e) => {
          e.preventDefault();
          setPage(page);
        }}
      />
    </div>
  );
};

export default BackButton;
