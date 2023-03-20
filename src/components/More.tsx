import React from "react";
import Title from "./Title";
import { more } from "../assets/text";

const More: React.FC = () => {
  return (
    <section className="pb-11  mb-[80px] md:mb-[120px]">
      <div className="wc px-[15px]">
        <Title text="Еще больше наших проектов" />
        <div className="flex flex-col items-center sm:block justify-center ">
          {more.map((el, i) => (
            <article
              className="flex flex-col  w-fit sm:w-auto sm:grid sm:grid-cols-[316px_auto] sm:grid-rows-1 gap-[15px] sm:gap-[30px] items-start rounded-[30px] border border-solid border-[#272523] p-[25px] mb-[15px] sm:mb-[30px]"
              key={i}
            >
              <img
                className="mb-[30px] w-[295px]  sm:w-[316px]  min-h-[100%]"
                src={el.img}
                alt=""
              />
              <div className="sm:grid sm:grid-cols-1 sm:grid-rows-[minmax(100px,150px)___70px]">
                <h3 className="max-w-[285px] text-[22px] sm:text-[26px] sm:max-w-[663px] sm:mb-[57px] font-semibold mb-[25px]">
                  {el.title}
                </h3>
                <p className="max-w-[295px] sm:max-w-[726px] mb-[15px] ">
                  {el.text}
                </p>
                <small className="text-[18px] font-medium">{el.subtitle}</small>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default More;
