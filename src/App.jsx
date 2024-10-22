import React from "react";
import Presentation from "./pages/Presentation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Presentation />}></Route>
        <Route path="/main" element={<MainPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
