import React from "react";
import { images } from "../assets/img";
import { price } from "../assets/text";
import Btn from "./Btn";
import Title from "./Title";

const Price: React.FC = () => {
  return (
    <section className="mb-[80px] md:mb-[120px] text-[#272523] relative">
      <div className="wc px-[15px]">
        <Title text="Стоимость интенсива" />
        <div className="grid min-h-full grid-cols-1 grid-rows-1 md:grid-cols-[1fr_1fr]  lg:grid-cols-[1fr_1fr_1fr] gap-[30px] md:grid-rows-[1fr_1fr] lg:grid-rows-[1fr_auto_auto]">
          {price.map((el, i) => (
            <article
              className={`rounded-[30px] m-[0_auto] ${
                el.black && "bg-[#272523] text-white"
              } border relative border-solid border-[#272523] w-fit p-[25px] sm:py-[30px] sm:px-[40px] items-center flex flex-col `}
              key={i}
            >
              <div className="info h-full mb-[25px] sm:mb-[40px] flex flex-col items-center max-w-[295px] sm:max-w-[278px] ">
                <h3 className="mb-[20px] text-[26px] font-semibold  text-center">
                  {el.title}
                </h3>
                <p className="mb-[5px] leading-[100%] text-[14px]  text-center">
                  {el.subtext}
                </p>
                <p className=" text-[14px] leading-[100%]  text-center">
                  {el.text}
                </p>
              </div>

              <span className="text-[32px] sm:text-[38px] h-fit mb-[25px] sm:mb-[40px] font-bold">
                {el.price}
              </span>
              {el.black ? (
                <Btn changeColor={true} text="Приобрести" />
              ) : (
                <Btn changeColor={false} text="Приобрести" />
              )}
              {el.black && (
                <img
                  className="absolute w-[108px] z-[3] h-[108px] left-[-20px] top-0"
                  src={images.oSTar}
                  alt=""
                />
              )}
              {el.black && (
                <img
                  className="absolute w-[140px] z-[3] h-[240px] right-0 bottom-0"
                  src={images.bOStar}
                  alt=""
                />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Price;
