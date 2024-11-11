import React from "react";
import backgroundImage from "../../../assets/Media/form/background.png";

export default function FormSection() {
  return (
    <div
      className="h-[100vh] bg-cover bg-no-repeat "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="w-[90%] mx-auto space-y-10">
        <div className="space-y-4">
          <div className="flex items-center">
            <div className="h-[10px] w-[10px] bg-red"></div>{" "}
            <p className="text-xl font-bold text-red font-roboto">Book now</p>
          </div>
          <h1 className="font-babas-qeue font-bold text-6xl text-white">
            Book your Table
          </h1>
          <p className="font-roboto text-base text-white w-[545px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi,
            deserunt nihil sunt expedita totam quam ad odit modi repellendus
            error.
          </p>
        </div>
        <div>
          <form action="" className="flex flex-col gap-6">
            <div className="flex gap-7">
              <input
                type="text"
                placeholder="Your Name*"
                className="input input-bordered text-white border-white rounded-none w-full max-w-xs bg-transparent"
              />
              <input
                type="text"
                placeholder="Your Email"
                className="input input-bordered text-white border-white rounded-none w-full max-w-xs bg-transparent"
              />
            </div>
            <div className="flex gap-7">
              <input
                type="date"
                placeholder="Reservation date"
                className="input input-bordered text-white border-white rounded-none w-full max-w-xs bg-transparent"
              />
              <input
                type="number"
                placeholder="Total People"
                className="input input-bordered text-white border-white rounded-none w-full max-w-xs bg-transparent"
              />
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-lg w-full max-w-[41.5rem] h-[140px] text-white border-white rounded-none bg-transparent"
            />
            <div>
              <input
                type="button"
                value="Book Now"
                className="bg-yellow  py-4 px-6 text-lg font-roboto font-bold"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
