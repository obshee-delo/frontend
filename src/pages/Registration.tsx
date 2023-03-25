import React from "react";
import { changeLogo } from "../redux/checkRegistrationSlice";
import { setHLogo } from "../redux/checkRegistrationSlice";
import { images } from "../assets/img";
import Footer from "./../components/Footer";
import {
  useLoginUserMutation,
  useRegisterUserMutation,
} from "../services/authApi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAppDispatch } from "../redux/state";
import { setUsers } from "../redux/authSlice";
const Registration = () => {
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(changeLogo());
  }, [setHLogo]);
  const initialState = {
    name: "",
    sureName: "",
    email: "",
    password: "",
    phone: "",
    link: "",
  };
  const [
    loginUser,
    {
      data: loginData,
      isSuccess: isLoginSuccess,
      isError: isLoginError,
      error: loginError,
    },
  ] = useLoginUserMutation();
  const [
    registerUser,
    {
      data: registerData,
      isSuccess: isRegisterSuccess,
      isError: isRegisterError,
      error: registerError,
    },
  ] = useRegisterUserMutation();
  const navigate = useNavigate();
  const [formValue, setFormValue] = React.useState(initialState);
  const [showRegister, setSHowRegister] = React.useState(true);
  const { name, sureName, email, password, phone, link } = formValue;
  const handleChange = (el: any) => {
    setFormValue({ ...formValue, [el.target.name]: el.target.value });
  };
  const handleLogin = async () => {
    if (email && password) {
      await loginUser({ email, password });
    } else {
      toast.error("please fill all field");
    }
  };
  const handleRegister = async () => {
    if (name && email && password) {
      await registerUser({ name, email, password, phone, link });
    }
  };
  React.useEffect(() => {
    if (isLoginSuccess) {
      toast.success("user Login success");
      dispatch(
        setUsers({
          name: loginData.result.name,
          sureName: loginData.result.sureName,
          email: loginData.result.email,
          password: loginData.result.password,
          link: loginData.result.link,
          phone: loginData.result.phone,
          token: loginData.token,
        })
      );
      navigate("/profile");
    }
    if (isRegisterSuccess) {
      toast.success("user Register success");
      dispatch(
        setUsers({
          name: registerData.result.name,
          sureName: registerData.result.sureName,
          email: registerData.result.email,
          password: registerData.result.password,
          link: registerData.result.link,
          phone: registerData.result.phone,
          token: registerData.token,
        })
      );
      navigate("/profile");
    }
  }, [isLoginSuccess, isRegisterSuccess]);
  React.useEffect(() => {
    if (loginError) {
      // toast.error((loginError as any).data.message);
      toast.error("wrong login");
    }
    if (registerError) {
      // toast.error((registerError as any).data.message);
      toast.error("wrong register");
    }
  }, [isLoginError, isRegisterError]);
  return (
    <>
      <section className="h-auto mb-[50px] sm:mb-[0px] sm:h-[100vh] ">
        <div className="pt-[30px] sm:pt-[89px] h-full">
          <div className="flex   h-full">
            <article
              className={`flex ${
                !showRegister ? "flex-row-reverse" : " flex-row"
              } flex   w-[100vw]`}
            >
              <img
                onClick={() => toast.success("great")}
                className="w-[50%]  min-h-[100%] hidden sm:block"
                src={!showRegister ? images.auth : images.log}
                alt=""
              />
              <div
                className={`grow ${
                  !showRegister
                    ? "flex-[100%] sm:flex-[50%] grow flex justify-start sm:justify-end"
                    : "flex-[50%] "
                }`}
              >
                <div
                  className={` ${
                    !showRegister
                      ? "w-full pl-5 lg:pl-0 lg:w-[455px] pt-[45px] pr-[15px] md:pr-[50px] lg:pr-[112px]"
                      : "w-auto pr-5 lg:pr-0 lg:w-[455px] pt-[45px] pl-[15px] md:pl-[50px] lg:pl-[112px]"
                  } `}
                >
                  <h1 className="text-[36px] sm:text-[40px] font-semibold mb-[20px]">
                    {!showRegister ? "Авторизация" : "Регистрация"}
                  </h1>
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="mb-[15px]"
                  >
                    <div className="flex flex-col w-full gap-[10px] mb-[15px]">
                      <input
                        required
                        className="p-[15px] py-[7px] border border-solid focus:border-none checked:border-none active:border-none rounded-[8px] border-[#272523] text-[14px] text-[#272523] font-medium placeholder:text-[#7e7871] bg-transparent"
                        value={email}
                        onChange={handleChange}
                        placeholder="E-mail*"
                        type="email"
                        name="email"
                      />

                      <input
                        className="p-[15px] py-[7px] text-[14px] border border-solid focus:border-none checked:border-none active:border-none rounded-[8px] border-[#272523] text-[#272523] font-medium placeholder:text-[#7e7871] bg-transparent"
                        required
                        onChange={handleChange}
                        placeholder="Пароль*"
                        type="password"
                        name="password"
                        value={password}
                      />
                      {showRegister && (
                        <>
                          <input
                            className="p-[15px] text-[14px] py-[7px] border border-solid focus:border-none checked:border-none active:border-none rounded-[8px] border-[#272523] text-[#272523] font-medium placeholder:text-[#7e7871] bg-transparent"
                            value={name}
                            required
                            type="text"
                            name="name"
                            placeholder="Имя"
                            onChange={handleChange}
                          />
                          <input
                            required
                            className="p-[15px] focus:border-[1px] text-[14px] py-[7px] border border-solid focus:border-none checked:border-none active:border-none rounded-[8px] border-[#272523] text-[#272523] font-medium placeholder:text-[#7e7871] bg-transparent"
                            value={sureName}
                            onChange={handleChange}
                            placeholder="Фамилия*"
                            type="text"
                            name="sureName"
                          />
                          <input
                            required
                            className="p-[15px] py-[7px] text-[14px] border border-solid focus:border-none checked:border-none active:border-none rounded-[8px] border-[#272523] text-[#272523] font-medium placeholder:text-[#7e7871] bg-transparent"
                            value={phone}
                            onChange={handleChange}
                            placeholder="Телефон"
                            type="tel"
                            name="phone"
                          />

                          <input
                            required
                            className="p-[15px] py-[7px] text-[14px] border border-solid focus:border-none checked:border-none active:border-none rounded-[8px] border-[#272523] text-[#272523] font-medium placeholder:text-[#7e7871] bg-transparent"
                            value={link}
                            onChange={handleChange}
                            placeholder="Ссылка на вк*"
                            type="url"
                            name="link"
                          />
                        </>
                      )}
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
                    {!showRegister ? (
                      <button
                        type="button"
                        onClick={() => handleLogin()}
                        className="py-[10px] rounded-[10px] w-full bg-[#272523] text-[#FFF4E6] flex justify-center items-center"
                      >
                        "Вoйти"
                      </button>
                    ) : (
                      <button
                        onClick={() => handleRegister()}
                        className="py-[10px] rounded-[10px] w-full bg-[#272523] text-[#FFF4E6] flex justify-center items-center"
                      >
                        "Заарегестрироваться"
                      </button>
                    )}
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
                    <span className=" text-[12px] cursor-pointer">
                      {!showRegister ? (
                        <span onClick={() => setSHowRegister(true)}>
                          Нет аккаунта? Зарегестрироваться
                        </span>
                      ) : (
                        <span onClick={() => setSHowRegister(false)}>
                          Уже зарегестрированы ? Войти
                        </span>
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      <div className="block sm:hidden">
        <Footer />
      </div>
    </>
  );
};

export default Registration;
