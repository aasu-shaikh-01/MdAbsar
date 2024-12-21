import React, { useState } from "react";
import ComputerModelContainer from "./computer/ComputerModelContainer";
import PhoneModelContainer from "./computer copy/PhoneModelContainer";
import IpadModelContainer from "./computer copy 2/IpadModelContainer";

const Services = () => {
  const [mac, setMac] = useState(true);
  const [pad, setPad] = useState(false);
  const [phone, setPhone] = useState(false);
  console.log(mac, pad, phone);

  return (
    <div className="flex h-screen flex-col sm:flex-row sm:justify-between sm:gap-44 items-center">
      <div className="sm:mr-3 ml-5 sm:ml-0">
        <h1 className="ml-4">👉 Wallpaper will be updated soon...</h1>
        <h1 className="ml-4">
          👉 UI Will be illustrated with different size of screen...
        </h1>
        <h1 className="ml-4">👉 Then you will be able to decide the UX...</h1>
        <a
          onClick={() => {
            setPad(false);
            setPhone(false);
            setMac(true);
          }}
          className="bg-[#2f213f] mt-4 w-[18rem] flex justify-center items-center sm:p-6 p-4 rounded-lg ml-4 text-lg cursor-pointer"
        >
          Web On Laptop/Desktop
        </a>
        <a
          onClick={() => {
            setPhone(false);
            setMac(false);
            setPad(true);
          }}
          className="bg-[#2f213f] mt-4 w-[18rem] flex justify-center items-center sm:p-6 p-4 rounded-lg ml-4 text-lg cursor-pointer"
        >
          Web On Phone
        </a>
        <a
          onClick={() => {
            setPad(false);
            setMac(false);
            setPhone(true);
          }}
          className="bg-[#2f213f] mt-4 w-[18rem] flex justify-center items-center sm:p-6 p-4 rounded-lg ml-4 text-lg cursor-pointer"
        >
          Web On Tablet
        </a>
      </div>
      <div className="sm:mt-0 mt-8">
        <div
          className={`${
            !mac ? "hidden" : ""
          } sm:ml-2 sm:h-screen h-[45vh] sm:w-[57vw] w-[90vw]`}
        >
          <ComputerModelContainer />
        </div>
        <div
          className={`${
            !pad ? "hidden" : ""
          } sm:h-screen h-[45vh] sm:w-[57vw] w-[90vw]`}
        >
          <PhoneModelContainer />
        </div>
        <div
          className={`${
            !phone ? "hidden" : ""
          } sm:h-screen h-[45vh] sm:w-[57vw] w-[90vw]`}
        >
          <IpadModelContainer />
        </div>
      </div>
    </div>
  );
};

export default Services;
