import React from "react";
import { questions } from "../assets/text";
import Btn from "./Btn";
import Title from "./Title";
import { BsArrowDownRight } from "react-icons/bs";
import { images } from "../assets/img";
const Questions: React.FC = () => {
  return (
    <section className="mb-[80px] md:mb-[120px] text-[#272523] relative">
      <div className="wc px-[15px]">
        <div className="flex items-start flex-col lg:flex-row gap-[35px] lg:gap-0 justify-between">
          <div>
            <div>
              <Title text="Часто задаваемые вопросы" />
              <p className="w-full lg:max-w-[513px] text-[22px] font-medium mb-[25px]">
                Мы собрали все вопросы, которые чаще всего нам задают студенты
                по поводу интенсива. Если не нашел ответ - можешь задать свой:)
              </p>
              <Btn text="Задать свой вопрос" />
            </div>
          </div>
          <div className="flex flex-col gap-[15px]  w-full md:w-auto">
            {questions.map((el, i) => (
              <article
                className="p-[15px] sm:px-[20px] sm:py-[25px] rounded-[10px] border border-solid border-[#272523] relative"
                key={i}
              >
                <p className="w-full lg:max-w-[473px] pr-4 sm:pr-[4px]">{el}</p>
                <img
                  className="absolute top-[30px] sm:top-[48px] text-[18px]  right-[18px]"
                  src={images.arr}
                  alt=""
                />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Questions;
