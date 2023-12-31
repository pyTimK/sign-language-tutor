interface FlipInterface {
  type?: "horizontal" | "vertical";
  children: React.ReactNode;
}

const MyFlip: React.FC<FlipInterface> = ({ type = "horizontal", children }) => {
  return (
    <div className={type === "horizontal" ? "scale-x-[-1]" : "scale-y-[-1]"}>
      {children}
    </div>
  );
};

export default MyFlip;
