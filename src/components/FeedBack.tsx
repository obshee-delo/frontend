import React from "react";
import Title from "./Title";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { feedback } from "../assets/text";
const FeedBack: React.FC = () => {
  return (
    <section className="  pb-[80px] pd:mb-[120px] text-[#272523]">
      <div className="wc px-[15px]">
        <Title text="Отзывы студентов о нас" />
        <div>
          <Swiper
            className="hidden md:block"
            spaceBetween={20}
            slidesPerView={2}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {feedback.map((el, i) => (
              <SwiperSlide className="flex cursor-grab" key={i}>
                <img
                  className="w-[193px] md:w-[170px] lg:h-[328px]"
                  src={el.img}
                  alt=""
                />
                <div
                  className={`md:py-[15px] lg:py-[30px] md:px-3 lg:px-5 md:rounded-[15px] lg:rounded-[30px] h-[328px] md:max-w-[280px] lg:max-w-[309px]
              ${el.color === "pink" ? "bg-[#DEC3E4]" : null}
              ${el.color === "red" ? "bg-[#FC9F7D]" : null}
              ${el.color === "blue" ? "bg-[#7BCDD0]" : null}
              
              `}
                >
                  <h3 className="mb-[5px] text-[26px]">{el.name}</h3>
                  <p className=" mb-[20px] font-bold text-[12px] max-w-[240px] lg:max-w-[309px]">
                    {el.subtitle}
                  </p>
                  <p className="max-w-[240px] lg:max-w-[309px] md:pr-0 lg:pr-4 pb-1 md:h-[170px] lg:h-[198px] overflow-y-scroll scrollbar  scrollbar-thumb-[rgba(1,1,1,0.1)] scrollbar-thumb-w-[1px] thumb-thin-[5px]">
                    {el.text}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex flex-col items-center gap-[15px] md:hidden">
            {feedback.map((el, i) => (
              <div className=" " key={i}>
                <img className="w-[305px] h-[206px]" src={el.img} alt="" />
                <div
                  className={`py-[15px] px-[25px] lg:px-5 rounded-[30px] w-[305px]
              ${el.color === "pink" ? "bg-[#DEC3E4]" : null}
              ${el.color === "red" ? "bg-[#FC9F7D]" : null}
              ${el.color === "blue" ? "bg-[#7BCDD0]" : null}
              
              `}
                >
                  <h3 className="mb-[5px] text-[22px]">{el.name}</h3>
                  <p className=" mb-[15px] font-bold text-[12px] w-[295px]">
                    {el.subtitle}
                  </p>
                  <p className="max-w-[295px] ">{el.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedBack;
