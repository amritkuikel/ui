"use client";
import { useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Lenis from "@studio-freight/lenis";
export default function Home() {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const isInView = useInView(ref2);
  const isInView2 = useInView(ref3);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backGroundPic = useTransform(scrollYProgress, [0, 1], ["1", "1.2"]);
  const backGroundPic2 = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const bgOpacity = useTransform(scrollYProgress, [0, 1], ["0.1", "0.4"]);
  const text = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });

  return (
    <div className="text-slate-100 bg-slate-900 relative overflow-hidden">
      {/* bg-image */}
      <motion.div
        initial={{
          y: "25%",
          scale: 1.2,
          rotate: "15deg",
          x: "-12%",
          opacity: 0,
        }}
        animate={{ y: "0%", scale: 1, rotate: "0deg", x: "0%", opacity: 1 }}
        transition={{ duration: 1.3, ease: "backInOut" }}
        style={{ scale: backGroundPic, y: backGroundPic2 }}
        className="bg-[url('../../public/assests/images/exo-ape-hero-1.jpg')] w-screen h-screen bg-center  bg-cover absolute "
      >
        <motion.div
          className=" w-screen h-screen"
          style={{ backgroundColor: "black", opacity: bgOpacity }}
        ></motion.div>
      </motion.div>

      <div>
        <div className="h-1 w-screen" ref={ref3}></div>
        {/* nav bar */}
        <motion.div ref={ref} style={{ y: text }}>
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
        </motion.div>
        {/* hero texts */}
        <motion.div className="flex-col px-5 pt-4" style={{ y: text }}>
          <div className="pb-5">
            {" "}
            <div className="overflow-hidden">
              <motion.div
                className="text-lg font-medium "
                variants={{
                  initial: { y: "130%", rotate: "5deg" },
                  viewT: { y: "0%", rotate: "0deg" },
                  viewF: { y: "-130%", rotate: "0deg", opacity: 0 },
                }}
                initial={"initial"}
                animate={isInView ? "viewT" : "viewF"}
                transition={{ duration: 0.5, ease: "backInOut", delay: 0.1 }}
              >
                Global digital design studio partnering
              </motion.div>
            </div>
            <div className="overflow-hidden">
              <motion.div
                className="text-lg font-medium "
                variants={{
                  initial: { y: "130%", rotate: "5deg" },
                  viewT: { y: "0%", rotate: "0deg" },
                  viewF: { y: "-130%", rotate: "0deg", opacity: 0 },
                }}
                initial={"initial"}
                animate={isInView ? "viewT" : "viewF"}
                transition={{ duration: 0.5, ease: "backInOut", delay: 0.15 }}
              >
                with brands and business that create
              </motion.div>
            </div>
            <div className="overflow-hidden">
              <motion.div
                className="text-lg font-medium "
                variants={{
                  initial: { y: "130%", rotate: "5deg" },
                  viewT: { y: "0%", rotate: "0deg" },
                  viewF: { y: "-130%", rotate: "0deg", opacity: 0 },
                }}
                initial={"initial"}
                animate={isInView ? "viewT" : "viewF"}
                transition={{ duration: 0.5, ease: "backInOut", delay: 0.2 }}
              >
                exceptional experiences where people
              </motion.div>
            </div>
            <div className="overflow-hidden">
              <motion.div
                className="text-lg font-medium"
                variants={{
                  initial: { y: "130%", rotate: "5deg" },
                  viewT: { y: "0%", rotate: "0deg" },
                  viewF: { y: "-130%", rotate: "0deg", opacity: 0 },
                }}
                initial={"initial"}
                animate={isInView ? "viewT" : "viewF"}
                transition={{ duration: 0.5, ease: "backInOut", delay: 0.25 }}
              >
                live, work and unwind.
              </motion.div>
            </div>
          </div>
          <div className="text-6xl mb-5 font-medium ">
            <div className=" overflow-hidden">
              <motion.div
                className="pb-2"
                variants={{
                  initial: { y: "135%", rotate: "10deg" },
                  viewT: { y: "0%", rotate: "0deg" },
                  viewF: { y: "-135%", rotate: "-10deg" },
                }}
                initial={"initial"}
                animate={isInView ? "viewT" : "viewF"}
                transition={{ duration: 0.5, ease: "backInOut", delay: 0.5 }}
              >
                Digital
              </motion.div>
            </div>
            <div className=" overflow-hidden">
              <motion.div
                className="pb-2"
                variants={{
                  initial: { y: "135%", rotate: "10deg" },
                  viewT: { y: "0%", rotate: "0deg" },
                  viewF: { y: "-135%", rotate: "-10deg" },
                }}
                initial={"initial"}
                animate={isInView ? "viewT" : "viewF"}
                transition={{ duration: 0.5, ease: "backInOut", delay: 0.55 }}
              >
                Design
              </motion.div>
            </div>
            <div className=" overflow-hidden">
              <motion.div
                className="pb-2"
                variants={{
                  initial: { y: "135%", rotate: "10deg" },
                  viewT: { y: "0%", rotate: "0deg" },
                  viewF: { y: "-135%", rotate: "-10deg" },
                }}
                initial={"initial"}
                animate={isInView ? "viewT" : "viewF"}
                transition={{ duration: 0.5, ease: "backInOut", delay: 0.6 }}
              >
                Experience
              </motion.div>
            </div>
          </div>
          <div className="my-5 text-2xl">&darr;</div>
          <div className="text-lg font-medium">
            We help experience-driven companies thrive by making their audience
            feel the refined intricacies of their brand and product in the
            digital space.
          </div>
          <div className="text-lg font-medium mb-5">
            Unforgettable journeys start with a click.
          </div>
          <div className="flex items-center pb-7">
            <div className=" border-2 rounded-full h-2 w-2 -ml-3 mr-1 "></div>
            <div className="text-lg font-medium underline underline-offset-4">
              The Studio
            </div>
          </div>
        </motion.div>
      </div>
      {/* test */}
      <div className="w-screen bg-slate-500 h-[100vh] t-[100] mt-4"></div>
    </div>
  );
}
