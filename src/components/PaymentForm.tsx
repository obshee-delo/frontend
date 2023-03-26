import React from "react";
import { sendPeayload } from "./../redux/paymentSlice";
import { AiFillCloseCircle } from "react-icons/ai";
import { useAppDispatch } from "../redux/state";
interface IPaymentData {
  sum: number;
  idB: number;
  paymentType: string;
}
const PaymentForm: React.FC<{[key:string]: number} | null> = ({ idB, open, setOpen }) => {
  const [suma, setSuma] = React.useState<number>(0);
  const [card, setCard] = React.useState<string>("");
  const [paymentType, setPaymentType] = React.useState<string>("");
  const disptch = useAppDispatch();
  const send = (el: any, obj: IPaymentData): void => {
    el.preventDefault();
    console.log(obj);
    disptch(sendPeayload(obj));
  };
  return (
    <form
      className={`bg-black absolute top-[50%] ${open ? "block" : "hidden"} 
       left-[50%] translate-x-[-50%] top-[30%] flex flex-col px-[30px] py-[25px] pt-[35px] rounded-[10px]`}
      // method="POST"
      // onSubmit={() => send({ suma, idB })}
      // action=""
    >
      <AiFillCloseCircle
        onClick={() => setOpen(false)}
        className="absolute right-[-20px] top-[-20px] w-[40px] h-[40px] bg-[black] shadow-sm shadow-white cursor-pointer rounded-[50%] border border-solid border-black"
      />
      <input
        className="px-[15px] py-[10px] rounded-[15px] border border-black border-solid mb-[15px]"
        type="text"
        name="receiver"
        onChange={(el) => setCard(el.target.value)}
        value={card}
        placeholder="Номер карты"
      />
      <input
        className="px-[15px] py-[10px] rounded-[15px] border border-black border-solid mb-[15px]"
        type="text"
        name="label"
        value="$order_id"
      />
      {/* <input
        className="px-[15px] py-[10px] rounded-[15px] border border-black border-solid mb-[15px]"
        type="text"
        name="quickpay-form"
        value="button"
      /> */}
      <input
        className="px-[15px] py-[10px] rounded-[15px] border border-black border-solid mb-[15px]"
        type="text"
        onChange={(el) => setSuma(Number(el.target.value))}
        name="sum"
        value={suma !== 0 ? suma : ""}
        data-type="number"
        placeholder="Сумма"
      />
      <label>
        <input
          onChange={(el) => setPaymentType(el.target.value)}
          type="radio"
          name="paymentType"
          value="PC"
          checked={paymentType === "PC"}
        />
        ЮMoney
      </label>
      <label>
        <input
          onChange={(el) => setPaymentType(el.target.value)}
          type="radio"
          name="paymentType"
          value="AC"
          checked={paymentType === "AC"}
        />
        Банковской картой
      </label>
      {/* <select onChange={(el) => setPaymentType(el)} name="optionPayment" id="1">
        <option value="AC">Банковской картой</option>
        <option value="PC">ЮMoney</option>
      </select> */}
      <button
        className="mt-[15px] px-[30px] py-[15px] bg-slate-100 rounded-[5px]"
        onClick={(el) => send(el, { suma, idB, paymentType })}
        type="submit"
      >
        Перевести
      </button>
      {/* <input type="submit" value="Перевести" /> */}
    </form>
  );
};

export default PaymentForm;
