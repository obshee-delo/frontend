import React from "react";
import { getCourse } from "../assets/text";
import AboutCourses from "../components/AboutCourses";
import Chose from "../components/Chose";
import GeneralHeader from "../components/GeneralHeader";
import Footer from "../components/Footer";

import { useDispatch } from "react-redux";
import { setHLogo, backLogo } from "../redux/checkRegistrationSlice";
const CertainCourse = ({ useData }) => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(backLogo());
  }, [setHLogo]);
  return (
    <div className="text-[#272523] bg-[#fef3e5]">
      <GeneralHeader
        useData={useData}
        underTitle="Подготовка к олимпиадам"
        subtitle="Обществознание"
        underTitle2="по Обществознанию"
      />

      <AboutCourses />
      <Chose
        filters={false}
        data={getCourse}
        title="Курс или интенсив – выбираешь ты"
      />
      <Footer />
    </div>
  );
};

export default CertainCourse;
