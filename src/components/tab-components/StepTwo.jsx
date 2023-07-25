"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

const StepTwo = ({ activeStep, setActiveStep, planSelected, handlePlanClick,handleToggle, selectPlanData, isToggled}) => {
  
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      delay: 50
    })
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
            onClick={()=> handlePlanClick(i)}
            className={`w-full cursor-pointer flex ${planSelected === i ? "bg-[hsl(231,100%,99%)] border-[hsl(243,100%,62%)]" : ""} rounded-2xl p-4 hover:border-[hsl(243,100%,62%)] flex-col gap-7 border border-solid`}
          >
            <div className="">
              <Image height={50} width={50} alt="image" src={spd.src} />
            </div>
            <div className="">
              <h3 className="text-[hsl(213,96%,18%)] font-[700] text-[20px]">
                {spd.title}
              </h3>
              <span className="text-[hsl(231,11%,63%)] text-[16px] font-[500]">
                {spd.month}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-center items-center gap-2 rounded-2xl py-3 bg-[rgb(248,249,254)]">
        <span className={`font-[600] ${isToggled ? "text-[hsl(231,11%,63%)]" : "text-[hsl(213,96%,18%)]"}`}> Monthly</span>
        <label htmlFor="toggleButton" className="relative">
        <input
          type="checkbox"
          id="toggleButton"
          className="sr-only"
          checked={isToggled}
          onChange={handleToggle}
        />
        <div
          className={`w-12 h-6 ${isToggled ? 'bg-[rgb(3,40,91)]' : 'bg-[rgb(3,40,91)]'} rounded-full transition`}
        >
          <div
            className={`absolute w-4 h-4 bg-white rounded-full top-1 left-1 transition-transform transform ${
              isToggled ? 'translate-x-6' : 'translate-x-0'
            }`}
          />
        </div>
      </label>
        {/* <input
          className="h-3.5 w-8 items-end appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
        /> */}
        <span className={`font-[600] ${!isToggled ? "text-[hsl(231,11%,63%)]" : "text-[hsl(213,96%,18%)]"}`}>Yearly</span>
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
