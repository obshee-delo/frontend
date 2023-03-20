import React from "react";
import { images } from "../assets/img";

const Footer: React.FC = () => {
  return (
    <section className="bg-[#272523] relative z-[3] text-[#FFF4E6] pt-[35px] pb-[37px]  lg:pt-[35px] slgm:pb-[50px]">
      <div className="wc px-[15px] flex flex-col lg:flex-row justify-between lg:items-end gap-[30px]">
        <div className="flex flex-col">
          <span className="text-[20px] inline-block mb-[2px] lg:text-[38px]">
            Готовьтесь к олимпиадам всесте{" "}
          </span>
          <span className="text-[20px] lg:text-[38px] font-bold">
            <span className="font-normal text-[18px] lg:text-[35px]">c</span>{" "}
            ОБЩИМ ДЕЛОМ!
          </span>
        </div>
        <div className="flex justify-between w-full items-center lg:max-w-[225px]">
          <img src={images.vk} alt="vk" />
          <span className=" underline text-[12px]">
            Политика конфиденциальностиfgf
          </span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
