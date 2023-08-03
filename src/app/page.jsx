"use client";
import React, { useState } from "react";
import SideBar from "@/components/sidebar-component/SideBar";
import StepFour from "@/components/tab-components/StepFour";
import StepOne from "@/components/tab-components/StepOne";
import StepThree from "@/components/tab-components/StepThree";
import StepTwo from "@/components/tab-components/StepTwo";
import ThanksGiving from "@/components/tab-components/ThanksGiving";

export default function Home() {
  const [activeStep, setActiveStep] = useState(0);
  const [planSelected, setPlanSelected] = useState(0);
  const [showPlanSelected, setShowPlanSelected] = useState(0);

  const selectPlanData = [
    {
      src: "/assets/images/icon-arcade.svg",
      title: "Arcade",
      month: 9,
      year: 90,
      free: "2 month free"
    },
    {
      src: "/assets/images/icon-advanced.svg",
      title: "Advanced",
      month: 12,
      year: 120,
      free: "2 month free"
    },
    {
      src: "/assets/images/icon-pro.svg",
      title: "Pro",
      month: 15,
      year: 150,
      free: "2 month free"
    },
  ];

  const options = [
    {
      head: "Online service",
      text: "Access to multiplayer games",
      amount: "+$1/mo",
      amount_year: "+$10/yr"
    },
    {
      head: "Larger storage",
      text: "Extra 1TB of cloud save",
      amount: "+$2/mo",
      amount_year: "+$20/yr"
    },
    {
      head: "Customizable Profile",
      text: "Custom theme on your profile",
      amount: "+$2/mo",
      amount_year: "+$20/yr"
    },
  ];

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [clickedIndexes, setClickedIndexes] = useState([]);
  const [showAmount, setshowAmount] = useState(false);

  const handleCheckboxChange = (index, isChecked) => {
    if (isChecked) {
      setSelectedOptions((prevOptions) => [...prevOptions, index]);
    } else {
      setSelectedOptions((prevOptions) =>
        prevOptions.filter((item) => item !== index)
      );
    }
  };

  const handleContainerClick = (index) => {
    setClickedIndexes((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((item) => item !== index)
        : [...prevIndexes, index]
    );
    setshowAmount(true);
  };

  
  const sumTotalMonth = selectedOptions.reduce(
    (total, index) => total + parseInt(options[index].amount.slice(2), 10),
    0
  );
  const sumTotalYear = selectedOptions.reduce(
    (total, index) => total + parseInt(options[index].amount_year.slice(2), 10),
    0
  );

  const [isToggled, setToggled] = useState(false);

  const handleToggle = () => {
    setToggled((prevState) => !prevState);
  };

  const handlePlanClick = (i) => {
    setPlanSelected(i);
    setShowPlanSelected(i);
  };

  const handleEditPlan = () => {
    setActiveStep(1);
  };

  const handleReset = () => {
    setTimeout(() => {
      setActiveStep(0);
    }, 1500);

    setPlanSelected(0);
    setShowPlanSelected(0);
    setSelectedOptions([]);
    setClickedIndexes([]);
    setActiveStep(activeStep + 1);
    setToggled(false);
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
          isToggled={isToggled}
          handleToggle={handleToggle}
        />
      ),
    },
    {
      content: (
        <StepThree
          handleCheckboxChange={handleCheckboxChange}
          handleContainerClick={handleContainerClick}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          selectedOptions={selectedOptions}
          clickedIndexes={clickedIndexes}
          options={options}
          isToggled={isToggled}
        />
      ),
    },
    {
      content: (
        <StepFour
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          isPlan={isToggled}
          handleEditPlan={handleEditPlan}
          overall={selectPlanData}
          activePlan={showPlanSelected}
          selectedOptions={selectedOptions}
          options={options}
          handleReset={handleReset}
          sumTotal={sumTotalMonth}
          showAmount={showAmount}
          sumtotalYear={sumTotalYear}
        />
      ),
    },
    {
      content: <ThanksGiving />,
    },
  ];

  const handleClickStep = (e) => {
    setActiveStep(e);
  };

  return (
    <div className={`w-full sm:h-[100vh] md:flex flex-col items-center justify-center bg-[hsl(217,100%,97%)]`}>
      <div className="card md:w-2/3 relative md:bg-white flex md:flex-row flex-col gap-5 md:rounded-2xl md:shadow-md md:p-5 md:h-[85vh!important]">
        <SideBar handleClickMenu={handleClickStep} activeStep={activeStep} />
        <div className="w-full md:px-0 px-[25px] md:relative md:mx-0 mx-auto md:top-0 relative top-[-80px]">
          <div className="bg-white md:py-5 md:px-10 px-8 py-6 rounded-2xl">
            {stepContent[activeStep].content}
          </div>
        </div>
      </div>
    </div>
  );
}
