import React, { useContext } from "react";

import { TimesContext } from "../UpdateTimes";
const BookingForm = ({ data, setData, availableTimes }) => {
  const { dispatch, state } = useContext(TimesContext); // (*)

  const handleSubmit = (e) => {
    console.log(data);
    console.log(state.time1);
    e.preventDefault();
  };

  const handleChange = (name, value) => {
    setData({
      ...data,
      [name]: value,
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={data.date}
        onChange={(e) => {
          return (
            dispatch({ type: e.target.value }),
            handleChange("date", e.target.value)
          );
        }}
      />
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time "
        value={data.time}
        onChange={(e) => {
          return handleChange("time", e.target.value);
        }}
      >
        {state.value.map((period) => {
          return <option key={period}>{period}</option>;
        })}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={data.NumberOfGuests}
        onChange={(e) => {
          return handleChange("NumberOfGuests", e.target.value);
        }}
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={data.Occasion}
        onChange={(e) => {
          return handleChange("Occasion", e.target.value);
        }}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" />
    </form>
  );
};

export default BookingForm;
