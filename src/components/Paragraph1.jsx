import React, { useRef, useEffect } from "react";

const Paragraph1 = ({ text }) => {
  const textRef = useRef(null);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        textRef.current.textContent += text.charAt(index);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 10); // Adjust speed here (100 ms per character)

    return () => clearInterval(interval); // Clean up on unmount
  }, [text]);

  return (
    <div
      className="h-[20vh] w-[35%] font-space text-xl mx-auto mt-[-60px] mb-10 text-slate-500 text-center"
      ref={textRef}
    ></div>
  );
};

export default Paragraph1;
