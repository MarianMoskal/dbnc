import { forwardRef, useState } from "react";
import css from "./Task2.module.css";
import dateSVG from "../../images/date.svg";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function Task2() {
  const [date, setDate] = useState(null);

  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <button
      className={css.date}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      ref={ref}
    >
      <img className={css.dateSvg} src={dateSVG} alt="date" width="18" />
      {value}
    </button>
  ));

  return (
    <div className={css.container}>
      <form className={css.form}>
        <label className={css.nameLabel} htmlFor="name">
          Your full given name:
        </label>
        <input className={css.name} type="text" id="name" />

        <div className={css.wrapper}>
          <div className={css.dateContainer} id="date">
            <label className={css.dateLabel} htmlFor="date">
              Date of Birth
            </label>
            <DatePicker
              selected={date}
              dateFormat="MMMM d, yyyy"
              showYearDropdown
              yearDropdownItemNumber={65}
              maxDate={new Date()}
              onChange={(date) => setDate(date)}
              customInput={<CustomInput />}
            />
          </div>

          <div className={css.countryContainer}>
            <label className={css.countryLabel} htmlFor="country">
              Country of residence or citizenship:
            </label>
            <input className={css.country} type="text" id="country" />
          </div>
        </div>

        <label className={css.schoolLabel} htmlFor="school">
          What school do you plan to attend?
        </label>
        <input className={css.school} type="text" id="school" />

        <label className={css.detailsLabel} htmlFor="details">
          Please take a moment to describe your intended area of study:
        </label>
        <textarea
          className={css.details}
          name="text"
          cols="56"
          rows="8"
          placeholder="Enter details here"
          id="details"
        />
      </form>
    </div>
  );
}

// (2/5)
// Using your favorite front end stack please create this design as close to pixel perfect as possible. The text in the fields is there as an example, the fields should be blank when the page loads, with the exception of the date picker icon, and the helper text in the text area. Because we have not provided you with this specific date picker icon, you can select any free SVG date picker icon you can find. The font is here: https://fonts.google.com/specimen/Lato
