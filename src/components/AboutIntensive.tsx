import React from "react";
const data: { title: string; text: string }[] = [
  {
    title: "ОСНОВНОЙ УПОР",
    text: "на практические занятия (34 часа)",
  },
  {
    title: "БОЛЕЕ 200 ЧАСОВ",
    text: "лекционного материала, доступного в записи",
  },
  {
    title: "ТВОЙ ЛИЧНЫЙ КУРАТОР",
    text: "и индивидуальный подход к каждому ученику",
  },
  {
    title: "ДОМАШНЕЕ ЗАДАНИЕ ",
    text: "для усиленной подготовки и пробники, разбираемся лично с куратором",
  },
];
const AboutIntensive: React.FC = () => {
  return (
    <section className="  mb-[80px] md:mb-[120px] text-[#272523]">
      <div className="wc px-[15px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-[1fr_auto] ">
          {data.map((el, i) => (
            <article
              key={i}
              className="flex flex-col justify-between p-[25px] rounded-[10px] border border-solid border-[#272523]"
            >
              <h3 className="max-w-full sm:max-w-[235px] text-[22px] md:text-[24px] lg:text-[26px] mb-[17px]">
                {el.title}
              </h3>
              <p className="max-w-full sm:max-w-[235px] text-[14px] sm:text-[16px] md:text-[18px] font-medium">
                {el.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutIntensive;
