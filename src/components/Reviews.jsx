import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Marquee from "react-fast-marquee";
import { BottomReviews, MiddleReviews, TopReviews } from "../constant/data";

const Reviews = () => {
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
    <div className="flex flex-col gap-16 pt-24" ref={popupRef}>
      <Marquee speed={100} pauseOnHover={true} className="cursor-pointer">
        {TopReviews.map((r, i) => (
          <div className="ml-36 p-5 border rounded-full w-auto">{r.img}</div>
        ))}
      </Marquee>
      <Marquee
        speed={60}
        direction="right"
        pauseOnHover={true}
        className="cursor-pointer"
      >
        {MiddleReviews.map((r, i) => (
          <div className="ml-36 p-5 border rounded-full w-auto">{r.img}</div>
        ))}
      </Marquee>
      <Marquee speed={150} pauseOnHover={true} className="cursor-pointer">
        {BottomReviews.map((r, i) => (
          <div className="ml-36 p-5 border rounded-full w-auto">{r.img}</div>
        ))}
      </Marquee>
    </div>
  );
};

export default Reviews;
