import React from "react";
import { header, headerList } from "../assets/text";
import Marquee from "react-fast-marquee";
import { toast } from "react-toastify";
const Header: React.FC = () => {
  return (
    <header
      className={`pb-7 mb-[80px] fixed z-[1] h-[100vh]    bg-cover bg-center bg-no-repeat relaive max-w-[100vw]  pt-[70px] sm:pt-[160px]`}
    >
      <div className="px-[15px] top-0 left-0  flex justify-end flex-col md:flex-row wc relative mb-[80px]">
        <h1 className="text-[#272523] sm:absolute relative left-0 sm:left-[15px] top-0 mb-[70px] lg:mb-0 sm:whitespace-nowrap leading-[105%] lg:max-w-[647px] text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px]">
          Подготовка <br className="hidden sm:block" /> к олимпиадам –{" "}
          <br className="hidden sm:block" />
          <span className="font-bold">это общее дело</span>
        </h1>
        <div className="xl:relative max-w-[fit-content] mb-[50px] sm:mb-[45px] self-end   grid grid-cols-2 grid-rows-[auto_auto]  md:grid-rows-[auto_auto_auto] md:grid-cols-[auto_auto_auto] h-fit ">
          {header.map((el, i) => (
            <article
              key={i}
              className={`p-[10px] sm:p-[25px] sm:h-[164px] max-w-[216px]  ${
                el.lastImg
                  ? "  hidden  xl:flex sm:justify-center sm:items-center border-none max-w-fit"
                  : ""
              }
              ${el.img ? "border-none flex justify-center items-center" : ""} ${
                el.none === true
                  ? "hidden md:block border-none w-0 h-0"
                  : "border border-solid border-black"
              } rounded-[10px] lg:w-[310px]`}
            >
              {el.img ? (
                <div>
                  <img src={el.img} alt="" />
                </div>
              ) : null}
              {el.count && (
                <span className="font-semibold leading-[0.5] inline-block mb-[4px] sm:text-[48px]">
                  {el.count}
                </span>
              )}
              {el.text && (
                <p className="w-[150px] sm:w-[178px] leading-[1.1] text-[14px] text-[#272523]">
                  {el.text}
                </p>
              )}
              {el.lastImg && (
                <div className="hidden md:block">
                  <img className="w-[140px]" src={el.lastImg} alt="" />
                </div>
              )}
              {el.none && <div className="hidden xl:block"></div>}
            </article>
          ))}
        </div>
      </div>
      <Marquee gradient={false} className="gap-[30px] mar ">
        {headerList.map((el, i) => (
          <div
            className="py-1 px-4 border border-solid border-black rounded-lg mx-[20px] font-medium"
            key={i}
          >
            {el}
          </div>
        ))}
      </Marquee>
    </header>
  );
};

export default Header;
