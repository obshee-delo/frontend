import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { backPage, coursesState } from "../redux/changePage";

const UserCourseDetail = () => {
  const getData = useSelector(coursesState);
  const dispatch = useDispatch();
  const navig = useNavigate();
  const back = () => {
    navig(-1);
    dispatch(backPage);
  };
  return (
    <div className="wc px-[15px]">
      <span
        className="relative top-[-20px] inline-block cursor-pointer"
        onClick={back}
      >
        Назад к курсам
      </span>
      <h2 className="mb-[30px] md:mb-[49px] max-w-[843px] text-[22px] md:text-[26px] font-semibold leading-[120%]">
        Интенсив к Заключительному этапу Всероссийской олимпиаде школьников по
        обществознанию
      </h2>
      <div className="gap-[15px] grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-start">
        {getData.map(
          (el: { title: string; subtitle: string; bg: string }, i: number) => (
            <Link
              className={` p-[15px] self-end flex-[45%] sm:flex-[30%] md:flex-[20%] lg:flex-[17%] h-[106px]  justify-between rounded-[10px] flex flex-col   max-w-[214px]
            ${el.bg === "blue" ? "bg-[#7BCDD0]" : ""} 
            ${el.bg === "pink" ? "bg-[#DEC3E4]" : ""} 
            ${el.bg === "orange" ? "bg-[#FC9F7D]" : ""} 
            ${el.bg === "black" ? "bg-[#272523] text-white" : ""}
            `}
              key={i}
              to="/user/course/detail/videoLessons"
            >
              <span className=" text-[12px]">{el.title}</span>
              <span className="font-medium text-[18px]">{el.subtitle}</span>
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default UserCourseDetail;
