import React from "react";
import { useLoaderData } from "react-router-dom";
import foodImg from "../assets/foodrecipie.jpg";
import { FaStopwatch, FaHeart } from "react-icons/fa";

export default function Recipieitems() {
  const allRecipies = useLoaderData();
  console.log(allRecipies);

  return (
    <div className="card-container">
      {allRecipies?.map((item, index) => (
        <div key={index} className="card">
          <img src={foodImg} width="120px" height="100px" alt="food" />
          <div className="card-body">
            <div className="title">{item.title}</div>
            <div className="icons">
              <div className="timer">
                <FaStopwatch />30min
              </div>
              <FaHeart />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

