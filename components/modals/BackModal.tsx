import useModal from "@/hooks/useModal";
import MyModal from "../templates/MyModal";
import MyButton from "../templates/MyButton";

interface BackModalProps {
  modal: ReturnType<typeof useModal>;
  onBack: () => void;
}

const BackModal: React.FC<BackModalProps> = ({ modal, onBack }) => {
  return (
    <MyModal useModal={modal} title="Unlock">
      <div className="flex flex-col items-center gap-5">
        <p className="text-smooth_black text-center">
          Are you sure you go back?
        </p>
        <div className="flex gap-5">
          <MyButton
            type="button"
            label="No"
            outlined
            className="rounded-full"
            pY={0.2}
            onClick={modal.close}
          />
          <MyButton
            type="button"
            label="Yes"
            className="rounded-full bg-red"
            pY={0.2}
            onClick={() => {
              modal.close();
              if (onBack) onBack();
            }}
          />
        </div>
      </div>
    </MyModal>
  );
};

export default BackModal;
