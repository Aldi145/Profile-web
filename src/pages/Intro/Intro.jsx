"use client";

import React, { useEffect } from "react";
import Navbar from "@/components/Navbar/Navbar";
import ThreeD from "@/components/utils/ThreeD";
import AOS from "aos";
import "aos/dist/aos.css";

const Intro = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className=" relative overflow-hidden">
      <div className="hayaw wayaw" data-aos="zoom-out" data-aos-once="true">
        {/* <Navbar /> */}
        <div className="relative top-0 left-0 overflow-hidden h-screen">
          <div className=" bg-cover">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="3466.726"
              height="2288.173"
              viewBox="0 0 3466.726 2288.173"
              className="translate-x-[-1100.14px] translate-y-[-823.6px]"
            >
              <defs>
                <clipPath id="clip-path">
                  <rect width="3466.726" height="2288.173" fill="none" />
                </clipPath>
                <filter
                  id="Path_3"
                  x="75.832"
                  y="106.907"
                  width="2202.288"
                  height="2141.578"
                  filterUnits="userSpaceOnUse"
                >
                  <feOffset dx="12" dy="10" in="SourceAlpha" />
                  <feGaussianBlur stdDeviation="10" result="blur" />
                  <feFlood floodOpacity="0.188" />
                  <feComposite operator="in" in2="blur" />
                  <feComposite in="SourceGraphic" />
                </filter>
              </defs>
              <g
                id="Repeat_Grid_3"
                data-name="Repeat Grid 3"
                clip-path="url(#clip-path)"
              >
                <g transform="translate(805.145 583.596)">
                  <g
                    id="Group_3"
                    data-name="Group 3"
                    transform="translate(2661.581 -583.596) rotate(90)"
                  >
                    <path
                      id="Path_1"
                      data-name="Path 1"
                      d="M234.027-5.117l1369.117-28.2c129.406-2.666,232.148,102.572,229.483,235.056l-20.4,1013.911c-2.666,132.484-109.731,242.044-239.136,244.71l-1369.117,28.2C74.567,1491.225-28.176,1385.987-25.51,1253.5l20.4-1013.911C-2.444,107.109,104.621-2.451,234.027-5.117Z"
                      transform="translate(1301.954 38.821) rotate(60)"
                      fill="#004977"
                    />
                  </g>
                  <g
                    id="Group_2"
                    data-name="Group 2"
                    transform="translate(1284.59 -525.134) rotate(83)"
                  >
                    <g
                      transform="matrix(0.12, -0.99, 0.99, 0.12, -312.7, 2067.03)"
                      filter="url(#Path_3)"
                    >
                      <path
                        id="Path_3-2"
                        data-name="Path 3"
                        d="M237.915,1.55,1396.079,9.094c131.4.856,238.609,107.132,239.465,237.374l6,913.589c.856,130.242-104.968,235.13-236.365,234.274l-1158.164-7.544c-131.4-.856-238.609-107.132-239.465-237.374l-6-913.589C.694,105.582,106.518.694,237.915,1.55Z"
                        transform="translate(2238.27 1268.19) rotate(145)"
                        fill="#000000"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <div className="absolute top-[40%] right-1/2 left-40 flex flex-col gap-7 text-white">
              <div
                data-aos="fade-right"
                data-aos-once="true"
                data-aos-delay="200"
              >
                <h1 className="uppercase font-bold text-6xl">
                  aldi maulana rohmat
                </h1>
              </div>
              <diV data-aos="fade-up" data-aos-once="true" data-aos-delay="200">
                <p className="capitalize font-semibold tracking-normal ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                  praesentium dignissimos harum placeat perspiciatis, sit
                  aliquid doloremque nobis beatae maiores voluptatum, vitae
                  iusto esse magni doloribus? Harum nulla culpa pariatur!
                </p>
              </diV>
            </div>
          </div>
          <div>
            <ThreeD />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
