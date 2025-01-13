import React from "react";
import mypho from "../../../public/assets/soya.png";

const About = () => {
  return (
    <div className="h-screen sm:mt-0 flex justify-center flex-col sm:block items-center">
      <div className="my-4 sm:my-0">
        <h1 className="sm:text-3xl text-xl font-bold flex justify-center">
          All About Me
        </h1>
        <hr className="bg-white h-0.5 my-2 w-64 mx-auto sm:w-1/2" />
      </div>
      {/* <div className="p-4 sm:w-[110rem]"> */}

      <div
        className="text-white flex justify-center flex-col sm:flex-row items-center gap-4 rounded-xl w-[91.8vw]
     shadow-2xl h-[90vh]"
        id="About"
      >
        <div className="sm:w-[300rem] sm:p-4">
          <img
            src={mypho}
            className="rounded-lg shadow-2xl sm:w-[200rem] mb-12"
            alt=""
          />
        </div>
        <div className="p-4f sm:w-[300rem]">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            tempore totam necessitatibus debitis nam fuga neque nulla, ratione
            labore accusamus molestiae! Voluptatum nesciunt provident
            repudiandae Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Assumenda tempore totam necessitatibus debitis nam fuga neque
            nulla, ratione labore accusamus molestiae! Voluptatum nesciunt
            provident repudiandae voluptates earum, mollitia sit quasi!
          </p>
        </div>
      </div>
      {/* <div
        className="text-white flex justify-center flex-col sm:flex-row items-center gap-8 mr-12 rounded-xl
     shadow-2xl"
        id="About"
      >
        <div className="sm:w-[300rem] p-4">
          <img src={mypho} className="rounded-lg shadow-2xl sm:w-[200rem] mb-12" alt="" />
        </div>
        <div className="p-4 w-[300rem]">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            tempore totam necessitatibus debitis nam fuga neque nulla, ratione
            labore accusamus molestiae! Voluptatum nesciunt provident
            repudiandae Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Assumenda tempore totam necessitatibus debitis nam fuga neque
            nulla, ratione labore accusamus molestiae! Voluptatum nesciunt
            provident repudiandae voluptates earum, mollitia sit quasi!
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default About;
