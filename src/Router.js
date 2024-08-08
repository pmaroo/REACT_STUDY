import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Home from "./home";
import About from "./about";

const Router = () => {
  const location = useLocation(); // router의 정보들을 알 수 있음
  const navigate = useNavigate(); // router 이동 트리거 (onChange,onClick등)

  // 하나의 div로 감싸져있어야하고 꼭 Route를 Routes로 감싸야만한다.
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default Router;
