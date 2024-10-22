import React, { useState } from "react";
import Hello from "../components/Hello";
import Button1 from "../components/Button1";
import Paragraph1 from "../components/Paragraph1";
import { useNavigate } from "react-router-dom";

const Presentation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [moveUp, setMoveUp] = useState(false);
  const [moveDown, setMoveDown] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setMoveUp(true);
    setMoveDown(true);
    // Set a timeout to hide components after the animation completes
    setTimeout(() => {
      setIsVisible(false);
      navigate("/main");
    }, 700); // Adjust duration based on your animation timing
  };

  return (
    <div className="bg-slate-700 h-screen flex flex-col items-center justify-center overflow-hidden">
      {isVisible && (
        <div
          className={`transition-transform duration-500 ${
            moveUp ? "-translate-x-full" : ""
          }`}
        >
          <Hello />
        </div>
      )}
      {isVisible && (
        <div
          className={`transition-all duration-500 ${
            moveDown ? "opacity-0" : ""
          }`}
        >
          <Paragraph1 text="Hi! I’m Samy, a passionate frontend mentor with a year of experience in web development. I specialize in HTML, CSS, JavaScript, and React.js, and I love using Tailwind CSS to create beautiful, responsive designs." />
        </div>
      )}

      <div
        className={`transition-transform duration-500 ${
          moveDown ? "translate-x-[1000px]" : ""
        }`}
      >
        <Button1 onClick={handleClick} />
      </div>
    </div>
  );
};

export default Presentation;
