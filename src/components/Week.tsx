import React from "react";
import { images } from "../assets/img";
import { week } from "../assets/text";
import Title from "./Title";
const WeekD: React.FC = () => {
  const dasctopTites = [...new Set(week.map((el) => el.day))];
  const mobileTites = [...new Set(week.map((el) => el.time))];
  const moday = week.filter((el) => el.day === "ПН");
  const tuesday = week.filter((el) => el.day === "ВТ");
  const wensday = week.filter((el) => el.day === "СР");
  const thursday = week.filter((el) => el.day === "ЧТ");
  const friday = week.filter((el) => el.day === "ПТ");
  const saturday = week.filter((el) => el.day === "СБ");
  const sunday = week.filter((el) => el.day === "ВС");
  const [term, setTerm] = React.useState<string>("20 марта - 26 марта");
  const toFilter = (el) => {
    setTerm(el);
  };
  const resultOfSort = [];
  for (let i = 0; i < Math.max(moday.length, tuesday.length); i++) {
    if (moday[i] != null) {
      resultOfSort.push(moday[i]);
    }
    if (tuesday[i] != null) {
      resultOfSort.push(tuesday[i]);
    }
    if (wensday[i] != null) {
      resultOfSort.push(wensday[i]);
    }
    if (thursday[i] != null) {
      resultOfSort.push(thursday[i]);
    }
    if (friday[i] != null) {
      resultOfSort.push(friday[i]);
    }
    if (saturday[i] != null) {
      resultOfSort.push(saturday[i]);
    }
    if (sunday[i] != null) {
      resultOfSort.push(sunday[i]);
    }
  }

  const [click, setClick] = React.useState(false);
  return (
    <section className="pb-[80px] md:pb-[120px] text-[#272523] ">
      <div className="wc px-[15px] relative">
        <Title text="Расписание интенсива" />
        <div className="hidden py-[12px] mb-[15px] border border-solid border-black rounded-[10px] md:grid grid-cols-7 gap-[3px] lg:gap-[5px]">
          {dasctopTites.map((el, i) => (
            <div key={i} className="text-center">
              {el}
            </div>
          ))}
        </div>
        <div className="hidden grid-flow-dense md:grid grid-cols-7 gap-[3px] lg:gap-[5px]">
          {resultOfSort.map((obj, i) => {
            if (obj.empty) {
              return <article className="bg-transparent" key={i}></article>;
            }
            if (!obj.black) {
              return (
                <article
                  key={i}
                  className={`p-[10px] min-h-[220px] lg:p-[15px] max-w-[157px] rounded-[10px] flex flex-col  justify-between
                  ${obj.color === "white" ? "bg-white" : ""}
                  ${obj.color === "violet" ? "bg-[#DEC3E4]" : ""}
                  ${obj.color === "blue" ? "bg-[#7BCDD0]" : ""}
                  ${obj.color === "pink" ? "bg-[#FC9F7D]" : ""}
                  `}
                >
                  <span className="inline-block">{obj.data}</span>
                  <span className=" text-[12px] xl:text-[18px] font-medium">
                    {obj.title}
                  </span>
                </article>
              );
            }
            if (obj.black) {
              return (
                <article
                  key={i}
                  className="px-[6px] min-h-[220px] py-[10px] lg:p-[15px] max-w-[157px] bg-black text-white rounded-[10px] flex flex-col justify-between"
                >
                  <span>{obj.data}</span>
                  <div className="flex flex-col">
                    <span className="text-[#b3aba0] text-[12px]">
                      {obj.black.firstTime}
                    </span>
                    <span className=" text-[10px] xl:text-[18px] font-medium max-w-[70px]">
                      {obj.black.firstTitle}
                    </span>
                    <span className="text-[#b3aba0] text-[12px]">
                      {obj.black.secondTime}
                    </span>
                    <span className=" text-[10px] xl:text-[18px] font-medium max-w-[100px]">
                      {obj.black.secondTitle}
                    </span>
                  </div>
                </article>
              );
            }
          })}
        </div>
        <div className="block md:hidden">
          <div>
            <div
              onClick={() => setClick(!click)}
              className="relative text-black  font-medium mb-[20px] border border-sold border-black bg-white p-[15px] rounded-[10px]"
            >
              <span>
                <img
                  className={`absolute z-[200] ${
                    click ? "rotate-[180deg]" : ""
                  } top-[50%] translate-y-[-50%] right-[15px]`}
                  src={images.arrBottom}
                  alt=""
                />
                {term}
                <div
                  className={` bg-white z-[20] w-full p-[15px] pt-0 rounded-[10px]
                  ${
                    click ? "flex" : "hidden"
                  } absolute left-0  top-0 border border-sold border-black rounded-[10px]  flex-col`}
                >
                  {mobileTites.map((el, i) => {
                    return (
                      <div
                        key={i}
                        className={`mb-[45px] ${
                          el == term ? "text-black" : "text-[#464544]"
                        }  font-medium`}
                      >
                        <span
                          onClick={toFilter.bind("", el)}
                          className="text-center"
                        >
                          {el}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </span>
            </div>
            <div className="flex justify-center gap-[10px] sm:gap-[0] sm:justify-between  flex-wrap">
              {week
                .filter((el) => el.time === term)
                .map((obj, i: number) => {
                  if (obj.empty) {
                    return (
                      <article
                        className="bg-transparent hidden w-[165px]"
                        key={i}
                      ></article>
                    );
                  }
                  if (!obj.black) {
                    return (
                      <article
                        key={i}
                        className={`p-[10px] lg:p-[15px] w-[140px] mb-[0] sm:mb-[20px] min-h-[220px] rounded-[10px] flex flex-col  justify-between
                  ${obj.color === "white" ? "bg-white" : ""}
                  ${obj.color === "violet" ? "bg-[#DEC3E4]" : ""}
                  ${obj.color === "blue" ? "bg-[#7BCDD0]" : ""}
                  ${obj.color === "pink" ? "bg-[#FC9F7D]" : ""}
                  `}
                      >
                        <span className=" inline-block">{obj.data}</span>
                        <span className=" text-[16px] font-medium">
                          {obj.title}
                        </span>
                      </article>
                    );
                  }
                  if (obj.black) {
                    return (
                      <article
                        key={i}
                        className="px-[6px] mb-[0] sm:mb-[20px] py-[10px] lg:p-[15px] w-[140px] min-h-[220px] bg-black text-white rounded-[10px] flex flex-col justify-between"
                      >
                        <span>{obj.data}</span>
                        <div className="flex flex-col">
                          <span className="text-[#b3aba0] text-[12px]">
                            {obj.black.firstTime}
                          </span>
                          <span className=" text-[10px] xl:text-[18px] font-medium max-w-[70px]">
                            {obj.black.firstTitle}
                          </span>
                          <span className="text-[#b3aba0] text-[12px]">
                            {obj.black.secondTime}
                          </span>
                          <span className=" text-[10px] xl:text-[18px] font-medium max-w-[100px]">
                            {obj.black.secondTitle}
                          </span>
                        </div>
                      </article>
                    );
                  }
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeekD;
