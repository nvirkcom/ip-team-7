import "./Info.scss";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import React, { useState } from "react";

function Info() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const setCurrentDate = () => {
    setSelectedDate(new Date()); // Sets the date to the current date and time
  };

  return (
    <div>
      <button onClick={setCurrentDate}>I'm Here Now</button>
      <div>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
        />
      </div>
    </div>
  );
}

export default Info;
