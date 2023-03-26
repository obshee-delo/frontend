import React from "react";
import { getCourse } from "../assets/text";
import AboutCourses from "../components/AboutCourses";
import Chose from "../components/Chose";
import GeneralHeader from "../components/GeneralHeader";
import Footer from "../components/Footer";
import { setHLogo, backLogo } from "../redux/checkRegistrationSlice";
import { useAppDispatch } from "../redux/state";
import { useParams } from "react-router-dom";
import {
  certainCourceState,
  getCertainCource,
} from "../redux/CertainCourceSlice";
import { useAppSelector } from "./../redux/state";
const CertainCourse: React.FC<any> = () => {
  const { name } = useParams();

  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(backLogo());
    dispatch(getCertainCource(name));
  }, [setHLogo]);
  const dataCource = useAppSelector(certainCourceState);
  return (
    <div className="text-[#272523] bg-[#fef3e5]">
      <GeneralHeader
        useData={name}
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
