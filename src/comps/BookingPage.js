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


import React from 'react'

import {BookingForm} from  './index'
import {  useState } from 'react';






const BookingPage = () => {


  const [data, setData] = useState(
    {
      date:'',
      time:'',
      NumberOfGuests:'',
      Occasion:''
    }
  );





  return (
    <div>

      <BookingForm data={data} setData={setData} />
    </div>
  )
}

export default BookingPage