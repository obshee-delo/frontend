import React from "react";
import { teachers } from "../assets/text";
import Title from "./Title";

const Teachers: React.FC = () => {
  return (
    <section className="  mb-[80px] md:mb-[120px] text-[#272523]">
      <div className="wc px-[15px]">
        <div className="flex w-full justify-between items-start gap-[30px] flex-wrap">
          <article className="flex flex-col   flex-[100%] md:flex-[45%]">
            <div className="max-w-[480px] lg:max-w-[552px]">
              <Title text="Преподаватели нашего интенсива" />
            </div>
            <p className=" max-w-[430px] lg:max-w-[485px] text-[22px] font-medium">
              Quam elit luctus vitae sit nulla donec vulputate. Eu quis massa
              vel sem sed adipiscing ultricies. Sit magna duis nisi orci.{" "}
            </p>
          </article>
          {teachers.map((el, i) => (
            <article
              className="relative pt-[40px] px-[75px] pb-[414px] sm:pr-0  sm:pt-[127px]  sm:pb-[100px] sm:pl-[25px] w-[266px] flex-[100%] md:flex-[45%]"
              key={i}
            >
              <img
                className="absolute hidden sm:block z-[2] w-full h-full top-0 left-0 "
                src={el.img}
                alt=""
              />
              <img
                className="absolute block sm:hidden z-[2] w-full h-full top-0 left-0 "
                src={el.smImg}
                alt=""
              />
              <div className="flex flex-col gap-[4px]">
                <h3 className="mb-[6px] max-w-[240px] lg:max-w-[266px] text-[22px] font-medium relative z-[2]">
                  {el.title}
                </h3>
                {el.text1 && (
                  <span className="text-[14px] max-w-[240px] lg:max-w-[266px] relative z-[2]">
                    {el.text1}
                  </span>
                )}
                {el.text2 && (
                  <span className="text-[14px] max-w-[240px] lg:max-w-[266px] relative z-[2]">
                    {el.text2}
                  </span>
                )}
                {el.text3 && (
                  <span className="text-[14px] max-w-[240px] lg:max-w-[266px] relative z-[2]">
                    {el.text3}
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teachers;
