import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { NavLink } from "react-router-dom";

const Button1 = ({ onClick }) => {
  const popupRef = useRef(null);

  useEffect(() => {
    // Set the initial state of the div (off-screen to the left)
    gsap.set(popupRef.current, { x: "0%", autoAlpha: 0 });

    const timeoutId = setTimeout(() => {
      // Animate the div into view from the left
      gsap.to(popupRef.current, {
        x: "0%", // Move to original position
        autoAlpha: 1, // Fade in
        duration: 0.5,
        ease: "power2.out",
        // onComplete: () => levitate(),
      });
    }, 3500); // 1.7 seconds delay

    return () => clearTimeout(timeoutId); // Clean up the timeout
  }, []);

  const levitate = () => {
    gsap.to(popupRef.current, {
      y: "-10px", // Move up slightly
      duration: 1,
      yoyo: true, // Reverse the animation
      repeat: -1, // Repeat indefinitely
      ease: "power1.inOut", // Ease for smoother levitation
    });
  };

  return (
    <div className="flex text-center" ref={popupRef}>
      <button
        onClick={onClick}
        className="bg-white text-slate-700 rounded-lg border-2 border-white hover:bg-slate-700 hover:text-white py-3 px-5 transition-all duration-300 hover:scale-90 w-[250px] mx-auto"
      >
        Click to see more
      </button>
    </div>
  );
};

export default Button1;
