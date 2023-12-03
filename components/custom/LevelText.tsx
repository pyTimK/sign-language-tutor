interface LevelTextProps {
  text: string;
}

const LevelText: React.FC<LevelTextProps> = ({ text }) => {
  return (
    <div className="absolute top-10 right-10">
      <p className="font-jso text-2xl">{text}</p>
    </div>
  );
};

export default LevelText;
