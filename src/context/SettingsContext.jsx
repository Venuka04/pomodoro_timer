import { useState, createContext } from "react";

export const SettingsContext = createContext();

const SettingsContextProvider = (props) => {
  const [pomodoro, setPomodoro] = useState(0);
  const [executing, setExecuting] = useState({
    work: 25,
    short: 5,
    long: 15,
    active: "work", // Default active timer
  });
  const [startAnimate, setStartAnimate] = useState(false);

  function startTimer() {
    setStartAnimate(true);
  }

  function pauseTimer() {
    setStartAnimate(false);
  }

  function stopTimer() {
    setStartAnimate(false);
  }

  const SettingsBtn = () => {
    setExecuting({});
    setPomodoro(0);
  };

  function setCurrentTimer(active_state) {
    updateExecute({
      ...executing,
      active: active_state,
    });
    setTimerTime(executing);
  }

  const updateExecute = (updatedSettings) => {
    setExecuting(updatedSettings);
    setTimerTime(updatedSettings);
  };

  const setTimerTime = (evaluate) => {
    switch (evaluate.active) {
      case "work":
        setPomodoro(evaluate.work);
        break;

      case "short":
        setPomodoro(evaluate.short);
        break;

      case "long":
        setPomodoro(evaluate.long);
        break;

      default:
        setPomodoro(0);
        break;
    }
  };

  const children = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    return `${minutes}:${seconds}`;
  };

  return (
    <SettingsContext.Provider
      value={{
        stopTimer,
        pomodoro,
        executing,
        updateExecute,
        startAnimate,
        startTimer,
        pauseTimer,
        children,
        SettingsBtn,
        setCurrentTimer,
      }}
    >
      {props.children}
    </SettingsContext.Provider>
  );
};

export default SettingsContextProvider;
