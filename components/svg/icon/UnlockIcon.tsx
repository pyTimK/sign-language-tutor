import { motion } from "framer-motion";
import { MouseEventHandler } from "react";

interface UnlockIconProps {
  onClick?: MouseEventHandler<SVGSVGElement>;
  size?: number;
}

const UnlockIcon: React.FC<UnlockIconProps> = ({ onClick, size = 35 }) => (
  <motion.svg
    onClick={onClick}
    className="cursor-pointer"
    whileTap={{ scale: 0.8 }}
    width={size}
    viewBox="0 0 73 73"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.7653 22.9804C18.7653 13.203 26.6914 5.27689 36.4688 5.27689C44.7145 5.27689 51.6492 10.9164 53.6145 18.5526C53.9628 19.9053 55.3417 20.7196 56.6942 20.3715C58.0471 20.0233 58.8611 18.6445 58.5131 17.2919C55.9864 7.47516 47.0784 0.21875 36.4688 0.21875C23.8979 0.21875 13.7071 10.4095 13.7071 22.9804V27.3734C12.9422 27.4272 12.2213 27.4972 11.5431 27.5884C8.50783 27.9965 5.95222 28.8695 3.92249 30.8991C1.89276 32.9291 1.01976 35.4844 0.611668 38.5197C0.218617 41.4433 0.218684 45.1603 0.218752 49.772V50.1422C0.218684 54.7539 0.218617 58.471 0.611668 61.3946C1.01976 64.4298 1.89276 66.9852 3.92249 69.0148C5.95222 71.0448 8.50783 71.9179 11.5431 72.3259C14.4666 72.7187 18.1837 72.7187 22.7954 72.7187H50.1422C54.7539 72.7187 58.471 72.7187 61.3946 72.3259C64.4298 71.9179 66.9852 71.0448 69.0152 69.0148C71.0448 66.9852 71.9179 64.4298 72.3259 61.3946C72.7187 58.471 72.7187 54.7539 72.7187 50.1422V49.772C72.7187 45.1603 72.7187 41.4433 72.3259 38.5197C71.9179 35.4844 71.0448 32.9291 69.0152 30.8991C66.9852 28.8695 64.4298 27.9965 61.3946 27.5884C58.471 27.1954 54.7539 27.1954 50.1422 27.1955H22.7954C21.3672 27.1955 20.0248 27.1955 18.7653 27.2071V22.9804ZM7.49913 34.4758C8.43239 33.5424 9.74272 32.9341 12.2171 32.6013C14.7642 32.259 18.14 32.2536 22.9804 32.2536H49.9571C54.7974 32.2536 58.1732 32.259 60.7205 32.6013C63.1949 32.9341 64.505 33.5424 65.4384 34.4758C66.3718 35.4092 66.9801 36.7193 67.3129 39.1937C67.6552 41.741 67.6606 45.1168 67.6606 49.9571C67.6606 54.7974 67.6552 58.1732 67.3129 60.7205C66.9801 63.1949 66.3718 64.505 65.4384 65.4384C64.505 66.3718 63.1949 66.9801 60.7205 67.3129C58.1732 67.6552 54.7974 67.6606 49.9571 67.6606H22.9804C18.14 67.6606 14.7642 67.6552 12.2171 67.3129C9.74272 66.9801 8.43239 66.3718 7.49913 65.4384C6.56587 64.505 5.95738 63.1949 5.62472 60.7205C5.28225 58.1732 5.27689 54.7974 5.27689 49.9571C5.27689 45.1168 5.28225 41.741 5.62472 39.1937C5.95738 36.7193 6.56587 35.4092 7.49913 34.4758Z"
      fill="#FFFFFFAA"
    />
  </motion.svg>
);

export default UnlockIcon;
