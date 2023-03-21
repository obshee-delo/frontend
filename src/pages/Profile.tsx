import React from "react";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Link, Outlet } from "react-router-dom";
import { out, userState } from "../redux/userSLice";
import UserProfile from "../components/UserProfile";
import { IRootState } from "./../redux/state";
const Profile = () => {
  const profile = useSelector(
    (state: IRootState) => state.auth.profileData.profile
  );
  const isLoggedIn = useSelector(
    (state: IRootState) => !!state.auth.authData.accessToken
  );
  const get = useSelector(userState);
  const dispacth = useDispatch();
  const person = get.exist;
  const [nav, setNav] = React.useState(false);
  const getOut = () => {
    dispacth(out());
    setNav(false);
  };
  const option: boolean = true;
  const [i, setI] = React.useState(1);
  return (
    <>
      {!person ? (
      {/* {isLoggedIn ? ( */}
        <Navigate to="/reg" />
      ) : (
        <section className="flex text-[#272523] flex-col justify-between h-auto sm:min-h-[100vh] bg-[#fdf2e5]">
          <div className="pt-[60px] sm:pt-[85px] grow pb-[70px] sm:pb-[95px] lg:pb-[120px]">
            <div className="  py-[21px] mb-[30px] sm:mb-[45px] lg:mb-[60px]  bg-[#272523] text-white ">
              <div className="wc px-[15px] flex justify-between items-center">
                <div className="flex gap-[30px]">
                  <span
                    className={` ${
                      option === true
                        ? "text-[#FFF4E6] font-medium relative after:absolute after:content-[''] after:w-full after:h-[2px] after:bg-[#DEC3E4] after:left-0 after:bottom-[-21px]"
                        : "text-[#d4cbbf] font-normal"
                    } cursor-pointer`}
                  >
                    <Link to="profile">Профиль {profile}</Link>
                  </span>
                  <span
                    onClick={() => setI(0)}
                    className={` ${
                      option === false
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
      )}
      <Footer />
    </>
  );
};

export default Profile;
