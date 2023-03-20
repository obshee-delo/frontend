import React from "react";
import Title from "./Title";
import { Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper";
import "swiper/css/scrollbar";

// Import Swiper styles
import "swiper/css";
import { soonCourse } from "../assets/text";

const Sooner: React.FC = () => {
  let count: number;
  let screen = window.screen.width;
  if (screen > 1200) count = 4;
  if (screen < 1200 && screen > 850) count = 3;
  if (screen < 850 && screen > 640) count = 2;
  if (screen < 640) count = 1;
  return (
    <section className="wc px-[15px] pb-11">
      <Title text="Ближайшие курсы" />
      <Swiper
        className="pl-[15px] sm:pl-0"
        modules={[Scrollbar, Thumbs]}
        spaceBetween={50}
        slidesPerView={count}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
      >
        {soonCourse.map((el, i) => (
          <SwiperSlide key={i} className="flex mb-[30px] cursor-grab ">
            <div className="py-[30px]  px-[15px] rounded-[30px] border border-solid border-black h-full grid grid-rows-[30px_35px___218px]">
              <span className="mb-[9px] block text-[22px] font-bold">
                {el.date}
              </span>
              <div className="flex items-center font-normal sm:font-bold gap-2 mb-[5px]">
                <span>{el.day}</span>
                <span>|</span>
                <span>{el.time}</span>
              </div>
              <h3 className="text-[22px] sm:text-[36px] flex-grow max-w-[230px] sm:max-w-auto">
                {el.title}
              </h3>
              <img
                src={el.img}
                className="w-[204px] h-[199px] sm:w-[231px] sm:h-[224px] flex-grow-0"
                alt=""
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Sooner;
