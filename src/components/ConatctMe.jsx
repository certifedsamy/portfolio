import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import arrow from "../assets/icons/fleche.svg";
import link from "../assets/icons/link.svg";

import { socials } from "../constant/data";

const ConatctMe = () => {
  const popupRef = useRef(null);

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
      });
    }, 200); // 1.7 seconds delay

    return () => clearTimeout(timeoutId); // Clean up the timeout
  }, []);
  return (
    <div className="font-space flex flex-col text-center p-12" ref={popupRef}>
      <div className="flex gap-3 items-center mx-auto bg-white/30 rounded-lg px-5">
        <h1 className="text-5xl text-slate-700">You can find me here</h1>
        <img src={arrow} alt="" className="h-16 rotate-90" />
      </div>
      <div className="flex flex-wrap">
        {socials.map((s, i) => (
          <div className="border-2 border-white rounded-lg p-5 font-space w-auto mx-auto mt-16 hover:bg-white/5 transition-all duration-300">
            <div className="flex gap-5">
              <img src={s.img} alt="" className="h-8" />
              <span className="text-lg text-white">{s.name}</span>
            </div>
            <div className="flex cursor-pointer gap-1 py-5">
              <a
                href={s.link}
                className="text-blue-600 hover:underline text-sm transition-all duration-300"
              >
                {s.link}
              </a>
              <img src={link} alt="" className="h-5" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConatctMe;
