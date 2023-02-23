import React from "react";

import { Restaurantfood } from "../assets";

import Button from "./Button";

const Hero = () => {
  return (
    <main>
      <div className="containerForHero">
        <div className="content">
          <div className="title">
            <h1>Little Lemon</h1>
            <h3>Egypt</h3>
          </div>

          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled i
          </p>

          {/* <Button link='/bookingPage' text="book a table online" /> */}
          <Button link='/bookingPage' text="Book Now" />

        </div>
        <img alt="Restaurantfood" src={Restaurantfood} />
      </div>
    </main>
  );
};

export default Hero;
