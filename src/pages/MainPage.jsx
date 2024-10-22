import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Contacts from "../components/Contacts";
import Sidebar from "../components/Sidebar";
import Mainbar from "../components/Mainbar";

const MainPage = () => {
  const [activeView, setActiveView] = useState("projects");

  return (
    <div className="h-screen bg-slate-700 overflow-hidden">
      <Navbar />
      <Contacts />
      <Sidebar setActiveView={setActiveView} />
      <Mainbar activeView={activeView} />
    </div>
  );
};

export default MainPage;
