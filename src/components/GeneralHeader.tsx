import React from "react";
import { images } from "../assets/img";
import { useNavigate } from "react-router-dom";
interface IGeneralHeaderProps {
  subtitle?: string;
  nextSubtitle?: string;
  underTitle2?: string;
  underTitle?: string;
  rv?: string;
  btn?: React.ReactNode;
  fz?: number;
  useData?: any;
}
const GeneralHeader: React.FC<IGeneralHeaderProps> = (props) => {
  const navigate = useNavigate();
  return (
    <header className="pt-[90px] sm:pt-[120px] md:pt-[150px] pb-[45px] sm:pb-[80px] md:pb-[111px] mb-[50px]">
      <div className="wc px-[15px]">
        <div className=" mb-[40px] sm:mb-[50px] md:mb-[77px]">
          <span className="inline-block">
            <span
              className={`float-left sm:float-none ${
                props.subtitle ? "inline-block" : "hidden"
              } `}
            >
              <span
                onClick={() => navigate(-1)}
                className="cursor-pointer inline-block"
              >
                Главная
              </span>
              <img
                className="inline-block mx-[5px]"
                src={images.speakerStar1}
                alt=""
              />
            </span>
            {props.useData}
            {props.nextSubtitle && (
              <span>
                <img
                  className="inline-block mx-[5px]"
                  src={images.speakerStar1}
                  alt=""
                />
                {props.nextSubtitle}
              </span>
            )}
          </span>
        </div>
        <h1
          className={`text-[40px] sm:text-[60px] md:text-[80px] flex  leading-[1] ${
            props.rv ? "flex-col-reverse" : "flex-col"
          }`}
        >
          <div
            className={`w-fit   md:text-[70px] ${
              props.rv ? "flex flex-col" : ""
            }`}
          >
            <span
              className={`${props.fz ? `text-[30px]` : null} ${
                props.btn
                  ? " text-[35px] mb-[20px] sm:mb-[0px] sm:text-[50px]"
                  : null
              }`}
            >
              {props.underTitle}
            </span>
            {props.rv && (
              <span className="text-left md:text-right ">{props.rv}</span>
            )}
          </div>
          {props.btn ? (
            <div className="flex items-center lg:items-start gap-[20px] ">
              <div className="hidden sm:flex items-center lg:items-start">
                {props.btn}
              </div>

              <span className="font-bold text-[35px] md:text-[60px] w-full  leading-[100%]">
                {props.underTitle2}
              </span>
            </div>
          ) : (
            <span
              className={`font-bold text-[45px] md:text-[60px] lg:text-[80px]  leading-[100%]`}
            >
              {props.underTitle2}
            </span>
          )}
        </h1>
        {props.btn && (
          <span className="mt-[25px] block sm:hidden ">
            <button className="py-[16px] w-full flex items-center rounded-[10px] justify-center text-[18px] font-medium text-[#FFF4E6] bg-[#272523]">
              Приобрести
            </button>
          </span>
        )}
      </div>
    </header>
  );
};

export default GeneralHeader;
