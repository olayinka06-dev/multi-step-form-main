"use client";
import React, {useContext} from "react";
import SideBar from "./SideBar";
import StepOne from "./StepOne";
import { StepContext } from "@/components/provider/StepContext";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import ThanksGiving from "./ThanksGiving";

const page = () => {
    const {activeStep} = useContext(StepContext)
    const stepContent = [
        {
          content: (
            <StepOne />
          ),
        },
        {
          content: (
            <StepTwo/>
          ),
        },
        {
          content: (
            <StepThree/>
          ),
        },
        {
          content: (
            <StepFour/>
          ),
        },
        {
          content: <ThanksGiving />,
        },
      ];
  return (
    <div
      className={`w-full sm:h-[100vh] md:flex flex-col items-center justify-center bg-[hsl(217,100%,97%)]`}
    >
      <div className="card md:w-2/3 relative md:bg-white flex md:flex-row flex-col gap-5 md:rounded-2xl md:shadow-md md:p-5 md:h-[85vh!important]">
        <SideBar />
        <div className="w-full md:px-0 px-[25px] md:relative md:mx-0 mx-auto md:top-0 relative top-[-80px]">
          <div className="bg-white md:py-5 md:px-10 px-8 py-6 rounded-2xl">
            {stepContent[activeStep].content}
            {/* <StepOne/> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
