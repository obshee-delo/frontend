import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { userState } from "../redux/userSLice";
import { userCourses } from "../assets/text";
import { changePage } from "../redux/changePage";
import { Link } from "react-router-dom";
const UserCourse: React.FC = () => {
  const get = useSelector(userState);
  const dispacth = useDispatch();
  const person = get.exist;
  const [existC, setExistC] = React.useState<boolean>(true);
  const sendTOCourse = (el) => {
    dispacth(changePage(el));
  };
  const additionCourses = useSelector((state) => state.page.courses);
  return (
    <section className="wc px-[15px] text-[#272523]">
      {existC ? (
        <div className="body">
          <div>
            <div className="flex flex-col sm:flex-row mb-[49px] relative justify-between items-center">
              <h2 className="text-[26px] font-semibold text-left self-start mb-[20px] sm:mb-[0]">
                Мое обучение
              </h2>
              <div className="flex w-full sm:w-fit justify-between gap-[30px]">
                <span
                  className={`${
                    existC
                      ? "font-medium text-[#272523] relative after:absolute after:left-0 after:bottom-[-11px] sm:after:bottom-[-18px] after:z-50 after:w-full after:h-[2px] after:bg-[#272523]"
                      : "text-[#736e67] font-medium"
                  } cursor-pointer self-start flex-[50%]`}
                  onClick={() => setExistC(true)}
                >
                  Прохожу
                </span>
                <span
                  className={`${
                    !existC
                      ? "font-medium text-[#272523] relative after:absolute after:left-0 after:bottom-[-11px] sm:after:bottom-[-18px] after:z-50 after:w-full after:h-[2px] after:bg-[#272523]"
                      : "text-[#736e67] font-medium"
                  } cursor-pointer self-start flex-[50%]`}
                  onClick={() => setExistC(false)}
                >
                  Завершено
                </span>
              </div>
              <div className="absolute  left-0 h-[1px] w-full bg-[#d0c6bb] bottom-[-10px]"></div>
            </div>
            {userCourses
              .filter((el) => el.status)
              .map((el, i) => (
                <Link to="/user/course/detail">
                  <article
                    onClick={() => sendTOCourse(el.additional)}
                    key={i}
                    className={` ${
                      el.cId % 2 ? "bg-[#DEC3E4]" : "bg-[#272523] text-white"
                    } mb-[30px] rounded-[30px] pr-[60px] gap-[45px] sm:gap-[15px] xl:gap-0 flex-col sm:flex-row flex justify-between relative pl-[25px] py-[25px]`}
                  >
                    <div className="max-w-[805px]">
                      <h4 className="mb-[13px] sm:mb-[30px] lg:mb-[52px] leading-[120%] text-[18px] md:text-[22px] font-medium">
                        {el.title}
                      </h4>
                      <p
                        className={`text-[14px] relative sm:after:hidden after:absolute after:content-[''] after:h-[1px] after:w-full after:left-[0px] after:bottom-[-20px] ${
                          el.cId % 2 ? "after:bg-[#272523] " : "after:bg-white"
                        } `}
                      >
                        {el.text}
                      </p>
                    </div>
                    <span className="hidden xl:inline-block w-[1px] bg-[#272523] "></span>
                    <div className="flex flex-col w-[202px] gap-[10px] sm:gap-[12px]">
                      <div className="flex flex-col">
                        <span className="text-[12px]">Продолжительность</span>
                        <span className="text-[18px] font-medium">
                          {el.duration}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[12px]">Статус</span>
                        <span className="text-[18px] font-medium">
                          {el.status}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[12px]">Прогресс</span>
                        <span className="text-[18px] font-medium">
                          {el.progress} / 100
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
          </div>
        </div>
      ) : (
        <div>
          <div className="flex flex-col sm:flex-row mb-[49px] relative justify-between items-center">
            <h2 className="text-[26px] font-semibold text-left self-start mb-[20px] sm:mb-[0]">
              Мое обучение
            </h2>
            <div className="flex w-full sm:w-fit justify-between gap-[30px]">
              <span
                className={`${
                  existC
                    ? "font-medium text-[#272523] relative after:absolute after:left-0 after:bottom-[-11px] sm:after:bottom-[-18px] after:z-50 after:w-full after:h-[2px] after:bg-[#272523]"
                    : "text-[#736e67] font-medium"
                } cursor-pointer self-start flex-[50%]`}
                onClick={() => setExistC(true)}
              >
                Прохожу
              </span>
              <span
                className={`${
                  !existC
                    ? "font-medium text-[#272523] relative after:absolute after:left-0 after:bottom-[-11px] sm:after:bottom-[-18px] after:z-50 after:w-full after:h-[2px] after:bg-[#272523]"
                    : "text-[#736e67] font-medium"
                } cursor-pointer self-start flex-[50%]`}
                onClick={() => setExistC(false)}
              >
                Завершено
              </span>
            </div>
            <div className="absolute  left-0 h-[1px] w-full bg-[#d0c6bb] bottom-[-10px]"></div>
          </div>
          {userCourses
            .filter((el) => el.result)
            .map((el, i) => (
              <article
                key={i}
                className={` ${
                  el.cId % 2 ? "bg-[#FC9F7D]" : "bg-[#7BCDD0] "
                } mb-[30px] rounded-[30px] pr-[25px] sm:pr-[60px] gap-[45px] sm:gap-[15px] xl:gap-0 flex-col sm:flex-row flex justify-between relative pl-[25px] py-[25px]`}
              >
                <div className="max-w-[805px]">
                  <h4 className="mb-[13px] sm:mb-[30px] lg:mb-[52px] leading-[120%] text-[18px] md:text-[22px] font-medium">
                    {el.title}
                  </h4>
                  <p
                    className={`text-[14px] relative sm:after:hidden after:absolute after:content-[''] after:h-[1px] after:w-full after:left-[0px] after:bottom-[-20px] after:bg-[#272523] `}
                  >
                    {el.text}
                  </p>
                </div>
                <span className=" hidden xl:inline-block w-[1px] bg-[#272523] "></span>
                <div className="flex flex-col w-[202px] gap-[10px] sm:gap-[12px]">
                  <div className="flex flex-col">
                    <span className="text-[12px]">Продолжительность</span>
                    <span className="text-[18px] font-medium">
                      {el.duration}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[12px]">Результат</span>
                    <span className="text-[18px] font-medium">{el.result}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[12px]">Прогресс</span>
                    <span className="text-[18px] font-medium">
                      {el.progress} / 100
                    </span>
                  </div>
                </div>
              </article>
            ))}
        </div>
      )}
    </section>
  );
};

export default UserCourse;
