import { useEffect, useRef } from "react";

interface PageLayoutProps {
  children: React.ReactNode;
  onKeyUp?: Record<string, () => void>;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, onKeyUp }) => {
  const mainDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mainDiv.current?.focus();
  }, []);

  return (
    <div
      className="w-screen h-screen flex flex-col items-center justify-center"
      style={{ backgroundImage: "url('images/bg.png')" }}
      onKeyUp={
        onKeyUp
          ? (e) => {
              if (onKeyUp[e.key]) {
                onKeyUp[e.key]();
              }
            }
          : undefined
      }
      tabIndex={0}
      ref={mainDiv}
    >
      {children}
    </div>
  );
};

export default PageLayout;
