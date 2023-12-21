import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Date.scss";

function DatePage() {
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

export default DatePage;
