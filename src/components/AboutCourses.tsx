import React from "react";
import { coursesPlus } from "../assets/text";

// Страница определенного курса, первый блок после шапки:о плюсах курса
const AboutCourses: React.FC = () => {
  return (
    <section className="mb-[80px] md:mb-[120px] text-[#272523]">
      <div className="flex wc px-[15px] flex-col sm:flex-row flex-wrap">
        {coursesPlus.map((el, i) => (
          <article
            key={i}
            className={`flex-[100%] sm:flex-[48%] xl:flex-[24%] ${
              !el.img
                ? "border border-solid border-[#272523] rounded-[10px]"
                : ""
            } `}
          >
            {el.img ? (
              <div className="flex justify-center items-center p-[57px] ">
                <img className="w-[130px] h-[130px]" src={el.img} alt="" />
              </div>
            ) : (
              <div className="p-[25px] block sm:grid grid-cols-1 sm:grid-rows-2 xl:grid-rows-[1fr_minmax(70px,1fr)]">
                <h3 className="text-[22px] xl:text-[26px] mb-[30px] sm:mb-[37px] font-semibold max-w-full xl:max-w-[247px]">
                  {el.title}
                </h3>
                <p className="max-w-full xl:max-w-[247px] text-[14px]">
                  {el.text}
                </p>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default AboutCourses;
