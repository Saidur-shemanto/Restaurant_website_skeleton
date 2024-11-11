import React from "react";

export default function FoodSliderIndiv({ food }) {
  return (
    <div className=" card bg-base-100 w-80 shadow-xl">
      <figure className="h-52">
        <img src={food.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{food.food_name}</h2>
        <p>{food.food_cuisine}</p>
        <div className="mx-auto">
          <button className="btn">View Details</button>
        </div>
      </div>
    </div>
  );
}
