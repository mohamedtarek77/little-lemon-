import React, { useContext,useReducer,useEffect } from "react";

import  updateTimes  from "../UpdateTimes";
const BookingForm = ({ data, setData, availableTimes }) => {
  // const {dispatch,state } = useContext(TimesContext);

  const initializeTimes = ["18:00pm", "20:00pm", "23:00pm"];


  useEffect(() => {
    


  }, []);
  

  const [Times, dispatch] = useReducer(updateTimes, initializeTimes);


  const handleSubmit = (e) => {
    console.log(data);
    // console.log(state.value);
    e.preventDefault();
  };

  const handleChange = (name, value) => {
    setData((preData) => ({
      ...preData,
      [name]: value,
    }));
  };

  function changeTime (time){
    dispatch({
// type:data.date,
date:data.date,

time:time
    })
  }
  return (
    <>
      <h1>Book Now</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={data.date}

          // onChange={changeTime}
          onChange={(e) => {
            return (
              // dispatch({ type: e.target.value }),
              handleChange("date", e.target.value),
              changeTime 
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
          {Times.map((period) => {
            return <option key={period}>{period}</option>;
          })}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="2"
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
    </>
  );
};

export default BookingForm;
