import React from "react";
type BtnProps = { changeColor: boolean; text: string };
// компонент кнопки
const Btn: React.FC<BtnProps> = ({ changeColor, text }) => {
  return (
    <button
      className={`text-[18px]  h-fit font-medium w-fit py-[16px] px-[40px]  ${
        changeColor ? "text-black bg-[#7BCDD0]" : "text-[#FFF4E6] bg-[#272523]"
      } rounded-[10px]`}
    >
      {text}
    </button>
  );
};

export default Btn;
