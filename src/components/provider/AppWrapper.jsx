"use client";
import { StepContext } from "./StepContext";
import React, { useState } from "react";

export const AppWrapper = ({ children }) => {
  const menuData = [
    {
      number: 1,
      step: "Step 1",
      title: "Your info",
    },
    {
      number: 2,
      step: "Step 2",
      title: "Select plan",
    },
    {
      number: 3,
      step: "Step 3",
      title: "Add-ons",
    },
    {
      number: 4,
      step: "Step 4",
      title: "Summary",
    },
  ];
  const selectPlanData = [
    {
      src: "/assets/images/icon-arcade.svg",
      title: "Arcade",
      month: 9,
      year: 90,
      free: "2 month free",
    },
    {
      src: "/assets/images/icon-advanced.svg",
      title: "Advanced",
      month: 12,
      year: 120,
      free: "2 month free",
    },
    {
      src: "/assets/images/icon-pro.svg",
      title: "Pro",
      month: 15,
      year: 150,
      free: "2 month free",
    },
  ];

  const options = [
    {
      head: "Online service",
      text: "Access to multiplayer games",
      amount: "+$1/mo",
      amount_year: "+$10/yr",
    },
    {
      head: "Larger storage",
      text: "Extra 1TB of cloud save",
      amount: "+$2/mo",
      amount_year: "+$20/yr",
    },
    {
      head: "Customizable Profile",
      text: "Custom theme on your profile",
      amount: "+$2/mo",
      amount_year: "+$20/yr",
    },
  ];
  const [activeStep, setActiveStep] = useState(0);
  const [planSelected, setPlanSelected] = useState(0);
  const [showPlanSelected, setShowPlanSelected] = useState(0);

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
  return (
    <StepContext.Provider
      value={{
        options,
        menuData,
        selectPlanData,
        activeStep,
        setActiveStep,
        planSelected,
        selectedOptions,
        setPlanSelected,
        showPlanSelected,
        setShowPlanSelected,
        clickedIndexes,
        setClickedIndexes,
        showAmount,
        setshowAmount,
        handleCheckboxChange,
        handleContainerClick,
        sumTotalMonth,
        sumTotalYear,
        isToggled,
        setToggled,
        handleToggle,
        handlePlanClick,
        handleEditPlan,
        handleReset,
      }}
    >
      {children}
    </StepContext.Provider>
  );
};
