import React from "react";
import Duraction from "../components/Duraction";
import FeedBack from "../components/FeedBack";
import Footer from "../components/Footer";
import Header from "../components/Header";
import More from "../components/More";
import Sooner from "../components/Sooner";
import Speakers from "../components/Speakers";
import { setHLogo, backLogo } from "../redux/checkRegistrationSlice";
import { useAppDispatch } from "../redux/state";

const Main = () => {
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(backLogo());
  }, [setHLogo]);
  return (
    <div className={` pb-[90px]`}>
      <Header />
      <div className={`h-[100vh] `}></div>
      <div className="bg-[#fef3e5] z-[3] relative pt-[80px] sm:pt-[120px]">
        <Sooner />
        <Duraction />
        <More />
        <Speakers />
        <FeedBack />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
