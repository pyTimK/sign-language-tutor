import MyButton from "../templates/MyButton";

interface BackButtonProps {
  onClick?: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({ onClick }) => {
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
          if (onClick) onClick();
        }}
      />
    </div>
  );
};

export default BackButton;
