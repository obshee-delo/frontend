import React from "react";
import Title from "./Title";
import { images } from "../assets/img";

const Wait: React.FC = () => {
  return (
    <section className="  mb-[80px] md:mb-[120px] text-[#272523]">
      <div className="wc px-[15px]">
        <div className="flex flex-wrap  md:flex-nowrap justify-between items-start">
          <div className="flex flex-col max-w-[649px] mb-[0] sm:mb-[20px]">
            <Title text="Что тебя ждет?" />
            <h3 className="text-[22px] sm:text-[26px] font-semibold mb-[20px] sm:mb-[15px] leading-[100%]">
              На нашем двухмесечном Интесиве по подготовке к перечневым
              олимпиадам по обществознанию
            </h3>

            <span className="mb-[10px] pl-[26px] relative">
              будет уделено внимание только практическим занятиям
              <img
                className="absolute top-[4px] left-0"
                src={images.speakerStar1}
                alt=""
              />
            </span>
            <span className="mb-[20px] sm:mb-[15px] pl-[26px] relative">
              на конкретных примерах вам станет понятна специфика перечневых
              олимпиад по обществознанию для поступления в лучшие вузы России
              <img
                className="absolute top-[4px] left-0"
                src={images.wait2}
                alt=""
              />
            </span>
            <p>
              на конкретных примерах вам станет понятна специфика перечневых
              олимпиад по обществознанию для поступления в лучшие вузы России
            </p>
          </div>
          <img
            className="lg:w-[415px] hidden sm:block w-[400px] h-[300px] lg:h-[380px]"
            src={images.wait}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Wait;
