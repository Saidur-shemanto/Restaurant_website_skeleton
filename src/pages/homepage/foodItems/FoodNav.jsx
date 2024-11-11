import React from "react";
import { useSwiper } from "swiper/react";

export default function FoodNav() {
  const swiper = useSwiper();
  return (
    <div>
      <button onClick={() => swiper.slidePrev()}>prev</button>
      <button onClick={() => swiper.slideNext()}>next</button>
    </div>
  );
}
