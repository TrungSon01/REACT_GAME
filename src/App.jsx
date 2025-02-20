import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage/HomePage";
import LoginPage from "./page/LoginPage/LoginPage";
import Header from "./component/Header/Header";
import DetailPage from "./page/DetailPage/DetailPage";
import LearnReduxPage from "./page/LearnReduxPage/LearnReduxPage";
import ExShoe from "./page/ExShoe/ExShoe";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/detail/:idMovie" element={<DetailPage />} />
        <Route path="/redux" element={<LearnReduxPage />} />
        <Route path="ex-shoe" element={<ExShoe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
