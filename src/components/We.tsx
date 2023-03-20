import React from "react";
import Title from "./Title";
import { images } from "../assets/img";

const We: React.FC = () => {
  return (
    <section className="pb-[80px]  md:pb-[120px] text-[#272523]">
      <div className="wc px-[15px]">
        <Title text="Кто мы?" />
        <div className="relative w-full sm:pb-[423px]">
          <p className="z-[20] relative max-w-[717px] mb-[28px] sm:mb-[0px] text-[22px] leading-[26px] sm:leading-[31px] sm:text-[26px] font-semibold">
            «Общее Дело» - онлайн-школа, направленная на подготовку школьников к
            олимпиадам по обществознанию, праву, истории, географии, литературе,
            русскому языку и биологии. Кроме этого, мы занимался проведением
            открытых мероприятий для старшеклассников и студентов.
          </p>
          <img
            className="sm:absolute left-0 top-0 w-full h-[198px] sm:w-full sm:h-full"
            src={images.about}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default We;
