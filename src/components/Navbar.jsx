import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Navbar = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    // Initial drop-down animation
    gsap.fromTo(
      navbarRef.current,
      { y: "-200%", x: "0%" },
      { y: "0%", duration: 1, ease: "power1.out", onComplete: startSliding }
    );

    function startSliding() {
      // Slide to the left
      gsap.to(navbarRef.current, {
        x: "90%", // Slide completely off the left side
        duration: 1,
        ease: "power1.inOut",
        onComplete: startLevitating, // Start levitating after sliding
      });
    }

    function startLevitating() {
      // Levitating effect
      gsap.to(navbarRef.current, {
        y: "-5px", // Levitating up
        duration: 1,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1, // Repeat infinitely
      });
    }
  }, []);
  return (
    <div
      ref={navbarRef}
      className="flex items-center gap-10 px-5 py-3 rounded-xl bg-slate-500 text-white justify-center w-[35%] mx-auto mt-5 font-space"
    >
      Welcome to my portfolio hope you enjoy _
    </div>
  );
};

export default Navbar;
