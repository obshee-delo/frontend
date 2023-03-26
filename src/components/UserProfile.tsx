import React from "react";
import { images } from "../assets/img";
import { AiFillPicture } from "react-icons/ai";
import { selectAuth } from "./../redux/authSlice";
import { useAppSelector } from './../redux/state';

const UserProfile: React.FC = () => {
  const { name, sureName, password, email, link, phone } =
    useAppSelector(selectAuth);
  const data: { [key: string]: string | null } = {
    name,
    sureName,
    password,
    email,
    link,
    phone,
  };
  const [fileImg, setFileImg] = React.useState(images.defaultPerson);
  const handleChange = (e: any) => {
    setFileImg(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <section className="wc px-[15px]">
      <div className="flex gap-[10px] sm:gap-[30px] items-center flex-col sm:flex-row">
        <div className="flex flex-row sm:block w-full sm:w-auto justify-between">
          <img
            className="rounded-[12px] mb-[20px] sm:w-[358px] h-[135px] sm:h-[345px] w-[135px]"
            src={fileImg}
            alt="me"
          />
          <div className="w-[195px] sm:w-auto pl-[10px] sm:pl-0">
            <span className="text-[#FC9F7D] inline-block text-[26px] font-semibold mb-[5px]">
              {`${data.name} ${data.sureName}`}
            </span>
            <p className="mb-[20px]">{data.email || "no data"}</p>
            <div className="flex relative">
              <input
                className="max-w-[150px] w-[15px] mr-[15px]   h-[20px] relative z-[100] text-[0] p-[0] file:bg-transparent file:border-transparent border-none border-[0] border-transparent overflow-hidden  bg-transparent text-transparent"
                onChange={handleChange}
                type="file"
                accept="/assets/img/"
              />{" "}
              <AiFillPicture className="absolute top-[3px] left-0 w-[20px] h-[20px]" />
              <span className="w-fit text-[12px] sm:text-base">
                Изменить фото профиля
              </span>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-[455px]">
          <div className="mb-[30px] sm:mb-[45px] lg:mb-[60px]mb-[60px]">
            <div className="mb-[30px] text-[26px] font-semibold leading-[100%]">
              Личные данные
            </div>
            <div className="border rounded-[8px] relative bg-transparent mb-[15px]  p-[15px] border-black border-solid">
              <span className="absolute text-[12px] bg-[#fdf2e5] top-[-10.5px] left-[20px] px-[5px]">
                Имя
              </span>
              <input
                disabled={true}
                className="w-full bg-transparent"
                name="name"
                value={data.name || "no data"}
                type="text"
              />
            </div>
            <div className="border rounded-[8px] relative bg-transparent mb-[15px] p-[15px] border-black border-solid">
              <span className="absolute text-[12px] bg-[#fdf2e5] top-[-10.5px] left-[20px] px-[5px]">
                Фамилия
              </span>
              <input
                disabled={true}
                className="w-full bg-transparent"
                name="name"
                value={data.sureName || "no data"}
                type="text"
              />
            </div>
            <div className="border rounded-[8px] relative bg-transparent mb-[15px] p-[15px] border-black border-solid">
              <span className="absolute text-[12px] bg-[#fdf2e5] top-[-10.5px] left-[20px] px-[5px]">
                E-mail
              </span>
              <input
                disabled={true}
                className="w-full bg-transparent"
                name="name"
                value={data.phone || "no data"}
                type="text"
              />
            </div>
            <div className="border rounded-[8px] relative bg-transparent mb-[15px] p-[15px] border-black border-solid">
              <span className="absolute text-[12px] bg-[#fdf2e5] top-[-10.5px] left-[20px] px-[5px]">
                Номер телефона
              </span>
              <input
                disabled={true}
                className="w-full bg-transparent"
                name="name"
                value={data.phone || "no data"}
                type="text"
              />
            </div>
          </div>
          <div>
            <div className="mb-[30px] text-[26px] font-semibold">
              Социальные сети
            </div>

            <div className="border rounded-[8px] relative bg-transparent mb-[15px] p-[15px] border-black border-solid">
              <span className="absolute text-[12px] bg-[#fdf2e5] top-[-10.5px] left-[20px] px-[5px]">
                E-mail
              </span>
              <input
                disabled={true}
                className="w-full bg-transparent"
                name="name"
                value={data.email || "no data"}
                type="text"
              />
            </div>
            <div className="border rounded-[8px] relative bg-transparent mb-[15px] p-[15px] border-black border-solid">
              <span className="absolute text-[12px] bg-[#fdf2e5] top-[-10.5px] left-[20px] px-[5px]">
                Номер телефона
              </span>
              <input
                disabled={true}
                className="w-full bg-transparent"
                name="name"
                value={data.phone || "no data"}
                type="text"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
