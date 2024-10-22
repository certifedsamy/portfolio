import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import heart from "../assets/icons/heart.svg";

const Contacts = () => {
  //email animation
  const emailRef = useRef(null);

  useEffect(() => {
    gsap.set(emailRef.current, { y: "200vh", autoAlpha: 0 });

    const timeoutId = setTimeout(() => {
      gsap.to(emailRef.current, {
        y: "70vh",
        autoAlpha: 1,
        duration: 1,
        ease: "power2.out",
      });
    }, 800);

    return () => clearTimeout(timeoutId); // Clean up the timeout
  }, []);

  //number animation
  const numberRef = useRef(null);

  useEffect(() => {
    gsap.set(numberRef.current, { y: "200vh", autoAlpha: 0 });

    const timeoutId = setTimeout(() => {
      gsap.to(numberRef.current, {
        y: "70vh",
        autoAlpha: 1,
        duration: 1,
        ease: "power2.out",
      });
    }, 600);

    return () => clearTimeout(timeoutId); // Clean up the timeout
  }, []);

  //location animation
  const locationRef = useRef(null);

  useEffect(() => {
    gsap.set(locationRef.current, { y: "200vh", autoAlpha: 0 });

    const timeoutId = setTimeout(() => {
      gsap.to(locationRef.current, {
        y: "70vh",
        autoAlpha: 1,
        duration: 1,
        ease: "power2.out",
      });
    }, 1000);

    return () => clearTimeout(timeoutId); // Clean up the timeout
  }, []);

  //coder animation
  const coderRef = useRef(null);

  useEffect(() => {
    gsap.set(coderRef.current, { y: "75vh", autoAlpha: 0 });

    const timeoutId = setTimeout(() => {
      gsap.to(coderRef.current, {
        y: "75vh",
        autoAlpha: 1,
        duration: 1,
        ease: "power2.out",
      });
    }, 2000);

    return () => clearTimeout(timeoutId); // Clean up the timeout
  }, []);

  return (
    <div className="flex flex-col">
      <div className="w-auto flex space-x-10 font-space items-center text-center justify-center">
        <div className="flex flex-col" ref={numberRef}>
          <h1 className="text-lg text-white">My number</h1>
          <span className="text-md text-slate-400">+213 770052179</span>
        </div>

        <div className="flex flex-col" ref={emailRef}>
          <h1 className="text-lg text-white">My e-mail</h1>
          <span className="text-md text-slate-400">
            samymoulhim05@gmail.com
          </span>
        </div>

        <div className="flex flex-col" ref={locationRef}>
          <h1 className="text-lg text-white">Location</h1>
          <span className="text-md text-slate-400">Bouira Algeria</span>
        </div>
      </div>
      <div className="text-center" ref={coderRef}>
        <h1 className="text-md font-space text-white flex items-center gap-3 justify-center">
          Made with <img src={heart} alt="" className="h-4 w-4" /> by SAMY
        </h1>
      </div>
    </div>
  );
};

export default Contacts;
