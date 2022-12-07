import React from "react";
import "../styles/Timetable.css";

export default function Timetable() {
  return (
    <div className="timetableContainer">
      <div className="title-bar">
        <div className="title-bar-text">Timetable</div>
      </div>
      <div className="timetable">
        <div className="timeContainer">
          <div>7pm</div>
          <div>P. Velutina vs S.HIrsutum</div>
          <div>7:30pm</div>
          <div>P.Velutina vs C.Versicolor</div>
          <div>8pm</div>
          <div>Daldinia Concentrica vs C.Versicolor</div>
          <div>8:30pm</div>
          <div>Daldinia Concentrica vs S.HIrsitum</div>
          <div>9pm</div>
          <div>S.Hirsitum vs P.Velutina</div>
          <div>9:30pm</div>
          <div>Daldinia Concentrica vs P.Velutina</div>
          <div>10pm</div>
          <div>S.Hirsitum vs C.Versicolor</div>
        </div>
      </div>
    </div>
  );
}
