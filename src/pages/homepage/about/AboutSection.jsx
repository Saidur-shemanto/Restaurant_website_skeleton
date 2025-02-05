import React, { useRef, useState } from "react";
import aboutImage from "../../../assets/Media/about/aboutImage.png";
import aboutSalad from "../../../assets/Media/about/aboutSalad.png";
import AboutServices from "./AboutServices";

export default function AboutSection() {
  const userDetails = {
    header: "Exceptional culinary experience and delicious food",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem autem alias quis in, tenetur et repellat, cum asperiores ad odio consectetur doloremque dolores. Tempore consequuntur, praesentium tenetur aliquam vero dolore",
  };

  const experienceDetails = {
    header: "Made Mojar torkari bhai khaite koraaa",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem autem alias quis in, tenetur et repellat, cum asperiores ad odio consectetur doloremque dolores. Tempore consequuntur, praesentium tenetur aliquam vero dolore",
  };
  const contactDetails = {
    header: "jigatolar more giya ekta call diben khali",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem autem alias quis in, tenetur et repellat, cum asperiores ad odio consectetur doloremque dolores. Tempore consequuntur, praesentium tenetur aliquam vero dolore",
  };
  const [redButton, setRedButton] = useState("About");
  const handleDetails = (e) => {
    if (e.target.textContent === "About") {
      textBodyRef.current.children[0].innerText = userDetails.header;
      textBodyRef.current.children[1].innerText = userDetails.body;
      setRedButton("About");
    } else if (e.target.textContent === "Experience") {
      textBodyRef.current.children[0].innerText = experienceDetails.header;
      textBodyRef.current.children[1].innerText = experienceDetails.body;
      setRedButton("Experience");
    } else if (e.target.textContent === "Contact") {
      textBodyRef.current.children[0].innerText = contactDetails.header;
      textBodyRef.current.children[1].innerText = contactDetails.body;
      setRedButton("Contact");
    }
  };

  const textBodyRef = useRef();
  return (
    <div className="relative overflow-hidden">
      <div className="absolute flex items-center justify-center w-60  gap-2 p-2 bg-white rounded-3xl top-40 left-28">
        <div
          className="radial-progress text-black"
          style={{ "--value": 70 }}
          role="progressbar"
        >
          50+
        </div>
        <div className="font-semibold">Market Experiences</div>
      </div>
      <img
        src={aboutSalad}
        alt=""
        className="h-[340px] w-[363px] absolute top-[280px] -right-[250px] rotate-22"
      />
      <div className="w-[90%] mx-auto pt-[120px]">
        <div className="flex gap-20">
          <div className=" ww-1/2">
            <img src={aboutImage} alt="" className="w-[617px] h-[460px]" />
          </div>
          <div className="w-[624px] flex flex-col">
            <div className="flex gap-4 ">
              <button
                onClick={handleDetails}
                className={`btn ${
                  redButton === "About" ? "bg-red text-white" : "bg-white"
                } rounded-none`}
              >
                About
              </button>
              <button
                onClick={handleDetails}
                className={`btn ${
                  redButton === "Experience" ? "bg-red text-white" : "bg-white"
                } rounded-none`}
              >
                Experience
              </button>
              <button
                onClick={handleDetails}
                className={`btn ${
                  redButton === "Contact" ? "bg-red text-white" : "bg-white"
                } rounded-none`}
              >
                Contact
              </button>
            </div>
            <hr />
            <div className="pt-8">
              <div ref={textBodyRef} className="flex flex-col gap-5">
                <h1 className="font-babas-qeue text-6xl font-bold">
                  Exceptional culinary experience and delicious food
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                  autem alias quis in, tenetur et repellat, cum asperiores ad
                  odio consectetur doloremque dolores. Tempore consequuntur,
                  praesentium tenetur aliquam vero dolore.
                </p>
              </div>
              <div className="flex  items-center pt-8  gap-8">
                <button className="bg-yellow font-bold font-roboto text-lg py-4 px-6">
                  About More
                </button>
                <p className="flex items-center gap-2">
                  <svg
                    width="21"
                    height="22"
                    viewBox="0 0 21 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.17 21.0351C17.1 21.0351 17.021 21.0311 16.942 21.0241C13.833 20.6771 11.025 19.6301 8.60101 18.0441L8.67401 18.0891C6.35401 16.5941 4.43801 14.6761 2.98901 12.4301L2.94401 12.3561C1.40201 10.0021 0.356007 7.19008 0.0220072 4.16408L0.0140071 4.07908C0.00600709 3.99908 0.00100708 3.90508 0.00100708 3.81108C0.00100708 2.34808 1.11901 1.14708 2.54701 1.01308L2.55801 1.01208C2.64101 1.00408 2.72501 1.00008 2.80901 1.00008H5.55201C6.97901 1.00408 8.15601 2.07208 8.33001 3.45208L8.33101 3.46608C8.47201 4.34808 8.67801 5.13008 8.95001 5.88008L8.92101 5.78908L8.95201 5.88708C9.03601 6.14108 9.08401 6.43408 9.08401 6.73908C9.08401 7.50908 8.77401 8.20708 8.27101 8.71408L7.67101 9.31308C8.72601 10.9321 10.068 12.2731 11.635 13.2971L11.687 13.3291L12.282 12.7341C12.791 12.2301 13.491 11.9191 14.264 11.9191C14.617 11.9191 14.954 11.9841 15.265 12.1021L15.246 12.0961C15.918 12.3561 16.703 12.5591 17.517 12.6711L17.573 12.6771C18.951 12.8721 20 14.0451 20 15.4621C20 15.4811 20 15.5001 19.999 15.5191V15.5161V18.2201C19.999 18.2221 19.999 18.2241 19.999 18.2251C19.999 19.7731 18.748 21.0291 17.201 21.0371L17.17 21.0351ZM5.54201 3.00008H2.80901C2.56101 3.00608 2.34101 3.11708 2.19001 3.29008L2.18901 3.29108C2.07201 3.43008 2.00101 3.61108 2.00101 3.80808C2.00101 3.83408 2.00201 3.86008 2.00501 3.88608V3.88308C2.31301 6.66208 3.24801 9.17308 4.66601 11.3401L4.62601 11.2751C5.96301 13.3521 7.67801 15.0681 9.68801 16.3661L9.75401 16.4061C11.853 17.7841 14.36 18.7211 17.059 19.0271L17.137 19.0341C17.149 19.0351 17.163 19.0351 17.178 19.0351C17.629 19.0351 17.996 18.6721 18.002 18.2221V15.4781C18.002 15.4721 18.002 15.4651 18.002 15.4581C18.002 15.0511 17.701 14.7141 17.31 14.6571L17.306 14.6561C16.276 14.5161 15.346 14.2751 14.463 13.9381L14.55 13.9671C14.465 13.9331 14.366 13.9141 14.263 13.9141C14.043 13.9141 13.843 14.0031 13.698 14.1471L12.55 15.2951C12.369 15.4761 12.119 15.5881 11.843 15.5881C11.661 15.5881 11.491 15.5401 11.344 15.4551L11.349 15.4581C8.91401 14.0561 6.94601 12.0881 5.58401 9.72808L5.54401 9.65308C5.46201 9.51108 5.41301 9.34008 5.41301 9.15908C5.41301 8.88308 5.52501 8.63307 5.70601 8.45208L6.85501 7.30308C6.99801 7.15708 7.08601 6.95808 7.08601 6.73708C7.08601 6.64908 7.07201 6.56508 7.04601 6.48608L7.04801 6.49208L7.01801 6.39708C6.73801 5.63308 6.50501 4.72808 6.36001 3.79408L6.34901 3.71108C6.29701 3.30808 5.95701 3.00008 5.54401 3.00008H5.54201ZM15.85 9.71808C15.366 9.71708 14.963 9.37308 14.871 8.91608L14.87 8.91008C14.59 7.49308 13.491 6.39408 12.097 6.11808L12.075 6.11408C11.611 6.02108 11.266 5.61708 11.266 5.13208C11.266 4.58008 11.714 4.13208 12.266 4.13208C12.334 4.13208 12.4 4.13908 12.463 4.15108L12.457 4.15008C14.675 4.58808 16.395 6.30808 16.827 8.49108L16.833 8.52608C16.845 8.58407 16.851 8.65007 16.851 8.71708C16.851 9.26908 16.403 9.71708 15.851 9.71708L15.85 9.71808ZM19.481 9.70808C18.968 9.70708 18.546 9.32108 18.488 8.82408V8.81908C18.117 5.48308 15.492 2.86108 12.187 2.49708L12.155 2.49408C11.652 2.43608 11.265 2.01308 11.265 1.49908C11.265 1.46108 11.267 1.42308 11.271 1.38608V1.39108C11.335 0.888075 11.76 0.502075 12.276 0.502075C12.311 0.502075 12.346 0.504075 12.38 0.507075H12.376C16.644 0.976075 20.002 4.33108 20.473 8.55708L20.477 8.59807C20.481 8.63107 20.483 8.67008 20.483 8.70907C20.483 9.22207 20.097 9.64508 19.599 9.70308H19.594C19.561 9.70708 19.524 9.70907 19.486 9.70907C19.485 9.70907 19.483 9.70907 19.482 9.70907L19.481 9.70808Z"
                      fill="#BD1F17"
                    />
                  </svg>
                  +88 3426 739 485
                </p>
              </div>
            </div>
          </div>
        </div>
        <AboutServices></AboutServices>
      </div>
    </div>
  );
}
