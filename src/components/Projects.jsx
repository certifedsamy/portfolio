import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { projects } from "../constant/data";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectCards } from "swiper/modules";

const Projects = () => {
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
    <Swiper
      modules={[Navigation, Pagination, EffectCards]}
      autoplay={true}
      //   pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      loop={true}
      centeredSlides={true}
      slidesPerView={1.5}
      effect="cards"
      slideShadows={true}
      rotate={true}
      perSlideRotate={2}
      perSlideOffset={8}
      style={{ padding: "20px" }}
      className="w-full h-full rounded-3xl overflow-hidden "
      ref={popupRef}
    >
      {projects.map((project) => (
        <SwiperSlide className="w-[700%] h-full relative rounded-[30px] cursor-grab overflow-hidden">
          <p className="font-space text-[100px] z-10 text-slate-700 absolute mt-12 ml-16 leading-[100px]">
            {project.title}
          </p>
          <div className="z-5 bg-white/50 absolute w-full h-full"></div>
          <img src={project.img} alt="" className="w-full h-full z-1" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Projects;
