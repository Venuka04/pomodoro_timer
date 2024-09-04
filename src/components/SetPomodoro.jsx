import React, { useState, useContext } from "react";
import Button from "./Button";
import { SettingsContext } from "../context/SettingsContext";

const SetPomodoro = () => {
  const { updateExecute } = useContext(SettingsContext);

  const [newTimer, setNewTimer] = useState({
    work: 25,
    short: 5,
    long: 15,
    active: "work",
  });

  const handleChange = (input) => {
    const { name, value } = input.target;
    setNewTimer({
      ...newTimer,
      [name]: parseFloat(value),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateExecute(newTimer);
  };

  return (
    <div className="form-container">
      <form noValidate onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <input
            className="input"
            name="work"
            onChange={handleChange}
            value={newTimer.work}
          />
          <input
            className="input"
            name="short"
            onChange={handleChange}
            value={newTimer.short}
          />
          <input
            className="input"
            name="long"
            onChange={handleChange}
            value={newTimer.long}
          />
        </div>
        <Button title="Set Timer" />
      </form>
    </div>
  );
};

export default SetPomodoro;
