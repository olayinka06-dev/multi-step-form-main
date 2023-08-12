// "use client";
import { createContext } from "react";

export const StepContext = createContext({
    options: [],
    menuData: [],
    selectPlanData: [{}],
    activeStep: 0,
    setActiveStep: ()=>{},
    planSelected: 0,
    selectedOptions: [],
    setPlanSelected: ()=>{},
    showPlanSelected: 0,
    setShowPlanSelected: ()=>{},
    clickedIndexes: [],
    setClickedIndexes: ()=>{},
    showAmount: false,
    setshowAmount: ()=>{},
    handleCheckboxChange: ()=>{},
    handleContainerClick: ()=>{},
    sumTotalMonth: "",
    sumTotalYear: "",
    isToggled: false,
    setToggled: ()=>{},
    handleToggle: ()=>{},
    handlePlanClick: ()=>{},
    handleEditPlan: ()=>{},
    handleReset: ()=>{},
});