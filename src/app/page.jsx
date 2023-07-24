"use client";
import React, { useState } from "react";
import SideBar from "@/components/sidebar-component/SideBar";
import StepFour from "@/components/tab-components/StepFour";
import StepOne from "@/components/tab-components/StepOne";
import StepThree from "@/components/tab-components/StepThree";
import StepTwo from "@/components/tab-components/StepTwo";

export default function Home() {
  const [activeStep, setActiveStep] = useState(0);
  const [planSelected, setPlanSelected] = useState(0);
  const [showPlanSelected, setShowPlanSelected] = useState(0);

  const selectPlanData = [
    {
      src: "/assets/images/icon-arcade.svg",
      title: "Arcade",
      month: "$9/mo",
    },
    {
      src: "/assets/images/icon-advanced.svg",
      title: "Advanced",
      month: "$12/mo",
    },
    {
      src: "/assets/images/icon-pro.svg",
      title: "Pro",
      month: "$15/mo",
    },
  ];

  const handlePlanClick = (i) => {
    setPlanSelected(i);
    setShowPlanSelected(i)
  };
  const stepContent = [
    {
      content: (
        <StepOne activeStep={activeStep} setActiveStep={setActiveStep} />
      ),
    },
    {
      content: (
        <StepTwo
          handlePlanClick={handlePlanClick}
          planSelected={planSelected}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          selectPlanData={selectPlanData}
        />
      ),
    },
    {
      content: <StepThree/>,
    },
    {
      content: <StepFour overall={selectPlanData} activePlan={showPlanSelected} />,
    },
  ];

  const handleClickStep = (e) => {
    setActiveStep(e);
  };

  return (
    <div className="w-full h-[100vh] md:flex flex-col items-center justify-center bg-[hsl(217,100%,97%)]">
      <div className="md:w-2/3 relative md:bg-white flex md:flex-row flex-col gap-5 rounded-2xl shadow-md md:p-5 md:h-[85vh!important]">
        <SideBar handleClickMenu={handleClickStep} activeStep={activeStep} />
        <div className="w-full md:px-0 px-[25px] md:relative md:mx-0 mx-auto md:top-0 absolute top-[100px]">
          <div className="bg-white md:py-5 md:px-7 p-3 rounded-2xl">
            {stepContent[activeStep].content}
          </div>
        </div>
      </div>
    </div>
  );
}
