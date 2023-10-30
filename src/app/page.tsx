"use client";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "@studio-freight/lenis";
export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backGroundPic = useTransform(scrollYProgress, [0, 1], ["1", "1.1"]);
  const backGroundPic2 = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const text = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
 
  useEffect(()=>{
    const lenis = new Lenis()
    lenis.on('scroll', (e:any) => {
      console.log(e)
    })
    
    function raf(time:any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  })

  
  
  return (
    <div className="text-slate-100">
      {/* main image */}
      <motion.div
        style={{ scale: backGroundPic, y: backGroundPic2 }}
        className="bg-[url('../../public/assests/images/exo-ape-hero-1.jpg')] h-full w-screen bg-center  bg-cover absolute"
      >
        <div className="bg-black bg-opacity-20"></div>
      </motion.div>

      <div className="relative" >
        {/* nav bar */}
        <motion.div ref={ref} style={{ y: text }}>
          <div className="flex justify-between items-center pt-5 pb-52">
            <div className="flex ">
              <div className="pl-5  font-bold text-3xl origin-bottom ">exo</div>
              <div className="pl-1  font-light text-3xl  italic">ape</div>
            </div>
            <div className="flex pr-5 md:hidden">
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
          </div>
          
        </motion.div>
        {/* hero texts */}
        <motion.div className="flex-col px-5 pt-4" style={{ y: text }}>
        <div className="text-lg font-medium pb-5 " >
            Global digital design studio partnering with brands businesses that
            create exceptional experiences where people live, work, and unwind.
          </div>
          <div className="text-6xl mb-5 font-medium ">
            <div>Digital</div>
            <div>Design</div>
            <div>Experience</div>
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
      <div className="w-80 h-[300vh] mt-[30vh] bg-black inline-block"></div>
    </div>
  );
}
