import React from "react";
import { useNavigate } from "react-router-dom";
import Video from "../components/Video";
import Lessons from "./../components/Lessons";

const Videolessons = () => {
  const navigateBack = useNavigate();
  return (
    <div className="wc px-[15px]">
      <span
        className="cursor-pointer relative top-[-15px] sm:top-[-30px]"
        onClick={() => navigateBack(-1)}
      >
        назад к блокам
      </span>
      <h2 className="text-[26px] mb-[50px] font-semibold w-full relative after:absolute after:left-0 after:bottom-[-11px] sm:after:bottom-[-15px] after:z-50 after:w-full after:h-[2px] after:bg-[#d4cbbf]">
        Блок 2. Экономика
      </h2>
      <div className="w-full flex flex-col md:flex-row justify-center items-center md:items-start md:justify-between gap-[10px]">
        <Lessons />
        <div className="hidden sm:block">
          <Video />
        </div>
      </div>
    </div>
  );
};

export default Videolessons;
