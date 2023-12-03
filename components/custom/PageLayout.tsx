interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div
      className="w-screen h-screen flex flex-col items-center justify-center"
      style={{ backgroundImage: "url('images/bg.png')" }}
    >
      {children}
    </div>
  );
};

export default PageLayout;
