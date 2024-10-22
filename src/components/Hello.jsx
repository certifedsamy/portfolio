import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Hello = () => {
  const divRef = useRef(null);

  useEffect(() => {
    // Set the initial state of the div
    gsap.set(divRef.current, { y: "-100vh", autoAlpha: 0 });

    const timeoutId = setTimeout(() => {
      // Animate the div into view
      gsap.to(divRef.current, {
        y: "0vh", // Drop to original position
        autoAlpha: 1, // Fade in
        duration: 1,
        ease: "power2.out",

        onComplete: () => levitate(),
      });
    }); // 1.5 seconds delay

    return () => clearTimeout(timeoutId); // Clean up the timeout
  }, []);
  const levitate = () => {
    gsap.to(divRef.current, {
      y: "10px", // Move up slightly
      duration: 1,
      yoyo: true, // Reverse the animation
      repeat: -1, // Repeat indefinitely
      ease: "power1.inOut", // Ease for smoother levitation
    });
  };

  return (
    <div className="flex text-center mt-[-150px]" ref={divRef}>
      <h1 className="text-[350px] text-white font-space mx-auto tracking-[10px]">
        Hello!
      </h1>
    </div>
  );
};

export default Hello;
