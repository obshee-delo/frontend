import React from "react";
import { reason } from "../assets/text";
import Title from "./Title";

const Reason: React.FC = () => {
  const partOfReason = [...reason].splice(0, 3);
  const [count, setCount] = React.useState<boolean>(true);
  return (
    <section className="mb-[80px] md:mb-[120px] text-[#272523]">
      <div className="wc px-[15px]">
        <Title />
        <div
          className={`flex gap-[15px] sm:gap-[20px] ${
            count ? "lg:gap-0" : "gap-[15px]"
          }  justify-between w-full  mb-[30px] flex-wrap`}
        >
          {(count ? partOfReason : reason).map((el, i) => (
            <article
              className="flex relative m-[0_auto] w-full  sm:w-fit flex-col rounded-[30px] border border-solid border-[#272523] items-center lg:p-[16px] lg:pb-[30px] xl:p-[20px] xl:pb-[56px]"
              key={i}
            >
              <img
                className="mb-[20px] w-[174px] h-[174px]"
                src={el.img}
                alt=""
              />
              <p className="w-[308px] text-center text-[22px] md:text-[26px] font-semibold">
                {el.text}
              </p>
            </article>
          ))}
        </div>
        <button
          onClick={() => setCount(!count)}
          className="border border-solid border-[#272523] py-[20px] w-full flex items-center justify-center rounded-[18px] text-[22px] md:text-[26px] font-semibold"
        >
          И МНОГИМ ДРУГИМ
        </button>
      </div>
    </section>
  );
};

export default Reason;
