import React from "react";
import { filter, filterContent } from "../assets/text";
import Title from "./Title";
import { images } from "../assets/img";
import { useAppDispatch, useAppSelector } from "../redux/state";
import { coursesState } from "./../redux/changePage";
import { filteredState, getFilteredCourse } from "../redux/filterCourceSlice";
// компонент на странице определенного курса

const Chose: React.FC<any> = (props) => {
  const dispatch = useAppDispatch();
  const cources = useAppSelector(coursesState);
  const filterCources = useAppSelector(filteredState);
  const [keyTab, setKkeyTab] = React.useState<string>(filter[0].name);
  const callFilteredData = (el: { name: string }) => {
    setKkeyTab(el.name);
    dispatch(getFilteredCourse(el.name));
  };
  return (
    <section className="pb-[80px] md:pb-[120px] text-[#272523]">
      <div className="wc px-[15px]">
        <div className="max-w-[784px] leading-[100%]">
          <Title text={props.title} />
        </div>
        {props.filter ? (
          <div className="flex flex-wrap gap-[5px] sm:gap-3 mb-[40px]">
            {/* {filter.map((el, i) => ( */}
            {filter.map((el, i) => (
              <div
                className={`${
                  el.name === keyTab ? "bg-[#FC9F7D]" : ""
                } py-[5px] sm:py-[6px] px-[24px] cursor-pointer rounded-[12px] border border-solid border-[#272523] text-[18px] sm:text-[22px] font-medium`}
                onClick={callFilteredData.bind("", el)}
                key={i}
              >
                {el.name}
              </div>
            ))}
          </div>
        ) : null}
        <div className="flex flex-col  gap-[30px]">
          {props.data

            .filter((el: { [key: string]: string }[]) => el.key === keyTab)
            .map((el: { [key: string]: string }, i: number) => (
              // filterCources.filteredData.map(
              //   (el: { [key: string]: string }, i: number) => (
              <article
                key={i}
                className="flex flex-col lg:flex-row lg:pr-[25px] gap-0 sm:gap-[20px] items-center border border-solid border-[#272523] rounded-[30px]"
              >
                <div
                  className={`inline-flex relative min-h-full w-full lg:w-fit justify-center items-center py-10 px-5 rounded-[29px] 
                  ${el.color === "orange" ? "bg-[#FC9F7D]" : ""}
                  ${el.color === "blue" ? "bg-[#7BCDD0]" : ""}
                  ${el.color === "violet" ? "bg-[#DEC3E4]" : ""}
                  `}
                >
                  <p className="w-[234px]  h-fit text-[24px] sm:text-[34px] font-semibold">
                    {el.deadline}
                    <img
                      className="absolute right-[20px] sm:right-0 bottom-0 w-[100px] h-[100px] sm:w-[145px] sm:h-[145px]"
                      src={images.oSTar}
                      alt=""
                    />
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-[15px] sm:gap-[20px] p-[15px] sm:p-[25px] lg:p-0">
                  <div>
                    <h3 className="text-[18px] font-semibold mb-[10px]">
                      {el.desc}
                    </h3>
                    <p className="text-[12px] sm:text-[14px]">{el.text}</p>
                  </div>
                  <span className="w-full h-[1px] sm:w-[1px] sm:h-auto bg-[#272523] z-10  block"></span>
                  <div className="flex flex-row sm:flex-col justify-between sm:justify-start">
                    <div className="flex flex-col">
                      <span className="text-[12px] sm:text-[14px]">
                        Продолжительность
                      </span>
                      <span className="inline-block mb-[12px] text-[18px] font-medium sm:font-semibold">
                        {el.certainDur}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[12px] sm:text-[14px]">
                        Стоимость
                      </span>
                      <span className=" text-[18px] font-medium sm:font-semibold">
                        {el.numCoast}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Chose;
