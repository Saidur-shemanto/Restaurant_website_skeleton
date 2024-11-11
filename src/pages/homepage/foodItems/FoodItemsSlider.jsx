import React, { useRef } from "react";
import { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import FoodSliderIndiv from "./FoodSliderIndiv";
import FoodNav from "./FoodNav";

export default function FoodItemsSlider() {
  const [foodItems, setFoodItems] = useState([]);
  useEffect(() => {
    fetch("foodItems.json")
      .then((res) => res.json())
      .then((data) => setFoodItems(data));
  }, []);
  const swiper = useSwiper();
  const swiperContainerRef = useRef(null);

  return (
    <div className="  bg-[#FBF7F2] ">
      <div className="w-[90%] mx-auto px-6 pt-10">
        <div className="">
          <button onClick={() => swiperContainerRef.current.swiper.slidePrev()}>
            <svg
              width="88"
              height="88"
              viewBox="0 0 88 88"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_1_645)">
                <rect
                  x="74"
                  y="74.0001"
                  width="60"
                  height="60"
                  rx="30"
                  transform="rotate(-180 74 74.0001)"
                  fill="white"
                  shape-rendering="crispEdges"
                />
                <path
                  d="M48.9718 52.941C49.2354 52.6773 49.3835 52.3197 49.3835 51.9468C49.3835 51.5739 49.2354 51.2163 48.9718 50.9526L42.0109 43.9916L48.9718 37.0307C49.228 36.7655 49.3697 36.4102 49.3665 36.0415C49.3633 35.6728 49.2154 35.3201 48.9547 35.0594C48.694 34.7986 48.3413 34.6507 47.9725 34.6475C47.6038 34.6443 47.2486 34.7861 46.9834 35.0422L39.0282 42.9974C38.7646 43.2611 38.6165 43.6187 38.6165 43.9916C38.6165 44.3645 38.7646 44.7221 39.0282 44.9858L46.9834 52.941C47.2471 53.2046 47.6047 53.3527 47.9776 53.3527C48.3505 53.3527 48.7081 53.2046 48.9718 52.941Z"
                  fill="#0A1425"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_1_645"
                  x="0.363637"
                  y="0.363759"
                  width="87.2727"
                  height="87.2727"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="6.81818" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1_645"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1_645"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </button>
          <button onClick={() => swiperContainerRef.current.swiper.slideNext()}>
            <svg
              width="88"
              height="88"
              viewBox="0 0 88 88"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_1_647)">
                <rect
                  x="14"
                  y="14.0001"
                  width="60"
                  height="60"
                  rx="30"
                  fill="white"
                  shape-rendering="crispEdges"
                />
                <path
                  d="M39.0282 35.0592C38.7646 35.3229 38.6165 35.6806 38.6165 36.0534C38.6165 36.4263 38.7646 36.7839 39.0282 37.0477L45.9891 44.0086L39.0282 50.9695C38.772 51.2348 38.6303 51.59 38.6335 51.9587C38.6367 52.3274 38.7846 52.6801 39.0453 52.9408C39.306 53.2016 39.6588 53.3495 40.0275 53.3527C40.3962 53.3559 40.7514 53.2141 41.0166 52.958L48.9718 45.0028C49.2354 44.7391 49.3835 44.3815 49.3835 44.0086C49.3835 43.6357 49.2354 43.2781 48.9718 43.0144L41.0166 35.0592C40.7529 34.7956 40.3953 34.6475 40.0224 34.6475C39.6495 34.6475 39.2919 34.7956 39.0282 35.0592Z"
                  fill="#BD1F17"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_1_647"
                  x="0.363637"
                  y="0.363759"
                  width="87.2727"
                  height="87.2727"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="6.81818" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1_647"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1_647"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </button>
        </div>
        <Swiper
          modules={[Pagination, Scrollbar, A11y, Autoplay]}
          ref={swiperContainerRef}
          slidesPerView={4}
          spaceBetween="100"
          pagination={{ clickable: true }}
          breakpoints={{
            370: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          autoplay={{
            disableOnInteraction: false,
            delay: 1000,
          }}
        >
          {foodItems.map((food) => (
            <SwiperSlide key={food.id}>
              <FoodSliderIndiv food={food}></FoodSliderIndiv>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
