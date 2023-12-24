import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CountdownCircleProps {
  radius: number;
  duration: number; // in seconds
  strokeWidth?: number;
}

const CountdownCircle: React.FC<CountdownCircleProps> = ({
  radius,
  duration,
  strokeWidth = 5,
}) => {
  const size = (radius + strokeWidth) * 2;
  const strokeOffset = Math.floor(2 * radius * 3.14);
  const [countdownTime, setCountdownTime] = useState(duration);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdownTime((prev) => {
        if (prev === 0) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [duration]);

  return (
    <div>
      {countdownTime === 0 ? (
        <p className="text-3xl font-outfit mt-20">Opening camera...</p>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <p className="text-3xl text-zinc-400 mt-10 mb-5">Ready in</p>
          <div
            style={{
              position: "relative",
              width: `${size}px`,
              height: `${size}px`,
              textAlign: "center",
            }}
          >
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <p className="text-7xl font-outfit">{countdownTime}</p>
            </div>
            {/* <div className="">5</div> */}
            <svg
              style={{
                width: `${size}px`,
                height: `${size}px`,
                transform: "rotateY(-180deg) rotateZ(-90deg)",
              }}
            >
              <circle
                r={radius}
                cx={radius + strokeWidth}
                cy={radius + strokeWidth}
                style={{
                  strokeLinecap: "round",
                  strokeWidth: `${strokeWidth}px`,
                  stroke: "#51515155",
                  fill: "none",
                }}
              ></circle>
              <motion.circle
                r={radius}
                cx={radius + strokeWidth}
                cy={radius + strokeWidth}
                initial={{ strokeDashoffset: 0 }}
                animate={{ strokeDashoffset: strokeOffset }}
                transition={{ duration: duration, ease: "linear" }}
                style={{
                  strokeDasharray: `${strokeOffset}px`,
                  strokeLinecap: "round",
                  strokeWidth: `${strokeWidth}px`,
                  stroke: "#1CD122",
                  fill: "none",
                }}
              ></motion.circle>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountdownCircle;
