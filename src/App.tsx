import { Route, Routes, useParams } from "react-router-dom";
import React from "react";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import About from "./pages/About";
import CertainCourse from "./pages/CertainCourse";
import Course from "./pages/Course";
import Main from "./pages/Main";
import Intensive from "./pages/Intensive";
import UserPage from "./pages/UserPage";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import UserCourse from "./components/UserCourse";
import UserProfile from "./components/UserProfile";
import UserCourseDetail from "./pages/UserCourseDetail";
import Videolessons from "./pages/Videolessons";
import Video from "./components/Video";
function App() {
  const { elN } = useParams();
  return (
    <div className="min-h-[100vh] max-w-[100vw] overflow-x-hidden flex flex-col">
      <Nav />
      <div className=" flex-grow">
        <Routes>
          <Route path="/" element={<Main />} />

          <Route path={`/:${elN}`} element={<CertainCourse useData={elN} />} />
          <Route path="about" element={<About />} />
          <Route path="course/*" element={<Course />} />
          <Route path="intensive" element={<Intensive />} />
          <Route path="reg" element={<Registration />} />
          <Route path="log" element={<Login />} />
          <Route path="user/*" element={<Profile />}>
            <Route path="profile" element={<UserProfile />} />
            <Route path="course/*">
              <Route index element={<UserCourse />} />
              <Route path="detail/*">
                <Route index element={<UserCourseDetail />} />
                <Route path="videoLessons/*">
                  <Route index element={<Videolessons />} />
                  <Route path="video" element={<Video />} />
                </Route>
              </Route>
            </Route>
          </Route>
          <Route />
        </Routes>
      </div>
    </div>
  );
}

export default App;
