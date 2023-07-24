// "use client";
// import React, { useState } from "react";

// // const StepThree = () => {
// //   const options = [
// //     {
// //       head: "Online service",
// //       text: "Access to multiplayer games",
// //       amount: "+$1/mo",
// //     },
// //     {
// //       head: "Larger storage",
// //       text: "Extra 1TB of cloud save",
// //       amount: "+$2/mo",
// //     },
// //     {
// //       head: "Customizable Profile",
// //       text: "Custom theme on your profile",
// //       amount: "+$2/mo",
// //     },
// //   ];

// //   const [selectedOptions, setSelectedOptions] = useState([]);

// //   const handleCheckboxChange = (index, isChecked) => {
// //     if (isChecked) {
// //       setSelectedOptions((prevOptions) => [...prevOptions, index]);
// //     } else {
// //       setSelectedOptions((prevOptions) =>
// //         prevOptions.filter((item) => item !== index)
// //       );
// //     }
// //   };

// //   return (
// //     <div className="flex flex-col gap-6 ">
// //       <div className="flex flex-col gap-2">
// //         <h1 className="text-[hsl(213,96%,18%)] font-[700] text-[30px]">
// //           Pick add-ons
// //         </h1>
// //         <p className="text-[hsl(231,11%,63%)] text-[16px] font-[500]">
// //           Add-ons help enhance your gaming experience.
// //         </p>
// //       </div>
// //       <div className="container mx-auto p-4">
// //         <div className="flex flex-col space-y-6">
// //           {options.map((option, index) => (
// //             <div
// //               key={index}
// //               className="flex items-center mb-4"
// //               onClick={() => {
// //                 const isChecked = !selectedOptions.includes(index);
// //                 handleCheckboxChange(index, isChecked);
// //               }}
// //             >
// //               <div className="">
// //                 <input
// //                   type="checkbox"
// //                   checked={selectedOptions.includes(index)}
// //                   onChange={() => handleCheckboxChange(index)}
// //                   className="mr-2"
// //                 />
// //               </div>
// //               <div className="">
// //                 <h3>{option.head}</h3>
// //                 <p>{option.text}</p>
// //                 <span>{option.amount}</span>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //         <div className="mt-4">
// //           <h2>Appended Texts:</h2>
// //           <ul>
// //             {selectedOptions.map((index) => (
// //               <li key={index}>
// //                 <h3>{options[index].head}</h3>
// //                 <p>{options[index].text}</p>
// //                 <span>{options[index].amount}</span>
// //               </li>
// //             ))}
// //           </ul>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default StepThree;

// // import React, { useState } from "react";

// // import React, { useState } from "react";

// const StepThree = () => {
//   const options = [
//     {
//       head: "Online service",
//       text: "Access to multiplayer games",
//       amount: "+$1/mo",
//     },
//     {
//       head: "Larger storage",
//       text: "Extra 1TB of cloud save",
//       amount: "+$2/mo",
//     },
//     {
//       head: "Customizable Profile",
//       text: "Custom theme on your profile",
//       amount: "+$2/mo",
//     },
//   ];

//   const [selectedOptions, setSelectedOptions] = useState([]);
//   const [clickedIndexes, setClickedIndexes] = useState([]);

//   const handleCheckboxChange = (index, isChecked) => {
//     if (isChecked) {
//       setSelectedOptions((prevOptions) => [...prevOptions, index]);
//     } else {
//       setSelectedOptions((prevOptions) =>
//         prevOptions.filter((item) => item !== index)
//       );
//     }
//   };

//   const handleContainerClick = (index) => {
//     setClickedIndexes((prevIndexes) =>
//       prevIndexes.includes(index)
//         ? prevIndexes.filter((item) => item !== index)
//         : [...prevIndexes, index]
//     );
//   };

//   return (
//     <div className="flex flex-col gap-6 ">
//       <div className="flex flex-col gap-2">
//         <h1 className="text-[hsl(213,96%,18%)] font-[700] text-[30px]">
//           Pick add-ons
//         </h1>
//         <p className="text-[hsl(231,11%,63%)] text-[16px] font-[500]">
//           Add-ons help enhance your gaming experience.
//         </p>
//       </div>
//       <div className="container mx-auto p-4">
//         <div className="flex flex-col space-y-6">
//           {options.map((option, index) => (
//             <div
//               key={index}
//               className={`flex items-center mb-4 ${
//                 clickedIndexes.includes(index) ? "bg-gray-200" : ""
//               }`}
//               onClick={() => {
//                 const isChecked = !selectedOptions.includes(index);
//                 handleCheckboxChange(index, isChecked);
//                 handleContainerClick(index);
//               }}
//             >
//               <div className="">
//                 <input
//                   type="checkbox"
//                   checked={selectedOptions.includes(index)}
//                   onChange={() => handleCheckboxChange(index)}
//                   className="mr-2"
//                 />
//               </div>
//               <div className="">
//                 <h3>{option.head}</h3>
//                 <p>{option.text}</p>
//                 <span>{option.amount}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="mt-4">
//           <h2>Appended Texts:</h2>
//           <ul>
//             {selectedOptions.map((index) => (
//               <li key={index}>
//                 <h3>{options[index].head}</h3>
//                 <p>{options[index].text}</p>
//                 <span>{options[index].amount}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StepThree;



// // import React, { useState } from "react";

// // const StepThree = () => {
// //   const options = [
// //     {
// //       head: "Online service",
// //       text: "Access to multiplayer games",
// //       amount: "+$1/mo",
// //     },
// //     {
// //       head: "Larger storage",
// //       text: "Extra 1TB of cloud save",
// //       amount: "+$2/mo",
// //     },
// //     {
// //       head: "Customizable Profile",
// //       text: "Custom theme on your profile",
// //       amount: "+$2/mo",
// //     },
// //   ];

// //   const [selectedOptions, setSelectedOptions] = useState([]);

// //   const handleCheckboxChange = (index) => {
// //     if (selectedOptions.includes(index)) {
// //       setSelectedOptions(selectedOptions.filter((item) => item !== index));
// //     } else {
// //       setSelectedOptions([...selectedOptions, index]);
// //     }
// //   };

// //   return (
// //     <div className="flex flex-col gap-6">
// //       <div className="flex flex-col gap-2">
// //         <h1 className="text-[hsl(213,96%,18%)] font-[700] text-[30px]">
// //           Pick add-ons
// //         </h1>
// //         <p className="text-[hsl(231,11%,63%)] text-[16px] font-[500]">
// //           Add-ons help enhance your gaming experience.
// //         </p>
// //       </div>
// //       <div className="container mx-auto p-4">
// //         <div className="flex flex-col space-y-6">
// //           {options.map((option, index) => (
// //             <div key={index} className="flex items-center mb-4">
// //               <div className="">
// //                 <input
// //                   type="checkbox"
// //                   checked={selectedOptions.includes(index)}
// //                   onChange={() => handleCheckboxChange(index)}
// //                   className="mr-2"
// //                 />
// //               </div>
// //               <div className="">
// //                 <h3>{option.head}</h3>
// //                 <p>{option.text}</p>
// //                 <span>{option.amount}</span>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //         <div className="mt-4">
// //           <h2>Appended Texts:</h2>
// //           <ul>
// //             {selectedOptions.map((index) => (
// //               <li key={index}>
// //                 <h3>{options[index].head}</h3>
// //                 <p>{options[index].text}</p>
// //                 <span>{options[index].amount}</span>
// //               </li>
// //             ))}
// //           </ul>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default StepThree;
