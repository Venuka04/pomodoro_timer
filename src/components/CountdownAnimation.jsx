import React, { useContext } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { SettingsContext } from "../context/SettingsContext";

const CountdownAnimation = ({ timer, animate }) => {
  const { stopTimer } = useContext(SettingsContext);

  return (
    <CountdownCircleTimer
      key={timer}
      isPlaying={animate}
      duration={timer * 60}
      colors={["#010018", "#006005", "#ffc400", "#ff6a00", "#ff0000"]} //customize colors
      colorsTime={[timer * 60, timer * 45, timer * 30, timer * 15, timer * 0]} //customize time duration of colors
      strokeWidth={8}
      size={240}
      trailColor="#ffffff"
      onComplete={stopTimer}
    >
      {({ remainingTime }) => {
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;
        return (
          <div style={{ fontSize: "48px", color: "#fff" }}>
            {`${minutes.toString().padStart(2, "0")}:${seconds
              .toString()
              .padStart(2, "0")}`}
          </div>
        );
      }}
    </CountdownCircleTimer>
  );
};

export default CountdownAnimation;
