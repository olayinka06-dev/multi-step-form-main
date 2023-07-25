import React from "react";

const StepFour = ({
  activePlan,
  overall,
  handleEditPlan,
  isPlan,
  activeStep,
  setActiveStep,
  selectedOptions,
  options,
  handleReset
}) => {
  return (
    <div className="flex flex-col gap-6 ">
      <div className="flex flex-col gap-2">
        <h1 className="text-[hsl(213,96%,18%)] font-[700] text-[30px]">
          Finishing up
        </h1>
        <p className="text-[hsl(231,11%,63%)] text-[16px] font-[500]">
          Double-check everything looks OK before confirming.
        </p>
      </div>
      <div className="p-6 rounded-2xl bg-[hsl(231,100%,99%)]">
        <div className="flex justify-between items-center p-4 border-b border-solid border-[hsl(229,24%,87%)]">
          <div className="flex flex-col gap-1">
            <div className="flex flex-row gap-2 items-center">
              <h3 className="text-[hsl(213,96%,18%)] font-[700] text-[18px]">
                {overall[activePlan].title}
              </h3>
              <span className="text-[hsl(213,96%,18%)] font-[700] text-[18px]">
                {!isPlan ? "(Monthly)" : "(Yearly)"}
              </span>
            </div>
            <span className=" cursor-pointer" onClick={handleEditPlan}>
              change
            </span>
          </div>
          <span className="text-[hsl(213,96%,18%)] font-[700] text-[18px]">
            {overall[activePlan].month}
          </span>
        </div>
        <div className="mt-4 flex flex-col gap-2">
            {selectedOptions.map((index) => (
              <div className="flex justify-between items-center" key={index}>
                <h3 className="text-[hsl(231,11%,63%)] text-[16px] font-[500]">{options[index].head}</h3>
                <h3 className="text-[hsl(213,96%,18%)]">{options[index].amount}</h3>
              </div>
            ))}
        </div>
      </div>
      <div className="flex justify-between items-center mt-8">
        <button
          onClick={() => setActiveStep(activeStep - 1)}
          className="inline-flex text-[hsl(213,96%,18%)] border-none py-2 px-5 text-[16px]"
        >
          Go Back
        </button>
        <button
          onClick={handleReset}
          className="inline-flex text-white bg-[hsl(213,96%,18%)] border-0 py-2 px-5 focus:outline-none hover:opacity-[90%] rounded text-lg"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default StepFour;
