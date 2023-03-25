import React from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";
import { setHLogo } from "../redux/checkRegistrationSlice";
import { selectAuth } from "./../redux/authSlice";
const menu: { name: string; link: string }[] = [
  {
    name: "Главная",
    link: "/",
  },
  {
    name: "О нас",
    link: "about",
  },
  {
    name: "Курсы",
    link: "course",
  },
];
const Nav: React.FC = () => {
  const { name } = useSelector(selectAuth);
  const getImg = useSelector(setHLogo);
  const [openMenu, setOpenMenu] = React.useState<boolean>(false);
  return (
    <article className="fixed top-0 left-0 w-[100vw] py-[4px] z-50 border-b-[#383430] border border-solid">
      <div className="wc px-[15px] relative ">
        <div className="w-full flex justify-between items-center">
          <img
            className="w-[75px] h-[51px] sm:w-[109px] sm:h-[75px]"
            src={getImg}
            alt=""
          />
          <div className="flex items-center gap-5 sm:gap-[80px] md:gap-[192px]">
            <nav className="">
              <ul
                className={`gap-[55px] flex flex-col ${
                  openMenu
                    ? "top-[0px] gap-[50px] text-[30px] right-[50%] translate-x-[50%] text-center"
                    : "top-[-1500px]"
                } bg-[#fbf1e3] h-[80vh] w-full sm:w-auto sm:bg-transparent sm:h-auto py-7  sm:flex-row absolute sm:relative  sm:top-1 items-center`}
              >
                {menu.map((el, i) => {
                  return (
                    <li className=" font-medium" key={i}>
                      <NavLink className={``} to={el.link}>
                        {el.name}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className="login flex items-center gap-[10px]">
              <AiOutlineUser className="text-[20px]" />
              <span className=" underline text-[12px] hidden sm:block">
                <Link to="/reg">{name || "Войти"}</Link>
              </span>
            </div>
            <div
              onClick={() => setOpenMenu(!openMenu)}
              className="block sm:hidden z-50 relative"
            >
              {!openMenu ? <AiOutlineMenu /> : <AiOutlineClose />}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Nav;
