"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  MotionConfig,
  useAnimationControls,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
export default function Framer() {
  const [visible, setVisible] = useState(true);
  const controls = useAnimationControls();
  const handleClick = () => {
    controls.start("");
  };
  const ref = useRef(null);
  const ref2 = useRef(null);
  const isInView2 = useInView(ref2);
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    console.log(isInView2);
  }, [isInView2]);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scaleX = useSpring(scrollYProgress);
  const background = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["rgb(20,50,60)", "rgb(100,50,2000)", "rgb(200,50,60)"]
  );
  return (
    <div>
      <div className="h-5 w-screen bg-red-700" ref={ref2}></div>
      <div className="m-5 overflow-hidden">
        <motion.div
          className=" text-black font-extrabold text-4xl"
          variants={{
            initial: { y: "200%", rotate: "10deg" },
            inViewT: { y: "200%", rotate: "0deg" },
            inViewF: { y: "-200%", rotate: "-10deg" },
          }}
          initial={"initial"}
          animate={isInView2 ? "inViewT" : "inViewF"}
          transition={{ duration: 0.5, ease: "backInOut" }}
        >
          hello
        </motion.div>
      </div>

      <AnimatePresence mode="popLayout">
        {visible && (
          <motion.div
            initial={{ rotate: "0deg", scale: 0, x: 0 }}
            animate={{
              rotate: "180deg",
              scale: 1,
              x: [100, -100, 150, -150, 15, 0],
            }}
            exit={{
              rotate: "0deg",
              scale: 0,
              x: [100, -100, 150, -150, 15, 0],
            }}
            transition={{
              duration: 1,
              ease: "backInOut",
              times: [0, 0.25, 0.5, 0.85, 1],
            }}
            className="h-40 w-40  bg-black"
          ></motion.div>
        )}
      </AnimatePresence>

      <motion.button
        layout
        onClick={() => setVisible(!visible)}
        className="text-slate-800"
      >
        show/hide
      </motion.button>
      <MotionConfig transition={{ duration: 0.125, ease: "easeInOut" }}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95, rotate: "9deg" }}
          className="bg-zinc-950 text-gray-200 p-5"
        >
          sfdsa
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95, rotate: "-9deg" }}
          className="bg-red-950 text-gray-200 p-5"
        >
          sfdsa
        </motion.button>
      </MotionConfig>
      <motion.div
        className="h-20 w-20 bg-black"
        variants={{ initial: { rotate: "0deg" }, flip: { rotate: "360deg" } }}
        // whileHover={'flip'}
        initial={"initial"}
        animate={controls}
      ></motion.div>
      <button onClick={handleClick}>flipit</button>
      <div className="h-[150vh]"></div>
      <motion.div
        className="h-screen bg-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      ></motion.div>
      <div
        ref={ref}
        className="h-screen  "
        style={{
          transition: "1s background",
          background: isInView ? "blue" : "red",
        }}
      ></div>
      <motion.div
        style={{ scaleX, background }}
        className="w-screen h-5 sticky origin-left bg-blue-600 top-0"
      ></motion.div>
      <div className="w-80 h-96 m-5 bg-black"></div>
      <div className="w-80 h-96 m-5 bg-red-200"></div>
      <div className="w-80 h-96 m-5 bg-black"></div>
      <div className="w-80 h-96 m-5 bg-red-200"></div>
      <div className="w-80 h-96 m-5 bg-black"></div>
      <div className="w-80 h-96 m-5 bg-red-200"></div>
      <div className="w-80 h-96 m-5 bg-black"></div>
      <div className="w-80 h-96 m-5 bg-red-200"></div>
      <div className="w-80 h-96 m-5 bg-black"></div>
      <div className="w-80 h-96 m-5 bg-red-200"></div>
    </div>
  );
}
{/* <motion.div ref={ref} style={{ y: text }}>
          <div className=" pb-48 ">
            <motion.div
              className="pt-4 flex justify-between items-center"
              ref={ref2}
            >
              <div>
                <div className="overflow-hidden">
                  <motion.div
                    className="flex"
                    variants={{
                      initial: { y: "130%", rotate: "5deg" },
                      viewT: { y: "0%", rotate: "0deg" },
                      viewF: { y: "-130%", rotate: "0deg" },
                    }}
                    initial={"initial"}
                    animate={isInView2 ? "viewT" : "viewF"}
                    transition={{ duration: 0.125, ease: "backInOut" }}
                  >
                    <div className="pl-5 font-bold text-3xl ">exo</div>
                    <div className="pl-1  font-light text-3xl  italic">ape</div>
                  </motion.div>
                </div>
              </div>
              <div className="flex pr-5 md:hidden ">
                <div className=" pr-3 text-sm font-medium"> Menu</div>
                <div className=" flex-col self-center  ">
                  <div className=" w-5 h-0.5 bg-white"></div>
                  <div className="w-5 h-0.5 bg-white my-1"></div>
                  <div className="w-5 h-0.5 bg-white"></div>
                </div>
              </div>
              <div className="pr-5 hidden sm:hidden md:inline-flex text-lg ">
                <div className="pr-3">Work</div>
                <div className="pr-3">Studio</div>
                <div className="pr-3">News</div>
                <div>Contact</div>
              </div>
            </motion.div>
          </div>
        </motion.div> */}