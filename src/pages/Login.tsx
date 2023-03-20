import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { images } from "../assets/img";

import { Link } from "react-router-dom";
import { out, logIn, userState } from "../redux/userSLice";
import Footer from "./../components/Footer";
const Login = () => {
  const userRef = React.useRef<HTMLParagraphElement>(null);
  const errRef = React.useRef(null);
  const [user, setUser] = React.useState<string>("");
  const [pwd, setPwd] = React.useState<string>("");
  const [errMsg, setErrMsg] = React.useState<string>("");
  const [success, setSuccess] = React.useState<boolean>(false);
  const [render, setRender] = React.useState<string>("");
  React.useEffect(() => {
    userRef.current?.focus();
  }, []);
  React.useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);
  const users = useSelector(userState);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn(pwd, user));
  };
  React.useEffect(() => {
    setRender(users.exist);
    if (users.exist) {
      setSuccess(true);
    }
    console.log(users);
  }, [users]);
  const logOut = () => {
    setSuccess(false);
    dispatch(out());
  };
  return (
    <>
      <div className="h-auto mb-[50px] sm:mb-[0px] sm:h-[100vh] ">
        <div className="pt-[30px] sm:pt-[89px] h-full">
          <div className="flex h-full">
            <>
              {success ? (
                <section>
                  <h1>success!, logined {render.user}</h1>
                  <p>
                    <a href="#">Sign in</a>
                  </p>
                  <button onClick={logOut}>logOut</button>
                </section>
              ) : (
                <section className="flex  w-[100vw]">
                  <div className="flex-[100%] sm:flex-[50%] grow flex justify-start sm:justify-end">
                    <div className="w-full pl-5 lg:pl-0 lg:w-[455px] pt-[45px] pr-[15px] md:pr-[50px] lg:pr-[112px]">
                      <h1 className="text-[36px] sm:text-[40px] font-semibold mb-[20px]">
                        Авторизация
                      </h1>
                      <form onSubmit={handleSubmit}>
                        <p
                          className={errMsg ? "wrong!!!!!!" : "hidden"}
                          ref={errRef}
                        >
                          {errMsg}
                        </p>
                        <div className="flex flex-col w-full gap-[15px] mb-[15px]">
                          <input
                            ref={userRef}
                            id="name"
                            onChange={(el) => setUser(el.target.value)}
                            placeholder="Имя*"
                            type="text"
                            autoComplete="off"
                            required
                            value={user}
                            className="p-[15px] w-full py-[10px] text-[14px] border border-solid focus:border-none checked:border-none active:border-none rounded-[8px] border-[#272523] text-[#272523] font-medium placeholder:text-[#7e7871] bg-transparent"
                          />
                          <input
                            id="password"
                            className="p-[15px] py-[10px] text-[14px] border border-solid focus:border-none checked:border-none active:border-none rounded-[8px] border-[#272523] text-[#272523] font-medium placeholder:text-[#7e7871] bg-transparent"
                            required
                            value={pwd}
                            onChange={(el) => setPwd(el.target.value)}
                            placeholder="Пароль*"
                            type="password"
                          />
                        </div>
                        <div className="flex mb-[25px] flex-row sm:flex-col lg:flex-row">
                          <div className="flex ">
                            <input required type="checkbox" />
                            <span className="text-[11px] sm:text-[12px] ml-[6px] mr-[2px]">
                              Я ознакомился с
                            </span>{" "}
                          </div>
                          <span className=" underline text-[11px] sm:text-[12px]">
                            Политикой концединциальности
                          </span>
                        </div>
                        <button
                          // disabled={!validName || !validPwd ? true : false}
                          className="py-[10px] mb-[30px] rounded-[10px] w-full bg-[#272523] text-[#FFF4E6] flex justify-center items-center"
                        >
                          Войти в аккаунт
                        </button>
                      </form>
                      <div className="flex flex-col mb-[20px] relative">
                        <span className="mb-[25px] text-[12px] inline-block m-[0_auto] w-[86%] text-center sm:w-[70%]  after:content-[''] after:absolute after:top-[9px] after:left-0 after:w-[8%] sm:after:w-[12%] after:bg-black after:h-[1px]                                      before:content-[''] before:absolute before:top-[9px] before:right-0 before:w-[8%] sm:before:w-[12%] before:bg-black before:h-[1px]">
                          или зарегестрируйтесь через соцсети
                        </span>
                        <div className="flex justify-center gap-[15px] text-[12px]">
                          <img
                            className="w-[40px] h-[40px]"
                            src={images.sign1}
                            alt=""
                          />
                          <img
                            className="w-[40px] h-[40px]"
                            src={images.sign2}
                            alt=""
                          />
                          <img
                            className="w-[40px] h-[40px]"
                            src={images.sign3}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="m-[0_auto] text-center">
                        <span className=" text-[12px]">Нет аккаунта?</span>
                        <Link
                          className="underline text-[12px] ml-[2px] "
                          to="/reg"
                        >
                          Зарегестрироваться
                        </Link>
                      </div>
                    </div>
                  </div>
                  <img
                    className="w-[50%]  min-h-[100%] hidden sm:block"
                    src={images.auth}
                    alt=""
                  />
                </section>
              )}
            </>
          </div>
        </div>
      </div>
      <div className="block sm:hidden">
        <Footer />
      </div>
    </>
  );
};

export default Login;
