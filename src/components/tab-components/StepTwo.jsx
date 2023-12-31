"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const StepTwo = ({
  activeStep,
  setActiveStep,
  planSelected,
  handlePlanClick,
  handleToggle,
  selectPlanData,
  isToggled,
}) => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      delay: 50,
    });
  }, []);

  return (
    <div data-aos="fade-left" className="flex flex-col gap-6 ">
      <div className="flex flex-col gap-2">
        <h1 className="text-[hsl(213,96%,18%)] font-[700] text-[30px]">
          Select your plan
        </h1>
        <p className="text-[hsl(231,11%,63%)] text-[16px] font-[500]">
          You have the option of monthly or yearly billing.
        </p>
      </div>
      <div className="flex md:flex-row flex-col gap-3 items-center">
        {selectPlanData.map((spd, i) => (
          <div
            key={i}
            onClick={() => handlePlanClick(i)}
            className={`w-full cursor-pointer flex ${
              planSelected === i
                ? "bg-[hsl(231,100%,99%)] border-[hsl(243,100%,62%)]"
                : ""
            } rounded-2xl p-4 hover:border-[hsl(243,100%,62%)] flex-row md:flex-col gap-7 border border-solid`}
          >
            <div className="">
              <Image height={50} width={50} alt="image" src={spd.src} />
            </div>
            <div className="">
              <h3 className="text-[hsl(213,96%,18%)] font-[700] text-[20px]">
                {spd.title}
              </h3>
              {isToggled ? (
                <span className="text-[hsl(231,11%,63%)] text-[16px] font-[500]">
                  {"$"+spd.year+"/yr"}
                </span>
              ) : (
                <span className="text-[hsl(231,11%,63%)] text-[16px] font-[500]">
                  {"$"+spd.month+"/mo"}
                </span>
              )}

              {isToggled && (
                <h3 className="text-[hsl(213,96%,18%)] font-[700] text-[16px]">
                  {spd.free}
                </h3>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-center items-center gap-2 rounded-2xl py-3 bg-[rgb(248,249,254)]">
        <span
          className={`font-[600] ${
            isToggled ? "text-[hsl(231,11%,63%)]" : "text-[hsl(213,96%,18%)]"
          }`}
        >
          {" "}
          Monthly
        </span>
        <label htmlFor="toggleButton" className="relative">
          <input
            type="checkbox"
            id="toggleButton"
            className="sr-only"
            checked={isToggled}
            onChange={handleToggle}
          />
          <div
            className={`w-12 h-6 ${
              isToggled ? "bg-[rgb(3,40,91)]" : "bg-[rgb(3,40,91)]"
            } rounded-full transition`}
          >
            <div
              className={`absolute w-4 h-4 bg-white rounded-full top-1 left-1 transition-transform transform ${
                isToggled ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </div>
        </label>
        <span
          className={`font-[600] ${
            !isToggled ? "text-[hsl(231,11%,63%)]" : "text-[hsl(213,96%,18%)]"
          }`}
        >
          Yearly
        </span>
      </div>

      <div className="flex justify-between items-center mt-8">
        <button
          onClick={() => setActiveStep(activeStep - 1)}
          className="inline-flex text-[hsl(213,96%,18%)] border-none py-2 px-5 text-[16px]"
        >
          Go Back
        </button>
        <button
          onClick={() => setActiveStep(activeStep + 1)}
          className="inline-flex text-white bg-[hsl(213,96%,18%)] border-0 py-2 px-5 focus:outline-none hover:opacity-[90%] rounded text-lg"
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default StepTwo;
