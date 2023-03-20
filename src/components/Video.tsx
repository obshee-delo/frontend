import React from "react";
import ReactPlayer from "react-player";
import { images } from "./../assets/img";
import { useNavigate } from "react-router-dom";

const Video: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="px-[15px] sm:px-0">
      <span
        onClick={() => navigate(-1)}
        className="block sm:hidden relative top-[-15px] sm:top-[-30px]"
      >
        Назад к списку лекций
      </span>
      <h3 className="mb-[30px] max-w-[552px] text-[26px] font-semibold">
        Тема лекции: Название темы лекции очень длинное
      </h3>
      <div className="flex flex-col sm:flex-row mb-[20px] gap-[15px] w-full">
        <a
          className="flex px-[25px] py-[8px] border border-solid border-black gap-[2px] w-full sm:w-[242px] lg:w-[291px] rounded-[10px] justify-between"
          href={images.about}
          download={images.blackStar}
        >
          <div className="flex flex-col gap-[2px]">
            <span className=" leading-[100%] font-medium inline-block mb-[5px]">
              Лекция № 1.pdf
            </span>
            <span className=" leading-[100%] text-[12px]">576 кб</span>
          </div>
          <img className="w-[10px]" src={images.arr} alt="" />
        </a>
        <a
          className="flex px-[25px] py-[8px] border border-solid border-black gap-[2px] w-full sm:w-[242px] lg:w-[291px] rounded-[10px] justify-between"
          href=""
          download={true}
        >
          <div className="flex flex-col gap-[2px]">
            <span className=" leading-[100%] font-medium inline-block mb-[5px]">
              Домашнее задание.pdf
            </span>
            <span className=" leading-[100%] text-[12px]">576 кб</span>
          </div>
          <img className="w-[10px]" src={images.arr} alt="" />
        </a>
      </div>
      <div className="w-full h-[194px] sm:h-auto overflow-hidden sm:w-[500px] md:w-[500px] lg:w-[680px] xl:w-[746px] rounded-[20px] ">
        <ReactPlayer
          controls={true}
          width="100%"
          url="https://www.youtube.com/watch?v=IvWL27GlZSE"
        />
      </div>
    </div>
  );
};

export default Video;
