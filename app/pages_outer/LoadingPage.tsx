import { Colors } from "@/styles/styles";
import React, { useState } from "react";
import { RingLoader } from "react-spinners";

interface LoadingPageProps {
  hideIcon?: boolean;
}

const LoadingPage: React.FC<LoadingPageProps> = ({ hideIcon = false }) => {
  return (
    <div className="fixed top-0 left-0 flex items-center justify-center h-screen w-screen z-10 bg-white select-none">
      {!hideIcon && (
        <RingLoader
          color={`${Colors.darker_primary}`}
          loading={true}
          size={150}
        />
      )}
    </div>
  );
};

export default LoadingPage;
