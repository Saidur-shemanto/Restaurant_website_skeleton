import React from "react";
import Banner from "./banner/Banner";
import NavBar from "../shared/NavBar";
import BannerBG from "../../assets/Media/Banner/BannerBG.png";
import AboutSection from "./about/AboutSection";
import FormSection from "./form/formSection";
import FoodItemsSlider from "./foodItems/FoodItemsSlider";

export default function HomePage() {
  return (
    <div className="">
      <div
        className=""
        style={{
          backgroundImage: `url(${BannerBG}), linear-gradient(to right, #BD1F17, #A51D13, #8E1B0F)`,
        }}
      >
        <NavBar></NavBar>
        <Banner></Banner>
      </div>
      <AboutSection></AboutSection>
      <FormSection></FormSection>
      <FoodItemsSlider></FoodItemsSlider>
    </div>
  );
}
