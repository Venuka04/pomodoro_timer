import { useContext, useEffect } from "react";
import SetPomodoro from "./components/SetPomodoro";
import { SettingsContext } from "./context/SettingsContext";
import Button from "./components/Button";
import CountdownAnimation from "./components/countdownAnimation";

function App() {
  const {
    pomodoro,
    executing,
    setCurrentTimer,
    SettingsBtn,
    startAnimate,
    startTimer,
    pauseTimer,
    updateExecute,
  } = useContext(SettingsContext);

  useEffect(() => {
    updateExecute(executing);
  }, [executing]);

  return (
    <div className="container">
      <h1>Pomodoro Timer</h1>
      <h3>Time to focus!</h3>
      {pomodoro === 0 ? (
        <SetPomodoro />
      ) : (
        <>
          <ul className="labels">
            <li>
              <Button
                title="Work"
                activeClass={executing.active === "work" ? "active-label" : ""}
                _callback={() => setCurrentTimer("work")}
              />
            </li>
            <li>
              <Button
                title="Short Break"
                activeClass={executing.active === "short" ? "active-label" : ""}
                _callback={() => setCurrentTimer("short")}
              />
            </li>
            <li>
              <Button
                title="Long Break"
                activeClass={executing.active === "long" ? "active-label" : ""}
                _callback={() => setCurrentTimer("long")}
              />
            </li>
          </ul>
          <Button title="Settings" _callback={SettingsBtn} />
          <div className="time-container">
            <div className="time-wrapper">
              <CountdownAnimation
                key={pomodoro}
                timer={pomodoro}
                animate={startAnimate}
              >
                {/* Display the time left in the center */}
                {`${Math.floor(pomodoro / 60)
                  .toString()
                  .padStart(2, "0")}:${(pomodoro % 60)
                  .toString()
                  .padStart(2, "0")}`}
              </CountdownAnimation>
            </div>
          </div>
          <div className="button-wrapper">
            <Button
              title="Start"
              activeClass={startAnimate ? "active" : ""}
              _callback={startTimer}
            />
            <Button
              title="Pause"
              activeClass={!startAnimate ? "active" : ""}
              _callback={pauseTimer}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
