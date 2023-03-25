import React from "react";
import Footer from "../components/Footer";
import { Link, Outlet } from "react-router-dom";
import UserProfile from "../components/UserProfile";
import { useAppDispatch } from "./../redux/state";
import { logOut } from "./../redux/authSlice";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const navigate = useNavigate();
  const dispacth = useAppDispatch();
  const getOut = () => {
    dispacth(logOut());
    navigate("/reg");
  };
  const [i, setI] = React.useState<number>(1);
  return (
    <>
      <section className="flex text-[#272523] flex-col justify-between h-auto sm:min-h-[100vh] bg-[#fdf2e5]">
        <div className="pt-[60px] sm:pt-[85px] grow pb-[70px] sm:pb-[95px] lg:pb-[120px]">
          <div className="  py-[21px] mb-[30px] sm:mb-[45px] lg:mb-[60px]  bg-[#272523] text-white ">
            <div className="wc px-[15px] flex justify-between items-center">
              <div className="flex gap-[30px]">
                <span
                  onClick={() => setI(1)}
                  className={` ${
                    i === 1
                      ? "text-[#FFF4E6] font-medium relative after:absolute after:content-[''] after:w-full after:h-[2px] after:bg-[#DEC3E4] after:left-0 after:bottom-[-21px]"
                      : "text-[#d4cbbf] font-normal"
                  } cursor-pointer`}
                >
                  <Link to="profile">Профиль </Link>
                </span>
                <span
                  onClick={() => setI(0)}
                  className={` ${
                    i === 0
                      ? "text-[#FFF4E6] font-medium relative after:absolute after:content-[''] after:w-full after:h-[2px] after:bg-[#DEC3E4] after:left-0 after:bottom-[-21px]"
                      : "text-[#d4cbbf] font-normal"
                  } cursor-pointer`}
                >
                  <Link to="course">Мои курсы</Link>
                </span>
              </div>
              <span
                onClick={getOut}
                className="underline cursor-pointer text-[12px] text-[#d4cbbf]"
              >
                Выйти
              </span>
            </div>
          </div>{" "}
          {i === 1 ? <UserProfile /> : null}
          <Outlet />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Profile;
