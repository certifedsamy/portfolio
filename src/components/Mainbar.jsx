import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

import Project from "../components/Projects";
import Reviews from "./Reviews";
import ConatctMe from "./ConatctMe";

const Mainbar = ({ activeView }) => {
  const MainbarRef = useRef(null);

  useEffect(() => {
    gsap.set(MainbarRef.current, { x: "-1800px", autoAlpha: 0 });

    const timeoutId = setTimeout(() => {
      gsap.to(MainbarRef.current, {
        x: "20px",
        autoAlpha: 1,
        duration: 1,
        ease: "power2.out",
        onComplete: () => levitate(),
      });
    }, 1500);

    return () => clearTimeout(timeoutId); // Clean up the timeout
  }, []);
  const levitate = () => {
    gsap.to(MainbarRef.current, {
      y: "10px", // Move up slightly
      duration: 1,
      yoyo: true, // Reverse the animation
      repeat: -1, // Repeat indefinitely
      ease: "power1.inOut", // Ease for smoother levitation
    });
  };
  return (
    <div
      className="w-[60%] h-[70vh] bg-transparent mt-[-515px] rounded-[35px] overflow-hidden"
      ref={MainbarRef}
    >
      {activeView === "reviews" && <Reviews />}
      {activeView === "projects" && <Project />}
      {activeView === "contact" && <ConatctMe />}
      {activeView === "about" && <div>this is the about component</div>}
    </div>
  );
};

export default Mainbar;
