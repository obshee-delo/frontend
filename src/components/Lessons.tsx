import React from "react";
import { lessons } from "../assets/text";
import { images } from "./../assets/img";
import { Link } from "react-router-dom";

const Lessons: React.FC = () => {
  return (
    <div className="h-auto sm:h-[720px] overflow-y-scroll flex flex-col w-full sm:w-fit   py-[15px] scrollbar scrollbar-none  border border-solid border-black rounded-[20px]">
      {lessons.map((el, i) => (
        <>
          <Link
            to="/user/course/detail/videoLessons/video"
            className={`sm:hidden flex flex-col w-full sm:max-w-[261px] px-[20px] py-[15px] relative
        ${el.status === "do" ? "bg-[#c8e2db]" : ""}
        ${el.status === "willDo" ? "text-[#F77676]" : ""}
        `}
            key={i}
          >
            <img
              src={images.lessonChecked}
              className={`absolute ${
                el.status !== "done" ? "hidden" : ""
              } left-[6px] top-[6px] w-[10px] h-[10px]`}
              alt=""
            />
            <span className="inline-block mb-[10px] text-[12px]">
              {el.data}
            </span>
            <span className="text-[18px] font-medium">{el.text}</span>
          </Link>
          <div
            className={`hidden sm:flex flex-col max-w-[261px] px-[20px] py-[15px] relative
          ${el.status === "do" ? "bg-[#c8e2db]" : ""}
          ${el.status === "willDo" ? "text-[#F77676]" : ""}
          `}
            key={i}
          >
            <img
              src={images.lessonChecked}
              className={`absolute ${
                el.status !== "done" ? "hidden" : ""
              } left-[6px] top-[6px] w-[10px] h-[10px]`}
              alt=""
            />
            <span className="inline-block mb-[10px] text-[12px]">
              {el.data}
            </span>
            <span className="text-[18px] font-medium">{el.text}</span>
          </div>
        </>
      ))}
    </div>
  );
};

export default Lessons;
