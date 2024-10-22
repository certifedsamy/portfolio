import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import file from "../assets/icons/file.svg";

const Bubble = () => {
  const popupRef = useRef(null);
  const innerDivsRef = useRef([]);

  //popup

  useEffect(() => {
    // Set the initial state of the div (off-screen to the left)
    gsap.set(popupRef.current, { x: "0%", autoAlpha: 0 });

    const timeoutId = setTimeout(() => {
      // Animate the div into view from the left
      gsap.to(popupRef.current, {
        x: "0%", // Move to original position
        autoAlpha: 1, // Fade in
        duration: 1,
        ease: "power2.out",
        onComplete: () => levitate(),
      });
    }, 1000); // 1.7 seconds delay

    return () => clearTimeout(timeoutId); // Clean up the timeout
  }, []);

  const levitate = () => {
    gsap.to(popupRef.current, {
      y: "-5px", // Move up slightly
      duration: 1,
      yoyo: true, // Reverse the animation
      repeat: -1, // Repeat indefinitely
      ease: "power1.inOut", // Ease for smoother levitation
    });
  };

  //hover

  const handleMouseEnter = () => {
    gsap.to(innerDivsRef.current, {
      autoAlpha: 1,
      x: 0,
      duration: 0.2,
      stagger: 0.3,
      ease: "bounce.inOut",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(innerDivsRef.current, {
      autoAlpha: 0,
      x: 20,
      duration: 0.2,
      stagger: 0.1,
      ease: "power1.inOut",
    });
  };

  const addToRefs = (el) => {
    if (el && !innerDivsRef.current.includes(el)) {
      innerDivsRef.current.push(el);
    }
  };

  return (
    <div
      ref={popupRef}
      className="w-[80px] h-[80px] bg-slate-500 rounded-full flex items-center justify-center text-white cursor-pointer absolute top-[650px] ml-[1420px] "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={file}
        alt=""
        className="h-8 hover:scale-110 transition-all duration-300"
      />
      <div className="absolute flex flex-col items-center ">
        <div
          ref={addToRefs}
          className="w-16 h-16 bg-slate-400 rounded-full absolute -left-[120px] -top-[35px]  opacity-0 z-5 hover:z-10 transition-all duration-300"
        ></div>
        <div
          ref={addToRefs}
          className="w-16 h-16 bg-slate-300 rounded-full absolute -left-[190px] -top-[35px] opacity-0 z-4 hover:z-10 transition-all duration-300"
        ></div>
        <div
          ref={addToRefs}
          className="w-16 h-16 bg-slate-200 rounded-full absolute -left-[260px] -top-[35px] opacity-0 z-3 hover:z-10 transition-all duration-300"
        ></div>
      </div>
    </div>
  );
};

export default Bubble;
