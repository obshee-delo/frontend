import { Route, Routes, useParams } from "react-router-dom";
import React from "react";
import Nav from "./components/Nav";
import About from "./pages/About";
import CertainCourse from "./pages/CertainCourse";
import Course from "./pages/Course";
import Main from "./pages/Main";
import Intensive from "./pages/Intensive";
import Registration from "./pages/Registration";
import Profile from "./pages/Profile";
import UserCourse from "./components/UserCourse";
import UserProfile from "./components/UserProfile";
import UserCourseDetail from "./pages/UserCourseDetail";
import Videolessons from "./pages/Videolessons";
import Video from "./components/Video";
import { useAppDispatch } from "./redux/state";
import { setUsers } from "./redux/authSlice";
function App() {
  const dispatch = useAppDispatch();
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  React.useEffect(() => {
    dispatch(setUsers(user));
  }, []);
  return (
    <div className="min-h-[100vh] max-w-[100vw] overflow-x-hidden flex flex-col">
      <Nav />
      <div className=" flex-grow">
        <Routes>
          <Route path="/" element={<Main />} />

          <Route path={`/cours/:name`} element={<CertainCourse />} />
          <Route path="about" element={<About />} />
          <Route path="course/*" element={<Course />} />
          <Route path="intensive" element={<Intensive />} />
          <Route path="reg" element={<Registration />} />
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
