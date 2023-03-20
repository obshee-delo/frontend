import React from "react";
import { Link } from "react-router-dom";
import Title from "./Title";
import axios from "axios";
import { images } from "../assets/img";
const USER_REG = /^[a-zA-Z][a-zA-Z0-9_]{3,23}/;
// const PWD_REG = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8-23}/;
const REG_URL = "/reg";
const PWD_REG = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]){8,23}/;
type propsAuth = {
  title: string;
  mail: string;
  password: string;
  name: string;
  lastName: string;
  phone: string;
  suggest: string;
};
const AuthForm: React.FC<propsAuth> = (props) => {
  const [mail, setMail] = React.useState<string>("");
  const [lastName, setLastName] = React.useState<string>("");
  const [phone, setPhone] = React.useState<string>("");
  const [vk, setVk] = React.useState<string>("");
  const [user, setUser] = React.useState<string>("");
  const [validName, setValidName] = React.useState<boolean>(false);
  const [userFocus, setUserFocus] = React.useState<boolean>(false);
  const [pwd, setPwd] = React.useState<string>("");
  const [validPwd, setValidPwd] = React.useState<boolean>(false);
  const [pwdFocus, setPwdrFocus] = React.useState<boolean>(false);
  const [matchPwd, setMatchPwd] = React.useState<string>("");
  const [validMatchPwd, setValidMatchPwd] = React.useState<boolean>(false);

  const [errMsg, setErrMsg] = React.useState<string>("");
  const [success, setSuccess] = React.useState<boolean>(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = USER_REG.test(user);
    const v2 = PWD_REG.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("error, not valid");
      return;
    }
    try {
      // const result = await axios.post(REG_URL, JSON.stringify({ user, pwd }), {
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   withCredentials: true,
      // });
      // console.log(result.data);
      setSuccess(true);
    } catch (err) {
      alert(err);
    }
  };
  const userRef = React.useRef(null);
  const errRef = React.useRef(null);
  React.useEffect(() => {
    userRef.current.focus();
  }, []);
  React.useEffect(() => {
    const result = USER_REG.test(user);
    setValidName(result);
  }, [user]);
  React.useEffect(() => {
    const result = PWD_REG.test(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatchPwd(match);
  }, [pwd, matchPwd]);
  React.useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);
  return (
    <>
      {success ? (
        <section>
          <h1>success!</h1>
          <p>
            <a href="#">Sign in</a>
          </p>
        </section>
      ) : (
        <section className="min-w-[50%]">
          <div className="max-w-[455px]">
            <Title text={props.title} />
            <form onSubmit={handleSubmit} action="POST">
              <p className={errMsg ? "wrong!!!!!!" : "hidden"} ref={errRef}>
                {errMsg}
              </p>
              <div className="flex flex-col w-full gap-[15px] mb-[15px]">
                {props.mail && (
                  <input
                    required
                    className="p-[15px] border border-solid focus:border-none checked:border-none active:border-none rounded-[8px] border-[#272523] text-[#272523] font-medium placeholder:text-[#7e7871]"
                    value={mail}
                    onChange={(el) => setMail(el.target.value)}
                    placeholder="E-mail*"
                    type="mail"
                  />
                )}
                {props.password && (
                  <>
                    <input
                      id="password"
                      className="p-[15px] border border-solid focus:border-none checked:border-none active:border-none rounded-[8px] border-[#272523] text-[#272523] font-medium placeholder:text-[#7e7871]"
                      required
                      aria-invalid={validPwd ? "false" : "true"}
                      aria-describedby="pwddnote"
                      onChange={(el) => setPwd(el.target.value)}
                      placeholder="Пароль*"
                      type="mail"
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
                  </>
                )}
                {props.name && (
                  <>
                    <input
                      ref={userRef}
                      id="name"
                      className="p-[15px] border border-solid focus:border-none checked:border-none active:border-none rounded-[8px] border-[#272523] text-[#272523] font-medium placeholder:text-[#7e7871]"
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
                  </>
                )}
                {props.lastName && (
                  <input
                    required
                    className="p-[15px] border border-solid focus:border-none checked:border-none active:border-none rounded-[8px] border-[#272523] text-[#272523] font-medium placeholder:text-[#7e7871]"
                    value={lastName}
                    onChange={(el) => setLastName(el.target.value)}
                    placeholder="Фамилия*"
                    type="mail"
                  />
                )}
                {props.phone && (
                  <input
                    required
                    className="p-[15px] border border-solid focus:border-none checked:border-none active:border-none rounded-[8px] border-[#272523] text-[#272523] font-medium placeholder:text-[#7e7871]"
                    value={phone}
                    onChange={(el) => setPhone(el.target.value)}
                    placeholder="Телефон"
                    type="mail"
                  />
                )}
                {props.vk && (
                  <input
                    required
                    className="p-[15px] border border-solid focus:border-none checked:border-none active:border-none rounded-[8px] border-[#272523] text-[#272523] font-medium placeholder:text-[#7e7871]"
                    value={vk}
                    onChange={(el) => setVk(el.target.value)}
                    placeholder="Ссылка на вк*"
                    type="mail"
                  />
                )}
              </div>
              <div className="flex">
                <input type="checkbox" />
                <span>{props.check}</span>
                <span>{props.check ? "Забыли " : ""}</span>
              </div>
              <button
                disabled={!validName || !validPwd ? true : false}
                className="py-[16px] rounded-[10px] w-full bg-[#272523] text-[#FFF4E6] flex justify-center items-center"
              >
                {props.btn}
              </button>
            </form>
            <div className="">{props.suggest}</div>
            {props.accountExist ? (
              <div>
                <span>Уже зарегестрированы ?</span>
                <Link to="/log">Войти</Link>
              </div>
            ) : (
              <div>
                <span>Нет Аккаунта ?</span>
                <Link to="/reg">зарегестрироваться</Link>
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
};

export default AuthForm;
