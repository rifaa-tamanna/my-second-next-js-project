import Image from "next/image";
import React from "react";

const FoodCard = ({ food }) => {
    const {dish_name, image_link} = food
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <Image 
            width={300}
            height={300}
            src={image_link}
        ></Image>
      </figure>
      <div className="card-body p-10">
        <h2 className="card-title">{dish_name}</h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
