import Image from "next/image";
import React from "react";

const ThanksGiving = () => {
  return (
    <div className="flex h-full w-full py-32 flex-col gap-6 justify-center text-center items-center">
      <div className="">
        <Image
          alt="thanks"
          src={"/assets/images/icon-thank-you.svg"}
          height={70}
          width={70}
        />
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-[hsl(213,96%,18%)] font-[700] text-[30px]">Thank you!</h1>
        <p className="text-[hsl(231,11%,63%)] text-[16px] font-[500]">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
};

export default ThanksGiving;
