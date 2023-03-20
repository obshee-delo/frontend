import React from "react";
type TitleProps = { text: string };
const Title: React.FC<TitleProps> = (props) => {
  return (
    <h2 className="mb-[40px] leading-[100%] sm:mb-[50px] text-4xl sm:text-[50px] text-[#272523] font-semibold">
      {props.text}
    </h2>
  );
};

export default Title;
