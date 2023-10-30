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
  useTransform
} from "framer-motion";
export default function Framer() {
    const [visible, setVisible] = useState(true);
    const controls = useAnimationControls();
    const handleClick = () => {
      controls.start("");
    };
    const ref = useRef(null);
    const isInView = useInView(ref,{once:true});
    useEffect(() => {
      console.log(isInView);
    }, [isInView]);
  const {scrollYProgress} = useScroll();
  const scaleX = useSpring(scrollYProgress)
  const background = useTransform(scrollYProgress,[0,0.5,1],["rgb(20,50,60)","rgb(100,50,2000)","rgb(200,50,60)"])
  return (
    <div className="m-10">
      <AnimatePresence mode="popLayout">
        {visible && (
          <motion.div
            initial={{ rotate: "0deg", scale: 0 ,x:0}}
            animate={{ rotate: "180deg", scale: 1,x:[100,-100,150,-150,15,0]}}
            exit={{ rotate: "0deg", scale: 0 ,x:[100,-100,150,-150,15,0]}}
            transition={{ duration: 1, ease: "backInOut" ,times:[0,0.25,0.5,0.85,1]}}
            className="h-40 w-40  bg-black"
          ></motion.div>
        )}
      </AnimatePresence>

      <motion.button layout onClick={() => setVisible(!visible)} className="text-slate-800">
        show/hide
      </motion.button>
      <MotionConfig transition={{ duration: .125, ease: "easeInOut" }}>
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
      <motion.div style={{scaleX,background}} className="w-screen h-5 sticky origin-left bg-blue-600 top-0"></motion.div>
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
