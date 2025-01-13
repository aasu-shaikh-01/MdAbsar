import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoSchool } from "react-icons/io5";

const Education = () => {
  return (
    <div className="flex sm:h-screen flex-col items-center justify-center sm:mt-0">
      <div className="sm:w-[90vw]" id="Education">
        <div className="">
          <h1 className="sm:text-3xl text-xl font-bold flex justify-center">
            Education Details
          </h1>
          <hr className="bg-white h-0.5 my-2 sm:mx-64 mx-8" />
        </div>
        <div className="p-4 mt-8 rounded-md">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "black", color: "white" }}
              contentArrowStyle={{
                borderRight: "16px solid  white",
              }}
              date="2020 - session"
              iconStyle={{ background: "black", color: "white" }}
              icon={<IoSchool />}
            >
              <h3 className="vertical-timeline-element-title">
                Polytechnic (3-Years Diploma in Computer Science And Engineering
                From Goverment Polytechnic Purnea).
              </h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "black", color: "white" }}
              contentArrowStyle={{
                borderRight: "16px solid  white",
              }}
              date="2024 - present-(2nd-year)"
              iconStyle={{ background: "black", color: "white" }}
              icon={<IoSchool />}
            >
              <h4 className="vertical-timeline-element-subtitle">
                B.Tech in Computer Science And Engineering (pursuing, in 2nd
                year ) From PCE(Govt: Purnea College Of Engineering) Purnea
              </h4>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default Education;
