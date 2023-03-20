import React from "react";
import { Link, useParams } from "react-router-dom";
import { images } from "../assets/img";
import { duraction } from "../assets/text";
import Title from "./Title";

const Duraction: React.FC = () => {
  return (
    <section className="  mb-[80px] md:mb-[120px] text-[#272523]">
      <div className="wc px-[15px]">
        <Title text="Направления подготовки" />
        <p className="mb-[15px] max-w-[741px] md:text-[22px] md:font-bold">
          Quam elit luctus vitae sit nulla donec vulputate. Eu quis massa vel
          sem sed adipiscing ultricies. Sit magna duis nisi orci.
        </p>
        <div className="flex justify-between gap-[30px] flex-wrap">
          {duraction.map((el, i) => (
            <article
              key={i}
              className={`z-10 ${
                !el.name ? "hidden md:flex" : "block"
              } flex-[100%] sm:flex-[45%] md:flex-[30%] rounded-[20px] ${
                el.color && el.color === "blue" ? `bg-[#7BCDD0]` : ""
              }
            ${el.color && el.color === "orange" ? `bg-[#fc9f7d]` : ""}
            ${el.color && el.color === "pink" ? `bg-[#dec3e4]` : ""}
            ${el.color && el.color === "black" ? `bg-[#272523] text-white` : ""}
            `}
            >
              <Link to={`/${el.name}`}>
                {el.name ? (
                  <div className={`p-[25px]`}>
                    <small className="mb-[50px] inline-block text-[22px] md:text-[26px] font-normal sm:font-semibold">
                      {el.name && el.name}
                    </small>
                    <div className="flex justify-end">
                      {el.color === "black" ? (
                        <img src={el.img} alt="" />
                      ) : (
                        <img src={images.hLogo} alt="" />
                      )}
                    </div>
                  </div>
                ) : (
                  <div className=" hidden md:flex justify-center items-center w-full h-full">
                    <img className="" src={el.imgStar} alt="" />
                  </div>
                )}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Duraction;
