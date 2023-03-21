import React, { FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLogo, changeName } from "../redux/checkRegistrationSlice";
import { setHLogo } from "../redux/checkRegistrationSlice";
import { images } from "../assets/img";
import { Link, Navigate } from "react-router-dom";
import { out, registrateUser, userState } from "../redux/userSLice";
import Footer from "./../components/Footer";
import { loginUser } from "./../redux/auth/actionCreator";
const USER_REG = /^[a-zA-Z]{3,23}/;
const PWD_REG = /(?=.*[a-z])(?=.*[а-я])(?=.*[A-Z])(?=.*[0-9]){8,23}/;
const MAIL_REG = /(?=.*[.])(?=.*[@])/;
const Registration = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(changeLogo());
  }, [setHLogo]);
  const [pwd, setPwd] = React.useState("");
  const [user, setUser] = React.useState("");
  const [mail, setMail] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [vk, setVk] = React.useState("");

  const [validName, setValidName] = React.useState(false);
  const [userFocus, setUserFocus] = React.useState(false);

  const [validPwd, setValidPwd] = React.useState(false);
  const [pwdFocus, setPwdrFocus] = React.useState(false);

  const [matchPwd, setMatchPwd] = React.useState("");
  const [validMatchPwd, setValidMatchPwd] = React.useState(false);
  const [errMsg, setErrMsg] = React.useState("");
  const [success, setSuccess] = React.useState(false);
  const [render, setRender] = React.useState("");
  const userRef = React.useRef(null);
  const errRef = React.useRef(null);
  const [mailT, setMailT] = React.useState("");
  // React.useEffect(() => {
  //   const result = MAIL_REG.test(mail);
  //   setMailT(result);
  // }, [mail]);
  // React.useEffect(() => {
  //   const result = USER_REG.test(user);
  //   setValidName(result);
  // }, [user]);
  // React.useEffect(() => {
  //   const result = PWD_REG.test(pwd);
  //   setValidPwd(result);
  //   const match = pwd === matchPwd;
  //   setValidMatchPwd(match);
  // }, [pwd, matchPwd]);
  // React.useEffect(() => {
  //   setErrMsg("");
  // }, [user, pwd, matchPwd]);
  const users = useSelector(userState);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // dispatch(registrateUser(pwd, user, lastName, mail, phone, vk));
    dispatch(loginUser({ user, pwd }));
  };
  // React.useEffect(() => {
  //   setRender(users.exist);
  //   if (users.exist) {
  //     setSuccess(true);
  //   }
  // }, [users]);
  // const logOut = () => {
  //   setSuccess(false);
  //   dispatch(out());
  // };
  // React.useEffect(() => {
  //   if (success) {
  //     const name = users.exist.user;
  //     dispatch(changeName({ name: name }));
  //   }
  //   if (!success) {
  //     dispatch(changeName({ name: "Войти" }));
  //   }
  // }, [success]);
  return (
    <>
      {users.exist ? (
        <Navigate to="/user" />
      ) : (
        <div className="h-auto mb-[50px] sm:mb-[0px] sm:h-[100vh] ">
          <div className="pt-[30px] sm:pt-[89px] h-full">
            <div className="flex   h-full">
              <section className="flex  w-[100vw]">
                <img
                  className="w-[50%]  min-h-[100%] hidden sm:block"
                  src={images.log}
                  alt=""
                />
                <div className="flex-[50%] grow">
                  <div className="w-auto pr-5 lg:pr-0 lg:w-[455px] pt-[45px] pl-[15px] md:pl-[50px] lg:pl-[112px]">
                    <h1 className="text-[36px] sm:text-[40px] font-semibold mb-[20px]">
                      Регистрация
                    </h1>
                    <form className="mb-[15px]" onSubmit={handleSubmit}>
                      <p
                        className={errMsg ? "wrong!!!!!!" : "hidden"}
                        ref={errRef}
                      >
                        {errMsg}
                      </p>
                      <div className="flex flex-col w-full gap-[10px] mb-[15px]">
                        <input
                          required
                          className="p-[15px] py-[7px] border border-solid focus:border-none checked:border-none active:border-none rounded-[8px] border-[#272523] text-[14px] text-[#272523] font-medium placeholder:text-[#7e7871] bg-transparent"
                          value={mail}
                          onChange={(el) => setMail(el.target.value)}
                          placeholder="E-mail*"
                          type="mail"
                        />

                        {mailT || mail.length <= 2 ? null : (
                          <p className="text-blue-600 p-2 bg-black rounded-[10px]">
                            wrong mail, include "@" and "."
                          </p>
                        )}

                        <input
                          id="password"
                          className="p-[15px] py-[7px] text-[14px] border border-solid focus:border-none checked:border-none active:border-none rounded-[8px] border-[#272523] text-[#272523] font-medium placeholder:text-[#7e7871] bg-transparent"
                          required
                          aria-invalid={validPwd ? "false" : "true"}
                          aria-describedby="pwddnote"
                          onChange={(el) => setPwd(el.target.value)}
                          placeholder="Пароль*"
                          type="password"
                          onFocus={() => setPwdrFocus(true)}
                        />
                        <p
                          id="pwddnote"
                          className={
                            pwd && pwdFocus && !validPwd
                              ? "text-blue-600 p-2 bg-black rounded-[10px]"
                              : "hidden"
                          }
                        >
                          8-24 letter, with upperCase, with number
                        </p>
                        <input
                          ref={userRef}
                          id="name"
                          className="p-[15px] text-[14px] py-[7px] border border-solid focus:border-none checked:border-none active:border-none rounded-[8px] border-[#272523] text-[#272523] font-medium placeholder:text-[#7e7871] bg-transparent"
                          // value={user}
                          required
                          aria-invalid={validName ? "false" : "true"}
                          aria-describedby="uidnote"
                          onFocus={() => setUserFocus(true)}
                          onChange={(el) => setUser(el.target.value)}
                          placeholder="Имя*"
                          type="text"
                          autoComplete="off"
                          onBlur={() => setUserFocus(false)}
                        />
                        <p
                          id="uidnote"
                          className={
                            user && userFocus && !validName
                              ? "text-blue-600 p-2 bg-black rounded-[10px]"
                              : "hidden"
                          }
                        >
                          4-24 letters, start with 'a'
                        </p>

                        <input
                          required
                          className="p-[15px] focus:border-[1px] text-[14px] py-[7px] border border-solid focus:border-none checked:border-none active:border-none rounded-[8px] border-[#272523] text-[#272523] font-medium placeholder:text-[#7e7871] bg-transparent"
                          value={lastName}
                          onChange={(el) => setLastName(el.target.value)}
                          placeholder="Фамилия*"
                          type="mail"
                        />
                        <input
                          required
                          className="p-[15px] py-[7px] text-[14px] border border-solid focus:border-none checked:border-none active:border-none rounded-[8px] border-[#272523] text-[#272523] font-medium placeholder:text-[#7e7871] bg-transparent"
                          value={phone}
                          onChange={(el) => setPhone(el.target.value)}
                          placeholder="Телефон"
                          type="mail"
                        />

                        <input
                          required
                          className="p-[15px] py-[7px] text-[14px] border border-solid focus:border-none checked:border-none active:border-none rounded-[8px] border-[#272523] text-[#272523] font-medium placeholder:text-[#7e7871] bg-transparent"
                          value={vk}
                          onChange={(el) => setVk(el.target.value)}
                          placeholder="Ссылка на вк*"
                          type="mail"
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
                        // disabled={
                        //   !validName || !mailT || !validPwd ? true : false
                        // }
                        className="py-[10px] rounded-[10px] w-full bg-[#272523] text-[#FFF4E6] flex justify-center items-center"
                      >
                        Зарегестрироваться
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
                      <span className=" text-[12px]">
                        Уже зарегестрированы ?
                      </span>
                      <Link
                        className="underline text-[12px] ml-[2px] "
                        to="/log"
                      >
                        Войти
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      )}
      <div className="block sm:hidden">
        <Footer />
      </div>
    </>
  );
};

export default Registration;
