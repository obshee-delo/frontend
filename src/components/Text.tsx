import React from "react";
import { images } from "../assets/img";

const Text: React.FC = () => {
  return (
    <section className="relative left-1/2 transform translate-x-[-50%]  w-fit">
      <div className="pb-[30px] sm:pb-[50px] md:pb-[80px] lg:pb-[110px] pl-[90px] sm:pl-[120px] relative">
        <p className="sm:max-w-[625px] text-[14px] sm:text-[16px]">
          Наша история начинается{" "}
          <span className="text-[#78CFCE]">июля 2020 года</span> с , когда,
          будучи ещё выпускниками школы, компанией друзей мы запустили два
          направления подготовки — обществознание и право. Уже тогда мы
          обозначили наш главный принцип — инклюзивность образования и открыли
          набор бесплатную летнюю школу по социальным наукам в сотрудничестве с
          Школой ЦПМ
        </p>
        <span className="h-[80%] sm:h-[60%] w-[2px] absolute top-[50px] left-[40px] bg-[#272523]"></span>
        <img
          className="absolute w-[80px] h-[80px] top-0 left-0"
          src={images.blackStar}
          alt=""
        />
      </div>
      <div className="pb-[30px] sm:pb-[50px] md:pb-[80px] lg:pb-[110px] pl-[90px] sm:pl-[120px] relative">
        <p className="sm:max-w-[625px] text-[14px] sm:text-[16px]">
          В первый год работы мы достигли высоких результатов — выпустили{" "}
          <span className="text-[#C485D0]">более 60 дипломантов</span>{" "}
          перечневых олимпиад,{" "}
          <span className="text-[#C485D0]">
            8 призеров и победителей ЗЭ ВсОШ
          </span>{" "}
          и{" "}
          <span className="text-[#FC9C78]">
            даже одну абсh-[80%] sm:олютную победительницу ЗЭ ВсОШ
          </span>
        </p>
        <span className="h-[60%] w-[2px] absolute top-[50px] left-[40px] bg-[#272523]"></span>
        <img
          className="absolute w-[80px] h-[80px] top-0 left-0"
          src={images.blackStar}
          alt=""
        />
      </div>
      <div className="pb-[30px] sm:pb-[50px] md:pb-[80px] lg:pb-[110px] pl-[90px] sm:pl-[120px] relative">
        <p className="sm:max-w-[625px] text-[14px] sm:text-[16px]">
          Разрастаясь, мы начали заниматься с детьми в группах, организовывать
          масштабные открытые школы с приглашёнными лекторами. Среди них нас
          посетили{" "}
          <span className="text-[#78CFCE]">ученые мирового уровня</span> :
          Сергей Гуриев, Олег Ицхоки, Михаил Гельфанд и другие. В 2022 году было
          открыто <span className="text-[#78CFCE]"> 5 новых направлений</span>
        </p>
        <span className="h-[80%] w-[2px] absolute top-[50px] left-[40px] bg-[#272523] sm:h-[60%] sm:g-black"></span>
        <img
          className="absolute w-[80px] h-[80px] top-0 left-0"
          src={images.blackStar}
          alt=""
        />
      </div>
      <div className="pb-[30px] sm:pb-[50px] md:pb-[80px] lg:pb-[110px] pl-[90px] sm:pl-[120px] relative">
        <p className="sm:max-w-[625px] text-[14px] sm:text-[16px]">
          Сейчас у нас несколько сотен учеников, открыты{" "}
          <span className="text-[#FC9C78]">7 направлений</span> , регулярно
          проходят открытые лекции.{" "}
          <span className="font-bold">
            Впереди нас ждут ещё большие достижения с нашими учениками!
          </span>
        </p>
        <img
          className="absolute w-[80px] h-[80px] top-0 left-0"
          src={images.blackStar}
          alt=""
        />
      </div>
    </section>
  );
};

export default Text;
