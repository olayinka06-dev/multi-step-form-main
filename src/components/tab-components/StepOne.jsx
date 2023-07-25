"use client";
import React, { useState, useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

const StepOne = ({ activeStep, setActiveStep }) => {

  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      delay: 50
    })
  }, []);

  const [formData, setFormData] = useState({
    text: "",
    email: "",
    number: "",
  });

  const [textError, setTextError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [numberError, setNumberError] = useState("");

  const handleInputChange = (e) => {
    const { value, name } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
    setTextError(name === "text" && value.length < 3 ? "Username is too short" : "");
    setEmailError(
      name === "email" && value.length > 0 && !/\S+@\S+\.\S+/.test(value)
        ? "Invalid Email Address"
        : ""
    );
    setNumberError(
      name === "number" &&
        (value.length < 3 || value.length > 14)
        ? "Phone number length must be between 3 and 14"
        : ""
    );
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    if (!formData.text) {
      setTextError("This Field is Required");
    } else if (!formData.email) {
      setEmailError("This Field is Required");
    } else if (!formData.number) {
      setNumberError("This Field is Required");
    } else {
      setTextError("");
      setEmailError("");
      setNumberError("");
      setActiveStep(activeStep + 1);
    }
  };

  return (
    <div data-aos="fade-left" className="slider flex flex-col gap-6 ">
      <div className="flex flex-col gap-2">
        <h1 className="text-[hsl(213,96%,18%)] font-[700] text-[30px]">
          Personal info
        </h1>
        <p className="text-[hsl(231,11%,63%)] text-[16px] font-[500]">
          Please provide your name, email address, and phone number.
        </p>
      </div>
      <form onSubmit={handleSubmitForm}>
        <div className="relative mb-4">
          <div className="flex justify-between">
            <label
              htmlFor="text"
              className="leading-7 text-sm text-[hsl(213,96%,18%)] font-[600]"
            >
              Name
            </label>
            {textError && (
              <span className="text-[hsl(354,84%,57%)]">{textError}</span>
            )}
          </div>
          <input
            type="text"
            id="text"
            name="text"
            placeholder="e.g. Stephen King"
            onChange={handleInputChange}
            value={formData.text}
            className={`w-full bg-white rounded border ${
              textError ? "border-[hsl(354,84%,57%)]" : "border-gray-300"
            } focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-[hsl(213,96%,18%)] font-[700] py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
          />
        </div>
        <div className="relative mb-4">
          <div className="flex justify-between">
            <label
              htmlFor="email"
              className="leading-7 text-sm text-[hsl(213,96%,18%)] font-[600]"
            >
              Email
            </label>
            {emailError && (
              <span className="text-[hsl(354,84%,57%)]">{emailError}</span>
            )}
          </div>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="e.g. stephenking@lorem.com"
            onChange={handleInputChange}
            value={formData.email}
            className={`w-full bg-white rounded border  ${
              emailError ? "border-[hsl(354,84%,57%)]" : "border-gray-300"
            } focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-[hsl(213,96%,18%)] font-[700] py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
          />
        </div>
        <div className="relative mb-4">
          <div className="flex justify-between">
            <label
              htmlFor="number"
              className="leading-7 text-sm text-[hsl(213,96%,18%)] font-[600]"
            >
              Phone Number
            </label>
            {numberError && (
              <span className="text-[hsl(354,84%,57%)]">{numberError}</span>
            )}
          </div>
          <input
            type="tel"
            id="number"
            name="number"
            placeholder="e.g. +1 234 567 890"
            onChange={handleInputChange}
            value={formData.number}
            className={`w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-[hsl(213,96%,18%)] font-[700] py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
          />
        </div>
        <div className="flex justify-end mt-8">
          <button className="inline-flex text-white bg-[hsl(213,96%,18%)] border-0 py-2 px-5 focus:outline-none hover:opacity-[90%] rounded text-lg">
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
};

export default StepOne;

