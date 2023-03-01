// import React from 'react'

// import {BookingForm} from  './index'
// import { useState } from 'react';

// const BookingPage = () => {

//   const [data, setData] = useState(
//     {
//       date:'',
//       time:'',
//       NumberOfGuests:'',
//       Occasion:''
//     }
//   );

//   const availableTimes = ['18:00pm', '19:00pm', '20:00pm'];

//   return (
//     <div>

//       <BookingForm data={data} setData={setData} availableTimes={availableTimes}/>
//     </div>
//   )
// }

// export default BookingPage

import React from "react";

import { BookingForm } from "./index";
import { useState, useReducer, useEffect } from "react";

const BookingPage = () => {
  const [data, setData] = useState({
    date: "",
    time: "",
    NumberOfGuests: "",
    Occasion: "",
  });

  // const [AvailableTimes , setAvailableTimes ] = useState(

  // );

  // const initializeTimes = ["18:00pm", "19:00pm", "23:00pm"];

  // const [Times, dispatch] = useReducer(updateTimes, initializeTimes);

  // const availableTimes = ['18:00pm', '19:00pm', '20:00pm'];

  // const updateTimes  = ()=>{
  //   if (data.date==='2023-02-09') {
  //     setAvailableTimes((preData)=>preData.pop)
  //   }
  //   else if (data.date==='2023-02-10') {
  //     setAvailableTimes((preData)=>preData.pop)

  //   }
  //   else {
  //     return AvailableTimes;
  //   }
  // }

  ////

  //   function updateTimes(Times, action) {
  //     if (data.date === "2023-02-09") {
  //       return Times;
  //     } else if (data.date === "2023-02-10") {
  //       return Times;
  //     } else {
  //       return Times;
  //     }

  // ////

  //     // switch (action.type) {
  //     //   case "2023-02-09":
  //     //     {
  //     //       return Times;
  //     //     }

  //     //     break;

  //     //   default:
  //     //     break;
  //     // }

  //     // if (data.date==='2023-02-09') {
  //     //   setAvailableTimes((preData)=>preData.pop)
  //     // }
  //     // else if (data.date==='2023-02-10') {
  //     //   setAvailableTimes((preData)=>preData.pop)

  //     // }
  //     // else {
  //     //   return AvailableTimes;
  //     // }
  //   }

  function fetchDate() {
    return fetch(
      "https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js"
    )
    .then((response)=>response.json()).then((data1)=>console.log(data1))

    // return fetch('https://jsonplaceholder.typicode.com/users').then((response)=>response.json()).then((data1)=>console.log(data1))
  }

  useEffect(() => {
    // fetchDate();

    // fetch(
    //   "https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js"
    // )
    // .then((response)=>response.text()).then((data1)=>console.log(data1))


    fetch(
      "https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js"
    )
    .then((response)=>response.text()).then((data1)=>console.log(data1 ))

    console.log("tarek");
  }, []);

  const initializeTimes = () => {
    // fetchAPI(["18:00pm", "19:00pm", "23:00pm"]);
  };

  return (
    <div>
      <BookingForm
        data={data}
        // availableTimes={AvailableTimes}
        setData={setData}
      />
    </div>
  );
};

export default BookingPage;
