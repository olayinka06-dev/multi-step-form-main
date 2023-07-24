"use client";
import React from 'react'

const SideBar = ({handleClickMenu, activeStep}) => {
    const menuData = [
        {
            number: 1,
            step: "Step 1",
            title: "Your info"
        },
        {
            number: 2,
            step: "Step 2",
            title: "Select plan"
        },
        {
            number: 3,
            step: "Step 3",
            title: "Add-ons"
        },
        {
            number: 4,
            step: "Step 4",
            title: "Summary"
        },
    ];
  return (
    <aside className="h-[25vh] relative md:h-full md:bg-[url(/assets/images/bg-sidebar-desktop.svg)] bg-[url(/assets/images/bg-sidebar-mobile.svg)] bg-cover md:rounded-2xl py-8 px-5 bg-no-repeat bg-center w-full md:w-[370px]">
        <ul className="flex md:flex-col flex-row md:items-start justify-center md:justify-start items-center gap-3">
            {
              menuData.map((md, i)=>(
                <li className='cursor-pointer flex items-center flex-row gap-4' key={i} onClick={()=> handleClickMenu(i)}>
                    <span className={`h-4 ${activeStep === i ? "bg-[hsl(206,94%,87%)]" : "text-white"} w-4 hover:bg-[hsl(206,94%,87%)] rounded-full p-4 flex items-center justify-center border border-white border-solid`}>
                        {md.number}
                    </span>
                    <div className="hidden md:flex flex-col gap-[2px]">
                        <span className='text-[hsl(231,11%,63%)]'>{md.step}</span>
                        <span className='text-white'>{md.title}</span>
                    </div>
                </li>
              ))  
            }
        </ul>
    </aside>
  )
}

export default SideBar