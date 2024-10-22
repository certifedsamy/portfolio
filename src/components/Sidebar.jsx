import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { NavLink } from "react-router-dom";

const Sidebar = ({ setActiveView }) => {
  const sidebarREF = useRef(null);

  useEffect(() => {
    gsap.set(sidebarREF.current, { x: "1800px", autoAlpha: 0 });

    const timeoutId = setTimeout(() => {
      gsap.to(sidebarREF.current, {
        x: "1020px",
        autoAlpha: 1,
        duration: 1,
        ease: "power2.out",
      });
    });

    return () => clearTimeout(timeoutId); // Clean up the timeout
  }, []);
  //   const levitate = () => {
  //     gsap.to(sidebarREF.current, {
  //       y: "-10px", // Move up slightly
  //       duration: 1,
  //       yoyo: true, // Reverse the animation
  //       repeat: -1, // Repeat indefinitely
  //       ease: "power1.inOut", // Ease for smoother levitation
  //     });
  //   };

  return (
    <div
      className="bg-white rounded-xl h-auto w-[30%] p-5 font-space text-slate-400 py-12 mt-10"
      ref={sidebarREF}
    >
      <div className="flex flex-col gap-10 text-center">
        <NavLink to="/">
          <div className="text-lg cursor-pointer hover:scale-110 transition-all duration-100 hover:text-slate-600">
            Home
          </div>
        </NavLink>

        <button
          className="text-lg cursor-pointer hover:scale-110 transition-all duration-100 hover:text-slate-600"
          onClick={() => setActiveView("projects")}
        >
          Projects
        </button>
        <button
          className="text-lg cursor-pointer hover:scale-110 transition-all duration-100 hover:text-slate-600"
          onClick={() => setActiveView("reviews")}
        >
          Reviews
        </button>
        {/* <button
          className="text-lg cursor-pointer hover:scale-110 transition-all duration-100 hover:text-slate-600"
          onClick={() => setActiveView("about")}
        >
          About-me
        </button> */}
        <button
          className="text-lg cursor-pointer hover:scale-110 transition-all duration-100 hover:text-slate-600"
          onClick={() => setActiveView("contact")}
        >
          Socials
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
